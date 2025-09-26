"use client"
import type React from "react"
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
} from "@/components/ux"
import {
    User,
    Settings,
    CreditCard,
    HelpCircle,
    LogOut,
} from "lucide-react"
import "./perfil.css"

interface PerfilProps {
    userName?: string
    userEmail?: string
    avatarUrl?: string
}

const Perfil: React.FC<PerfilProps> = ({
    userName = "Musharof Chowdhury",
    userEmail = "randomuser@pimjo.com",
    avatarUrl,
}) => {
    const handleEditProfile = () => console.log("Perfil")
    const handleAccountSettings = () => console.log("Configuración")
    const handleBilling = () => console.log("Facturación")
    const handleSupport = () => console.log("Soporte")
    const handleSignOut = () => console.log("Cerrar sesión")

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button className="perfil-avatar-btn">
                    {avatarUrl ? (
                        <img src={avatarUrl} alt={userName} className="avatar-image" />
                    ) : (
                        <div className="avatar-placeholder">
                            {userName.charAt(0).toUpperCase()}
                        </div>
                    )}
                </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="perfil-dropdown-content" align="end" maxHeight={350} >
                {/* Encabezado con userName y email */}
                <div className="perfil-header">
                    <div className="perfil-name">{userName}</div>
                    <div className="perfil-email">{userEmail}</div>
                </div>

                <DropdownMenuSeparator />

                <DropdownMenuItem onClick={handleEditProfile} className="perfil-menu-item">
                    <User className="menu-icon" />
                    Perfil
                </DropdownMenuItem>

                <DropdownMenuItem onClick={handleAccountSettings} className="perfil-menu-item">
                    <Settings className="menu-icon" />
                    Configuración
                </DropdownMenuItem>

                <DropdownMenuItem onClick={handleBilling} className="perfil-menu-item">
                    <CreditCard className="menu-icon" />
                    Facturación
                </DropdownMenuItem>

                <DropdownMenuItem onClick={handleSupport} className="perfil-menu-item">
                    <HelpCircle className="menu-icon" />
                    Ayuda
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                <DropdownMenuItem onClick={handleSignOut} className="perfil-menu-item sign-out">
                    <LogOut className="menu-icon" />
                    Cerrar sesión
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default Perfil
