"use client"

import type React from "react"
import "./grid-wrapper.css"

interface GridWrapperProps {
  children: React.ReactNode
  className?: string
  gridColor?: string
  gridSize?: number
  backgroundColor?: string
  style?: React.CSSProperties
}

const GridWrapper = ({
  children,
  className = "",
  gridColor = "rgba(128, 90, 213, 0.2)",
  gridSize = 40,
  backgroundColor = "#0c0118",
  style = {},
}: GridWrapperProps) => {
  const wrapperStyle: React.CSSProperties = {
    backgroundColor,
    "--grid-color": gridColor,
    "--grid-size": `${gridSize}px`,
    ...style,
  } as React.CSSProperties

  return (
    <div className={`gridWrapper ${className}`} style={wrapperStyle}>
      {children}
    </div>
  )
}

export default GridWrapper
