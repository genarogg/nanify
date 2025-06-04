"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import React from "react"
import "./styles.css"

import LightControlsPanel from "./LightControlsPanel"

interface Particle {
    x: number
    y: number
    size: number
    speedX: number
    speedY: number
    color: string
    opacity: number
    life: number
    maxLife: number
}

interface Line {
    startX: number
    startY: number
    endX: number
    endY: number
    width: number
    color: string
    opacity: number
    life: number
    maxLife: number
}

interface Gradient {
    id: number
    x: number
    y: number
    radius: number
    colors: string[]
    targetX: number
    targetY: number
    speed: number
    opacity: number
    intensity: number
}

interface LightControl {
    id: number
    x: number
    y: number
    intensity: number
}

interface AnimatedBackgroundProps {
    children: React.ReactNode
    className?: string
    intensity?: "low" | "medium" | "high"
    showGrid?: boolean
    showParticles?: boolean
    showGradients?: boolean
    enableMouseInteraction?: boolean
    movingLights?: boolean
    showLightControls?: boolean
    onLightControlsChange?: (lights: LightControl[]) => void
    initialLightControls?: LightControl[]
}

export default function AnimatedBackground({
    children,
    className = "",
    intensity = "medium",
    showGrid = true,
    showParticles = true,
    showGradients = true,
    enableMouseInteraction = true,
    movingLights = true,
    showLightControls = false,
    onLightControlsChange,
    initialLightControls = [],
}: AnimatedBackgroundProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const animationFrameId = useRef<number>(0)

    const [isDark, setIsDark] = useState(true)
    const [lightControls, setLightControls] = useState<LightControl[]>(initialLightControls)
    const [controlsVisible, setControlsVisible] = useState(false)

    const particles = useRef<Particle[]>([])
    const lines = useRef<Line[]>([])
    const gradients = useRef<Gradient[]>([])
    const lastTime = useRef<number>(0)

    // Detectar tema desde CSS variables o clase del documento
    useEffect(() => {
        const detectTheme = () => {
            const htmlElement = document.documentElement
            const isDarkMode =
                htmlElement.classList.contains("dark") ||
                window.matchMedia("(prefers-color-scheme: dark)").matches
            setIsDark(isDarkMode)
        }

        detectTheme()

        const observer = new MutationObserver(detectTheme)
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["class"],
        })

        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
        mediaQuery.addEventListener("change", detectTheme)

        return () => {
            observer.disconnect()
            mediaQuery.removeEventListener("change", detectTheme)
        }
    }, [])

    // Configuración basada en intensidad
    const getIntensityConfig = () => {
        switch (intensity) {
            case "low":
                return {
                    particleCount: 30,
                    gradientCount: 4,
                    mouseParticles: 1,
                    randomParticleChance: 0.05,
                    connectionDistance: 80,
                    gridOpacity: 0.049,
                    gradientOpacity: 0.8,
                }
            case "high":
                return {
                    particleCount: 80,
                    gradientCount: 12,
                    mouseParticles: 3,
                    randomParticleChance: 0.15,
                    connectionDistance: 120,
                    gridOpacity: 0.06,
                    gradientOpacity: 1.2,
                }
            default: // medium
                return {
                    particleCount: 50,
                    gradientCount: 8,
                    mouseParticles: 2,
                    randomParticleChance: 0.1,
                    connectionDistance: 100,
                    gridOpacity: 0.04,
                    gradientOpacity: 1.0,
                }
        }
    }

    const config = getIntensityConfig()

    // Actualizar controles de luz cuando cambian (solo si se muestran los controles)
    useEffect(() => {
        if (showLightControls && onLightControlsChange) {
            onLightControlsChange(lightControls)
        }
    }, [lightControls, onLightControlsChange, showLightControls])

    // Manejar click en canvas para agregar/mover luces (solo si se muestran los controles)
    const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
        if (!showLightControls || !controlsVisible || movingLights) return

        const canvas = canvasRef.current
        if (!canvas) return

        const rect = canvas.getBoundingClientRect()
        const x = (e.clientX - rect.left) / rect.width
        const y = (e.clientY - rect.top) / rect.height

        // Agregar nueva luz
        const newLight: LightControl = {
            id: Date.now(),
            x: x * 100, // Convertir a porcentaje
            y: y * 100,
            intensity: 1.0
        }

        setLightControls(prev => [...prev, newLight])
    }

    // Callback para manejar cambios en los controles de luz
    const handleLightControlsChange = (lights: LightControl[]) => {
        setLightControls(lights)
    }

    // Callback para manejar visibilidad de controles
    const handleToggleControls = () => {
        setControlsVisible(!controlsVisible)
    }

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext("2d")
        if (!ctx) return

        // Resize canvas to viewport size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
            if (showGradients) {
                initGradients()
            }
        }

        const handleMouseMove = (e: MouseEvent) => {
            if (!enableMouseInteraction) return

            // Crear partículas en la posición del mouse
            if (showParticles) {
                createParticlesAtPosition(e.clientX, e.clientY, config.mouseParticles)
            }
        }

        const createParticlesAtPosition = (x: number, y: number, count: number) => {
            for (let i = 0; i < count; i++) {
                const angle = Math.random() * Math.PI * 2
                const speed = 0.2 + Math.random() * 0.8
                const size = 1 + Math.random() * 3
                const life = 50 + Math.random() * 100

                // Colores racing theme
                const colors = isDark
                    ? [
                        "rgba(0, 191, 255, 0.8)",
                        "rgba(139, 92, 246, 0.8)",
                        "rgba(236, 72, 153, 0.8)",
                        "rgba(59, 130, 246, 0.8)",
                        "rgba(252, 211, 77, 0.8)",
                    ]
                    : [
                        "rgba(0, 191, 255, 0.5)",
                        "rgba(139, 92, 246, 0.5)",
                        "rgba(236, 72, 153, 0.5)",
                        "rgba(59, 130, 246, 0.5)",
                        "rgba(252, 211, 77, 0.5)",
                    ]

                particles.current.push({
                    x,
                    y,
                    size,
                    speedX: Math.cos(angle) * speed,
                    speedY: Math.sin(angle) * speed,
                    color: colors[Math.floor(Math.random() * colors.length)],
                    opacity: 0.7 + Math.random() * 0.3,
                    life,
                    maxLife: life,
                })
            }
        }

        const createRandomParticles = (count: number) => {
            for (let i = 0; i < count; i++) {
                const x = Math.random() * canvas.width
                const y = Math.random() * canvas.height
                const angle = Math.random() * Math.PI * 2
                const speed = 0.1 + Math.random() * 0.3
                const size = 1 + Math.random() * 2
                const life = 100 + Math.random() * 200

                const colors = isDark
                    ? [
                        "rgba(0, 191, 255, 0.6)",
                        "rgba(139, 92, 246, 0.6)",
                        "rgba(236, 72, 153, 0.6)",
                        "rgba(59, 130, 246, 0.6)",
                        "rgba(252, 211, 77, 0.6)",
                    ]
                    : [
                        "rgba(0, 191, 255, 0.3)",
                        "rgba(139, 92, 246, 0.3)",
                        "rgba(236, 72, 153, 0.3)",
                        "rgba(59, 130, 246, 0.3)",
                        "rgba(252, 211, 77, 0.3)",
                    ]

                particles.current.push({
                    x,
                    y,
                    size,
                    speedX: Math.cos(angle) * speed,
                    speedY: Math.sin(angle) * speed,
                    color: colors[Math.floor(Math.random() * colors.length)],
                    opacity: 0.3 + Math.random() * 0.3,
                    life,
                    maxLife: life,
                })
            }
        }

        const createLine = (startX: number, startY: number, endX: number, endY: number) => {
            const width = 0.5 + Math.random() * 1
            const life = 30 + Math.random() * 50

            const colors = isDark
                ? ["rgba(0, 191, 255, 0.3)", "rgba(139, 92, 246, 0.3)", "rgba(236, 72, 153, 0.3)", "rgba(59, 130, 246, 0.3)"]
                : [
                    "rgba(0, 191, 255, 0.15)",
                    "rgba(139, 92, 246, 0.15)",
                    "rgba(236, 72, 153, 0.15)",
                    "rgba(59, 130, 246, 0.15)",
                ]

            lines.current.push({
                startX,
                startY,
                endX,
                endY,
                width,
                color: colors[Math.floor(Math.random() * colors.length)],
                opacity: 0.2 + Math.random() * 0.3,
                life,
                maxLife: life,
            })
        }

        const initGradients = () => {
            gradients.current = []

            const gradientColors = isDark
                ? [
                    ["rgba(0, 191, 255, 0.15)", "rgba(0, 0, 0, 0)"],
                    ["rgba(139, 92, 246, 0.12)", "rgba(0, 0, 0, 0)"],
                    ["rgba(236, 72, 153, 0.12)", "rgba(0, 0, 0, 0)"],
                    ["rgba(59, 130, 246, 0.12)", "rgba(0, 0, 0, 0)"],
                    ["rgba(252, 211, 77, 0.12)", "rgba(0, 0, 0, 0)"],
                ]
                : [
                    ["rgba(0, 191, 255, 0.08)", "rgba(255, 255, 255, 0)"],
                    ["rgba(139, 92, 246, 0.06)", "rgba(255, 255, 255, 0)"],
                    ["rgba(236, 72, 153, 0.06)", "rgba(255, 255, 255, 0)"],
                    ["rgba(59, 130, 246, 0.06)", "rgba(255, 255, 255, 0)"],
                    ["rgba(252, 211, 77, 0.06)", "rgba(255, 255, 255, 0)"],
                ]

            if (movingLights) {
                // Crear gradientes con movimiento automático
                for (let i = 0; i < config.gradientCount; i++) {
                    const x = Math.random() * canvas.width
                    const y = Math.random() * canvas.height
                    const radius = canvas.width * (0.2 + Math.random() * 0.3)
                    const colorSet = gradientColors[Math.floor(Math.random() * gradientColors.length)]

                    const targetX = Math.random() * canvas.width
                    const targetY = Math.random() * canvas.height

                    gradients.current.push({
                        id: i,
                        x,
                        y,
                        radius,
                        colors: colorSet,
                        targetX,
                        targetY,
                        speed: 0.2 + Math.random() * 0.3,
                        opacity: 0.5 + Math.random() * 0.5,
                        intensity: 1.0,
                    })
                }
            } else if (showLightControls) {
                // Crear gradientes basados en controles manuales
                lightControls.forEach((control, index) => {
                    const x = (control.x / 100) * canvas.width
                    const y = (control.y / 100) * canvas.height
                    const radius = canvas.width * (0.15 + control.intensity * 0.25)
                    const colorSet = gradientColors[index % gradientColors.length]

                    gradients.current.push({
                        id: control.id,
                        x,
                        y,
                        radius,
                        colors: colorSet,
                        targetX: x,
                        targetY: y,
                        speed: 0,
                        opacity: 0.3 + control.intensity * 0.7,
                        intensity: control.intensity,
                    })
                })
            }
        }

        const updateParticles = (deltaTime: number) => {
            if (!showParticles) return

            particles.current = particles.current.filter((particle) => {
                particle.x += particle.speedX * deltaTime
                particle.y += particle.speedY * deltaTime
                particle.life -= deltaTime
                particle.opacity = (particle.life / particle.maxLife) * 0.8
                return particle.life > 0
            })
        }

        const updateLines = (deltaTime: number) => {
            if (!showParticles) return

            lines.current = lines.current.filter((line) => {
                line.life -= deltaTime
                line.opacity = (line.life / line.maxLife) * 0.5
                return line.life > 0
            })

            if (particles.current.length > 1) {
                for (let i = 0; i < particles.current.length; i++) {
                    const particleA = particles.current[i]

                    for (let j = i + 1; j < particles.current.length; j++) {
                        const particleB = particles.current[j]

                        const dx = particleA.x - particleB.x
                        const dy = particleA.y - particleB.y
                        const distance = Math.sqrt(dx * dx + dy * dy)

                        if (distance < config.connectionDistance && Math.random() < 0.03) {
                            createLine(particleA.x, particleA.y, particleB.x, particleB.y)
                        }
                    }
                }
            }
        }

        const updateGradients = (deltaTime: number) => {
            if (!showGradients) return

            if (movingLights) {
                gradients.current.forEach((gradient) => {
                    const dx = gradient.targetX - gradient.x
                    const dy = gradient.targetY - gradient.y
                    const distance = Math.sqrt(dx * dx + dy * dy)

                    if (distance > 1) {
                        gradient.x += (dx / distance) * gradient.speed * deltaTime
                        gradient.y += (dy / distance) * gradient.speed * deltaTime
                    } else {
                        gradient.targetX = Math.random() * canvas.width
                        gradient.targetY = Math.random() * canvas.height
                    }

                    gradient.opacity = (0.5 + Math.sin(Date.now() * 0.001) * 0.2) * config.gradientOpacity
                })
            } else if (showLightControls) {
                gradients.current.forEach((gradient) => {
                    const control = lightControls.find(c => c.id === gradient.id)
                    if (control) {
                        gradient.x = (control.x / 100) * canvas.width
                        gradient.y = (control.y / 100) * canvas.height
                        gradient.radius = canvas.width * (0.15 + control.intensity * 0.25)
                        gradient.opacity = (0.3 + control.intensity * 0.7) * config.gradientOpacity
                        gradient.intensity = control.intensity
                    }
                })
            }
        }

        const drawParticles = (ctx: CanvasRenderingContext2D) => {
            if (!showParticles) return

            particles.current.forEach((particle) => {
                ctx.beginPath()
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
                ctx.fillStyle = particle.color.replace(/[\d.]+\)$/g, `${particle.opacity})`)
                ctx.fill()
            })
        }

        const drawLines = (ctx: CanvasRenderingContext2D) => {
            if (!showParticles) return

            lines.current.forEach((line) => {
                ctx.beginPath()
                ctx.moveTo(line.startX, line.startY)
                ctx.lineTo(line.endX, line.endY)
                ctx.lineWidth = line.width
                ctx.strokeStyle = line.color.replace(/[\d.]+\)$/g, `${line.opacity})`)
                ctx.stroke()
            })
        }

        const drawGradients = (ctx: CanvasRenderingContext2D) => {
            if (!showGradients) return

            gradients.current.forEach((gradient) => {
                const grd = ctx.createRadialGradient(gradient.x, gradient.y, 0, gradient.x, gradient.y, gradient.radius)

                const color1 = gradient.colors[0].replace(/[\d.]+\)$/g, `${gradient.opacity})`)
                grd.addColorStop(0, color1)
                grd.addColorStop(1, gradient.colors[1])

                ctx.fillStyle = grd
                ctx.beginPath()
                ctx.arc(gradient.x, gradient.y, gradient.radius, 0, Math.PI * 2)
                ctx.fill()
            })
        }

        const drawGridPattern = (ctx: CanvasRenderingContext2D) => {
            if (!showGrid) return

            const gridSize = 50
            const smallGridSize = 10

            const gridColor = isDark ? `rgba(255, 255, 255, ${config.gridOpacity})` : `rgba(0, 0, 0, ${config.gridOpacity})`
            const smallGridColor = isDark
                ? `rgba(255, 255, 255, ${config.gridOpacity * 0.3})`
                : `rgba(0, 0, 0, ${config.gridOpacity * 0.3})`

            ctx.strokeStyle = gridColor
            ctx.lineWidth = 0.5

            for (let y = 0; y < canvas.height; y += gridSize) {
                ctx.beginPath()
                ctx.moveTo(0, y)
                ctx.lineTo(canvas.width, y)
                ctx.stroke()
            }

            for (let x = 0; x < canvas.width; x += gridSize) {
                ctx.beginPath()
                ctx.moveTo(x, 0)
                ctx.lineTo(x, canvas.height)
                ctx.stroke()
            }

            ctx.strokeStyle = smallGridColor
            ctx.lineWidth = 0.2

            for (let y = 0; y < canvas.height; y += smallGridSize) {
                if (y % gridSize !== 0) {
                    ctx.beginPath()
                    ctx.moveTo(0, y)
                    ctx.lineTo(canvas.width, y)
                    ctx.stroke()
                }
            }

            for (let x = 0; x < canvas.width; x += smallGridSize) {
                if (x % gridSize !== 0) {
                    ctx.beginPath()
                    ctx.moveTo(x, 0)
                    ctx.lineTo(x, canvas.height)
                    ctx.stroke()
                }
            }
        }

        const animate = (timestamp: number) => {
            if (!lastTime.current) lastTime.current = timestamp
            const deltaTime = timestamp - lastTime.current
            lastTime.current = timestamp

            const ctx = canvas.getContext("2d")
            if (!ctx) return

            ctx.clearRect(0, 0, canvas.width, canvas.height)

            ctx.fillStyle = isDark ? "#000000" : "#f8f9fa"
            ctx.fillRect(0, 0, canvas.width, canvas.height)

            drawGridPattern(ctx)
            drawGradients(ctx)
            drawLines(ctx)
            drawParticles(ctx)

            updateGradients(deltaTime)
            updateParticles(deltaTime)
            updateLines(deltaTime)

            if (showParticles && Math.random() < config.randomParticleChance) {
                createRandomParticles(1)
            }

            animationFrameId.current = requestAnimationFrame(animate)
        }

        resizeCanvas()
        if (showGradients) {
            initGradients()
        }
        if (showParticles) {
            createRandomParticles(config.particleCount)
        }

        window.addEventListener("resize", resizeCanvas)
        if (enableMouseInteraction) {
            window.addEventListener("mousemove", handleMouseMove)
        }

        animationFrameId.current = requestAnimationFrame(animate)

        return () => {
            window.removeEventListener("resize", resizeCanvas)
            if (enableMouseInteraction) {
                window.removeEventListener("mousemove", handleMouseMove)
            }
            cancelAnimationFrame(animationFrameId.current)
        }
    }, [isDark, intensity, showGrid, showParticles, showGradients, enableMouseInteraction, movingLights, lightControls, showLightControls])

    return (
        <div className={`animated-background-container ${className}`}>
            {/* Canvas de fondo */}
            <motion.canvas
                ref={canvasRef}
                className={`animated-background-canvas ${showLightControls && controlsVisible && !movingLights ? 'canvas-crosshair' : 'canvas-default'}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                onClick={handleCanvasClick}
            />

            {/* Contenido */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="animated-background-content"
            >
                <div className="animated-background-content-inner">
                    {children}
                </div>
            </motion.div>

            {/* Panel de controles - Solo se renderiza si showLightControls es true */}
            {showLightControls && !movingLights && (
                <LightControlsPanel
                    lightControls={lightControls}
                    onLightControlsChange={handleLightControlsChange}
                    onToggleControls={handleToggleControls}
                />
            )}
        </div>
    )
}