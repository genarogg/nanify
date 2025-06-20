"use client"

import { useState, useEffect } from "react"
import { MessageCircle, X, Smartphone, Monitor } from "lucide-react"
import "./css/whatsapp-modal.css"

interface WhatsAppModalProps {
  isOpen: boolean
  onClose: () => void
  phoneNumber: string
  userName: string
}

export default function WhatsAppModal({ isOpen, onClose, phoneNumber, userName }: WhatsAppModalProps) {
  const [isMobile, setIsMobile] = useState(false)
  const [qrCodeUrl, setQrCodeUrl] = useState("")

  // Detect if user is on mobile device
  useEffect(() => {
    const checkMobile = () => {
      const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera
      const mobileRegex = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i
      return mobileRegex.test(userAgent.toLowerCase())
    }

    setIsMobile(checkMobile())
  }, [])

  // Generate WhatsApp URL
  const getWhatsAppUrl = () => {
    const cleanNumber = phoneNumber.replace(/\D/g, "") // Remove non-digits
    const message = `Hola ${userName}, te contacto desde el sistema de gestión.`
    const encodedMessage = encodeURIComponent(message)

    if (isMobile) {
      return `whatsapp://send?phone=58${cleanNumber}&text=${encodedMessage}`
    } else {
      return `https://web.whatsapp.com/send?phone=58${cleanNumber}&text=${encodedMessage}`
    }
  }

  // Generate QR code URL using a QR service
  useEffect(() => {
    if (!isMobile && isOpen) {
      const whatsappUrl = getWhatsAppUrl()
      // Using QR Server API to generate QR code
      const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(whatsappUrl)}&format=png&margin=10`
      setQrCodeUrl(qrUrl)
    }
  }, [isOpen, isMobile, phoneNumber, userName])

  // Handle WhatsApp action
  const handleWhatsAppAction = () => {
    const url = getWhatsAppUrl()

    if (isMobile) {
      // On mobile, try to open WhatsApp app directly
      window.location.href = url
      onClose()
    } else {
      // On desktop, open in new tab
      window.open(url, "_blank")
      onClose()
    }
  }

  // Format phone number for display
  const formatPhoneNumber = (phone: string) => {
    const cleaned = phone.replace(/\D/g, "")
    if (cleaned.length === 10) {
      return `+58 ${cleaned.slice(0, 4)}-${cleaned.slice(4, 7)}-${cleaned.slice(7)}`
    }
    return `+58 ${phone}`
  }

  if (!isOpen) return null

  return (
    <div className="whatsapp-modal-overlay" onClick={onClose}>
      <div className="whatsapp-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="whatsapp-modal-header">
          <div className="whatsapp-modal-title">
            <MessageCircle size={24} color="#25D366" />
            <h3>Contactar por WhatsApp</h3>
          </div>
          <button className="whatsapp-modal-close" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div className="whatsapp-modal-body">
          <div className="contact-info">
            <h4>{userName}</h4>
            <p className="phone-display">{formatPhoneNumber(phoneNumber)}</p>
          </div>

          <div className="device-indicator">
            {isMobile ? (
              <div className="device-info mobile">
                <Smartphone size={20} />
                <span>Dispositivo móvil detectado</span>
              </div>
            ) : (
              <div className="device-info desktop">
                <Monitor size={20} />
                <span>Dispositivo de escritorio detectado</span>
              </div>
            )}
          </div>

          {isMobile ? (
            <div className="mobile-action">
              <p className="action-description">Se abrirá WhatsApp directamente en tu dispositivo</p>
              <button className="whatsapp-action-btn mobile-btn" onClick={handleWhatsAppAction}>
                <MessageCircle size={20} />
                Abrir WhatsApp
              </button>
            </div>
          ) : (
            <div className="desktop-action">
              <p className="action-description">Escanea el código QR con tu teléfono para abrir WhatsApp</p>

              <div className="qr-container">
                <div className="qr-code-wrapper">
                  {qrCodeUrl && (
                    <>
                      <img src={qrCodeUrl || "/placeholder.svg"} alt="QR Code para WhatsApp" className="qr-code" />
                      <div className="whatsapp-logo-overlay">
                        <MessageCircle size={24} color="#25D366" />
                      </div>
                    </>
                  )}
                </div>
              </div>

              <div className="desktop-alternative">
                <p>O también puedes:</p>
                <button className="whatsapp-action-btn desktop-btn" onClick={handleWhatsAppAction}>
                  <MessageCircle size={16} />
                  Abrir WhatsApp Web
                </button>
              </div>
            </div>
          )}

          <div className="whatsapp-info">
            <p className="info-text">Se enviará un mensaje predeterminado que puedes modificar antes de enviar.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
