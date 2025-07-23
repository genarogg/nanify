"use client"

// Componentes de ejemplo para demostrar el uso
export const ButtonsContent = () => (
  <div>
    <h2 style={{ marginBottom: "20px", fontSize: "28px", fontWeight: "600", color: "#111827" }}>Buttons</h2>
    <p style={{ marginBottom: "24px", color: "#6b7280", fontSize: "16px", lineHeight: "1.6" }}>
      Aquí puedes encontrar diferentes tipos de botones y sus variaciones para tu interfaz.
    </p>
    <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", alignItems: "center" }}>
      <button
        style={{
          padding: "12px 24px",
          backgroundColor: "#3b82f6",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "14px",
          fontWeight: "500",
          transition: "all 0.2s ease",
        }}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#2563eb")}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#3b82f6")}
      >
        Primary Button
      </button>
      <button
        style={{
          padding: "12px 24px",
          backgroundColor: "transparent",
          color: "#3b82f6",
          border: "2px solid #3b82f6",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "14px",
          fontWeight: "500",
          transition: "all 0.2s ease",
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.backgroundColor = "#3b82f6"
          e.currentTarget.style.color = "white"
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.backgroundColor = "transparent"
          e.currentTarget.style.color = "#3b82f6"
        }}
      >
        Secondary Button
      </button>
      <button
        style={{
          padding: "12px 24px",
          backgroundColor: "#ef4444",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "14px",
          fontWeight: "500",
          transition: "all 0.2s ease",
        }}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#dc2626")}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#ef4444")}
      >
        Danger Button
      </button>
    </div>
  </div>
)

export const CardsContent = () => (
  <div>
    <h2 style={{ marginBottom: "20px", fontSize: "28px", fontWeight: "600", color: "#111827" }}>Cards</h2>
    <p style={{ marginBottom: "24px", color: "#6b7280", fontSize: "16px", lineHeight: "1.6" }}>
      Componentes de tarjetas para mostrar información de manera organizada y atractiva.
    </p>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
      <div
        style={{
          padding: "24px",
          border: "1px solid #e5e7eb",
          borderRadius: "12px",
          backgroundColor: "#ffffff",
          boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
          transition: "all 0.2s ease",
        }}
        onMouseOver={(e) => (e.currentTarget.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)")}
        onMouseOut={(e) => (e.currentTarget.style.boxShadow = "0 1px 3px rgba(0, 0, 0, 0.1)")}
      >
        <h3 style={{ marginBottom: "12px", fontSize: "20px", fontWeight: "600", color: "#111827" }}>Card Title</h3>
        <p style={{ color: "#6b7280", fontSize: "14px", lineHeight: "1.5" }}>
          Esta es una tarjeta de ejemplo con contenido descriptivo que muestra cómo se ve el diseño.
        </p>
      </div>
      <div
        style={{
          padding: "24px",
          border: "1px solid #e5e7eb",
          borderRadius: "12px",
          backgroundColor: "#ffffff",
          boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
          transition: "all 0.2s ease",
        }}
        onMouseOver={(e) => (e.currentTarget.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)")}
        onMouseOut={(e) => (e.currentTarget.style.boxShadow = "0 1px 3px rgba(0, 0, 0, 0.1)")}
      >
        <h3 style={{ marginBottom: "12px", fontSize: "20px", fontWeight: "600", color: "#111827" }}>Another Card</h3>
        <p style={{ color: "#6b7280", fontSize: "14px", lineHeight: "1.5" }}>
          Otra tarjeta para demostrar el diseño responsive y la consistencia visual.
        </p>
      </div>
    </div>
  </div>
)

export const FormsContent = () => (
  <div>
    <h2 style={{ marginBottom: "20px", fontSize: "28px", fontWeight: "600", color: "#111827" }}>Forms</h2>
    <p style={{ marginBottom: "24px", color: "#6b7280", fontSize: "16px", lineHeight: "1.6" }}>
      Elementos de formulario con diferentes estados y validaciones.
    </p>
    <form style={{ maxWidth: "500px" }}>
      <div style={{ marginBottom: "20px" }}>
        <label style={{ display: "block", marginBottom: "8px", fontSize: "14px", fontWeight: "500", color: "#374151" }}>
          Nombre completo
        </label>
        <input
          type="text"
          style={{
            width: "100%",
            padding: "12px 16px",
            border: "2px solid #e5e7eb",
            borderRadius: "8px",
            fontSize: "14px",
            transition: "border-color 0.2s ease",
            outline: "none",
          }}
          placeholder="Ingresa tu nombre completo"
          onFocus={(e) => (e.currentTarget.style.borderColor = "#3b82f6")}
          onBlur={(e) => (e.currentTarget.style.borderColor = "#e5e7eb")}
        />
      </div>
      <div style={{ marginBottom: "20px" }}>
        <label style={{ display: "block", marginBottom: "8px", fontSize: "14px", fontWeight: "500", color: "#374151" }}>
          Correo electrónico
        </label>
        <input
          type="email"
          style={{
            width: "100%",
            padding: "12px 16px",
            border: "2px solid #e5e7eb",
            borderRadius: "8px",
            fontSize: "14px",
            transition: "border-color 0.2s ease",
            outline: "none",
          }}
          placeholder="tu@email.com"
          onFocus={(e) => (e.currentTarget.style.borderColor = "#3b82f6")}
          onBlur={(e) => (e.currentTarget.style.borderColor = "#e5e7eb")}
        />
      </div>
      <button
        type="submit"
        style={{
          padding: "12px 32px",
          backgroundColor: "#3b82f6",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "14px",
          fontWeight: "500",
          transition: "all 0.2s ease",
        }}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#2563eb")}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#3b82f6")}
      >
        Enviar formulario
      </button>
    </form>
  </div>
)

export const FeedbackContent = () => (
  <div>
    <h2 style={{ marginBottom: "20px", fontSize: "28px", fontWeight: "600", color: "#111827" }}>Feedback</h2>
    <p style={{ marginBottom: "24px", color: "#6b7280", fontSize: "16px", lineHeight: "1.6" }}>
      Componentes para mostrar retroalimentación y notificaciones al usuario.
    </p>
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <div
        style={{
          padding: "16px 20px",
          backgroundColor: "#dcfce7",
          border: "1px solid #bbf7d0",
          borderRadius: "8px",
          color: "#166534",
          fontSize: "14px",
          fontWeight: "500",
        }}
      >
        <span style={{ marginRight: "8px" }}>✅</span>
        Operación completada exitosamente
      </div>
      <div
        style={{
          padding: "16px 20px",
          backgroundColor: "#fef3c7",
          border: "1px solid #fde68a",
          borderRadius: "8px",
          color: "#92400e",
          fontSize: "14px",
          fontWeight: "500",
        }}
      >
        <span style={{ marginRight: "8px" }}>⚠️</span>
        Advertencia: Revisa los datos ingresados
      </div>
      <div
        style={{
          padding: "16px 20px",
          backgroundColor: "#fee2e2",
          border: "1px solid #fecaca",
          borderRadius: "8px",
          color: "#991b1b",
          fontSize: "14px",
          fontWeight: "500",
        }}
      >
        <span style={{ marginRight: "8px" }}>❌</span>
        Error: No se pudo completar la operación
      </div>
    </div>
  </div>
)
