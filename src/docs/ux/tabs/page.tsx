import { Tabs } from "@components/ux"
import { ButtonsContent, CardsContent, FormsContent, FeedbackContent } from "./sample-components"

export default function Home() {
    // Configuración de las pestañas
    const tabsData = [
        {
            titulo: "Buttons",
            componente: <ButtonsContent />,
        },
        {
            titulo: "Cards",
            componente: <CardsContent />,
        },
        {
            titulo: "Forms",
            componente: <FormsContent />,
        },
        {
            titulo: "Feedback",
            componente: <FeedbackContent />,
        },
        {
            titulo: "Navigation",
            componente: (
                <div>
                    <h2 style={{ marginBottom: "20px", fontSize: "28px", fontWeight: "600", color: "#111827" }}>Navigation</h2>
                    <p style={{ color: "#6b7280", fontSize: "16px", lineHeight: "1.6" }}>
                        Componentes de navegación como menús, breadcrumbs y paginación para mejorar la experiencia del usuario.
                    </p>
                </div>
            ),
        },
        {
            titulo: "Data",
            componente: (
                <div>
                    <h2 style={{ marginBottom: "20px", fontSize: "28px", fontWeight: "600", color: "#111827" }}>Data</h2>
                    <p style={{ color: "#6b7280", fontSize: "16px", lineHeight: "1.6" }}>
                        Componentes para mostrar y manipular datos como tablas, listas y visualizaciones.
                    </p>
                </div>
            ),
        },
        {
            titulo: "Layout",
            componente: (
                <div>
                    <h2 style={{ marginBottom: "20px", fontSize: "28px", fontWeight: "600", color: "#111827" }}>Layout</h2>
                    <p style={{ color: "#6b7280", fontSize: "16px", lineHeight: "1.6" }}>
                        Componentes de diseño como grids, contenedores y espaciadores para estructurar tu interfaz.
                    </p>
                </div>
            ),
        },
        {
            titulo: "Media",
            componente: (
                <div>
                    <h2 style={{ marginBottom: "20px", fontSize: "28px", fontWeight: "600", color: "#111827" }}>Media</h2>
                    <p style={{ color: "#6b7280", fontSize: "16px", lineHeight: "1.6" }}>
                        Componentes para manejar imágenes, videos y otros elementos multimedia de manera eficiente.
                    </p>
                </div>
            ),
        },
    ]

    return (
        <div style={{ padding: "40px 20px", backgroundColor: "#f9fafb", minHeight: "100vh" }}>
            <div style={{ marginBottom: "40px", textAlign: "center" }}>
                <h1 style={{ fontSize: "36px", fontWeight: "700", marginBottom: "12px", color: "#111827" }}>
                    Componente de Pestañas
                </h1>
                <p style={{ color: "#6b7280", fontSize: "18px", maxWidth: "600px", margin: "0 auto", lineHeight: "1.6" }}>
                    Un ejemplo de barra de pestañas con animaciones fluidas y diseño moderno
                </p>
            </div>

            <Tabs tabs={tabsData} defaultTab={0} />
        </div>
    )
}
