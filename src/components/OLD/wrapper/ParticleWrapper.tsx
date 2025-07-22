"use client"

import React from "react"

interface ParticleWrapperProps {
  children: React.ReactNode
  particleCount?: number
  particleColors?: string[]
  particleSize?: number
  animationSpeed?: number
  trailLength?: number
  flowDirection?: "leftToRight" | "bounce"
}

export default function ParticleWrapper({
  children,
  particleCount = 50,
  particleColors = ["#ffffff"],
  particleSize = 2,
  animationSpeed = 1,
  trailLength = 1,
  flowDirection = "bounce",
}: ParticleWrapperProps) {
  const canvasRef = React.useRef<HTMLCanvasElement>(null)
  const containerRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Configurar tamaño del canvas
    const updateCanvasSize = () => {
      const rect = container.getBoundingClientRect()
      canvas.width = rect.width
      canvas.height = rect.height
    }

    updateCanvasSize()

    // Crear partículas con historial de posiciones para la estela
    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
      color: string
      trail: Array<{ x: number; y: number }>
    }> = []

    const createParticle = (isInitial = true) => {
      if (flowDirection === "leftToRight") {
        return {
          x: isInitial ? Math.random() * canvas.width : -particleSize,
          y: Math.random() * canvas.height,
          vx: Math.random() * animationSpeed + 0.5, // Velocidad siempre hacia la derecha
          vy: (Math.random() - 0.5) * animationSpeed * 0.5, // Movimiento vertical más sutil
          size: Math.random() * particleSize + 0.5,
          opacity: Math.random() * 0.6 + 0.4,
          color: particleColors[Math.floor(Math.random() * particleColors.length)],
          trail: [],
        }
      } else {
        return {
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * animationSpeed * 2,
          vy: (Math.random() - 0.5) * animationSpeed * 2,
          size: Math.random() * particleSize + 0.5,
          opacity: Math.random() * 0.6 + 0.4,
          color: particleColors[Math.floor(Math.random() * particleColors.length)],
          trail: [],
        }
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(createParticle(true))
    }

    let animationId: number

    const animate = () => {
      // Limpiar canvas con un efecto de desvanecimiento sutil para la estela
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      for (let i = particles.length - 1; i >= 0; i--) {
        const particle = particles[i]

        // Guardar posición actual en el historial de la estela
        particle.trail.push({ x: particle.x, y: particle.y })

        // Limitar el tamaño de la estela
        if (particle.trail.length > trailLength) {
          particle.trail.shift()
        }

        // Actualizar posición
        particle.x += particle.vx
        particle.y += particle.vy

        if (flowDirection === "leftToRight") {
          // En modo flujo, rebotar solo en bordes superior e inferior
          if (particle.y <= 0 || particle.y >= canvas.height) {
            particle.vy *= -1
          }

          // Mantener partícula dentro del canvas en Y
          particle.y = Math.max(0, Math.min(canvas.height, particle.y))

          // Si la partícula sale por la derecha, crear una nueva por la izquierda
          if (particle.x > canvas.width + particleSize) {
            particles[i] = createParticle(false)
            continue
          }
        } else {
          // Comportamiento original de rebote
          if (particle.x <= 0 || particle.x >= canvas.width) {
            particle.vx *= -1
          }
          if (particle.y <= 0 || particle.y >= canvas.height) {
            particle.vy *= -1
          }

          // Mantener partículas dentro del canvas
          particle.x = Math.max(0, Math.min(canvas.width, particle.x))
          particle.y = Math.max(0, Math.min(canvas.height, particle.y))
        }

        // Dibujar estela
        particle.trail.forEach((trailPoint, index) => {
          const trailOpacity = (index / particle.trail.length) * particle.opacity * 0.3
          const trailSize = (index / particle.trail.length) * particle.size * 0.5

          ctx.save()
          ctx.globalAlpha = trailOpacity
          ctx.fillStyle = particle.color
          ctx.beginPath()
          ctx.arc(trailPoint.x, trailPoint.y, trailSize, 0, Math.PI * 2)
          ctx.fill()
          ctx.restore()
        })

        // Dibujar partícula principal
        ctx.save()
        ctx.globalAlpha = particle.opacity
        ctx.fillStyle = particle.color
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()

        // Agregar un pequeño brillo
        ctx.globalAlpha = particle.opacity * 0.5
        ctx.fillStyle = particle.color
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size * 1.5, 0, Math.PI * 2)
        ctx.fill()

        ctx.restore()
      }

      animationId = requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      updateCanvasSize()
      particles.forEach((particle) => {
        if (particle.x > canvas.width) particle.x = canvas.width
        if (particle.y > canvas.height) particle.y = canvas.height
      })
    }

    window.addEventListener("resize", handleResize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", handleResize)
    }
  }, [particleCount, particleColors, particleSize, animationSpeed, trailLength, flowDirection])

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "hidden",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          height: "100%",
        }}
      >
        {children}
      </div>
    </div>
  )
}