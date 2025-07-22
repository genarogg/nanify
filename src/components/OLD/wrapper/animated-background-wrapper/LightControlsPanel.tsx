// LightControlsPanel.tsx
import { useState } from "react"
import { motion } from "framer-motion"

interface LightControl {
    id: number
    x: number
    y: number
    intensity: number
}

const LightControlsPanel = ({
    lightControls,
    onLightControlsChange,
    onToggleControls
}: {
    lightControls: LightControl[]
    onLightControlsChange: (lights: LightControl[]) => void
    onToggleControls: () => void
}) => {
    const [showControls, setShowControls] = useState(false)

    const removeLight = (id: number) => {
        onLightControlsChange(lightControls.filter(light => light.id !== id))
    }

    const updateLightIntensity = (id: number, intensity: number) => {
        onLightControlsChange(
            lightControls.map(light =>
                light.id === id ? { ...light, intensity } : light
            )
        )
    }

    const updateLightPosition = (id: number, x: number, y: number) => {
        onLightControlsChange(
            lightControls.map(light =>
                light.id === id ? { ...light, x, y } : light
            )
        )
    }

    const clearAllLights = () => {
        onLightControlsChange([])
    }

    const copyLightsConfiguration = () => {
        const config = lightControls.map(light => ({
            id: light.id,
            x: parseFloat(light.x.toFixed(1)),
            y: parseFloat(light.y.toFixed(1)),
            intensity: parseFloat(light.intensity.toFixed(1))
        }))
        
        const configText = `const basicLights: LightControl[] = [\n${config.map(light => 
            `    { id: ${light.id}, x: ${light.x}, y: ${light.y}, intensity: ${light.intensity} }`
        ).join(',\n')}\n]`
        
        navigator.clipboard.writeText(configText).then(() => {
            // Opcional: mostrar feedback visual
            console.log('Configuración copiada al portapapeles')
        }).catch(err => {
            console.error('Error al copiar:', err)
        })
    }

    const addNewLight = () => {
        const newLight: LightControl = {
            id: Date.now(),
            x: 50, // Centro horizontal
            y: 50, // Centro vertical
            intensity: 1.0
        }
        onLightControlsChange([...lightControls, newLight])
    }

    const toggleControls = () => {
        setShowControls(!showControls)
        onToggleControls()
    }

    return (
        <div className="light-controls-panel">
            <button
                onClick={toggleControls}
                className="light-controls-toggle"
            >
                {showControls ? 'Ocultar Controles' : 'Mostrar Controles'}
            </button>

            {showControls && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="light-controls-container"
                >
                    <div>
                        <h3 className="light-controls-title">Control de Luces</h3>
                        <p className="light-controls-description">
                            Haz clic en el canvas para agregar luces o usa el botón de abajo
                        </p>

                        <div style={{ marginBottom: '1rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                            <button
                                onClick={addNewLight}
                                style={{
                                    backgroundColor: '#059669',
                                    color: 'white',
                                    padding: '0.5rem 1rem',
                                    border: 'none',
                                    borderRadius: '0.5rem',
                                    fontSize: '0.875rem',
                                    cursor: 'pointer',
                                    transition: 'background-color 0.2s',
                                    flex: '1',
                                    minWidth: 'fit-content'
                                }}
                                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#047857'}
                                onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#059669'}
                            >
                                + Agregar Luz
                            </button>
                            
                            {lightControls.length > 0 && (
                                <button
                                    onClick={copyLightsConfiguration}
                                    style={{
                                        backgroundColor: '#7c3aed',
                                        color: 'white',
                                        padding: '0.5rem 1rem',
                                        border: 'none',
                                        borderRadius: '0.5rem',
                                        fontSize: '0.875rem',
                                        cursor: 'pointer',
                                        transition: 'background-color 0.2s',
                                        flex: '1',
                                        minWidth: 'fit-content'
                                    }}
                                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#6d28d9'}
                                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#7c3aed'}
                                >
                                    📋 Copiar Config
                                </button>
                            )}
                        </div>

                        {lightControls.length === 0 && (
                            <p className="light-controls-empty">
                                No hay luces configuradas
                            </p>
                        )}

                        {lightControls.map((light, index) => (
                            <div key={light.id} className="light-control-item">
                                <div className="light-control-header">
                                    <span className="light-control-label">Luz {index + 1}</span>
                                    <button
                                        onClick={() => removeLight(light.id)}
                                        className="light-control-remove"
                                    >
                                        Eliminar
                                    </button>
                                </div>

                                <div className="light-control-inputs">
                                    <div className="light-control-input-group">
                                        <label className="light-control-input-label">Posición X (%)</label>
                                        <input
                                            type="range"
                                            min="0"
                                            max="100"
                                            value={light.x}
                                            onChange={(e) => updateLightPosition(light.id, parseFloat(e.target.value), light.y)}
                                            className="light-control-input"
                                        />
                                        <span className="light-control-value">{light.x.toFixed(1)}%</span>
                                    </div>

                                    <div className="light-control-input-group">
                                        <label className="light-control-input-label">Posición Y (%)</label>
                                        <input
                                            type="range"
                                            min="0"
                                            max="100"
                                            value={light.y}
                                            onChange={(e) => updateLightPosition(light.id, light.x, parseFloat(e.target.value))}
                                            className="light-control-input"
                                        />
                                        <span className="light-control-value">{light.y.toFixed(1)}%</span>
                                    </div>

                                    <div className="light-control-input-group">
                                        <label className="light-control-input-label">Intensidad</label>
                                        <input
                                            type="range"
                                            min="0.1"
                                            max="2.0"
                                            step="0.1"
                                            value={light.intensity}
                                            onChange={(e) => updateLightIntensity(light.id, parseFloat(e.target.value))}
                                            className="light-control-input"
                                        />
                                        <span className="light-control-value">{light.intensity.toFixed(1)}x</span>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {lightControls.length > 0 && (
                            <button
                                onClick={clearAllLights}
                                className="light-controls-clear"
                            >
                                Limpiar Todas las Luces
                            </button>
                        )}
                    </div>
                </motion.div>
            )}
        </div>
    )
}

export default LightControlsPanel