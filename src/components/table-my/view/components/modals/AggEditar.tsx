'use client'
import React, { useState, useEffect } from 'react'
import { SquarePen, UserPlus, Shield, FileText, Upload } from 'lucide-react'
import { useGlobalZustand, type DataItem } from '../../../context/Global'
import Modal from '../../../../ux/modal'
import Input from '../../../../ux/input'
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectLabel,
    SelectSeparator,
    SelectItem
} from '../../../../ux/select'

interface AggEditarProps {
    item?: DataItem;
}

const AggEditar: React.FC<AggEditarProps> = ({ item }) => {
    const { updateItem, setData, data, roles, badges } = useGlobalZustand();
    const isEditMode = !!item;

    const [formData, setFormData] = useState({
        nombre: '',
        correo: '',
        telefono: '',
        cedula: '',
        rol: undefined as "DEV" | "ESTANDAR" | "SUPER" | undefined,
        estado: 'ACTIVO' as "ACTIVO" | "INACTIVO",
        limite: 0,
        doc: ''
    });

    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [fileName, setFileName] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const resetForm = () => {
        setFormData({
            nombre: '',
            correo: '',
            telefono: '',
            cedula: '',
            rol: undefined,
            estado: 'ACTIVO',
            limite: 0,
            doc: ''
        });
        setSelectedFile(null);
        setFileName('');
    };

    useEffect(() => {
        if (isEditMode && item) {
            setFormData({
                nombre: item.nombre || '',
                correo: item.correo || '',
                telefono: item.telefono || '',
                cedula: item.cedula || '',
                rol: item.rol || '',
                estado: item.estado || 'ACTIVO',
                limite: item.limite || 0,
                doc: item.doc || ''
            });
            setFileName(item.doc ? `Archivo actual: ${item.doc}` : '');
        } else {
            resetForm();
        }
    }, [item, isEditMode]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        if (name === 'limite') {
            const numValue = parseInt(value);
            if (isNaN(numValue) || numValue < 0) return;
            setFormData(prev => ({ ...prev, [name]: numValue }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleSelectChange = (value: string | string[]) => {
        const roleValue = Array.isArray(value) ? value[0] : value;
        setFormData(prev => ({ ...prev, rol: roleValue as "DEV" | "ESTANDAR" | "SUPER" }));
    };

    const handleEstadoChange = (value: string | string[]) => {
        const stateValue = Array.isArray(value) ? value[0] : value;
        setFormData(prev => ({ ...prev, estado: stateValue as "ACTIVO" | "INACTIVO" }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setSelectedFile(file);
            setFileName(file.name);
            setFormData(prev => ({ ...prev, doc: file.name }));
        }
    };

    const generateId = () => Date.now();

    const uploadFile = async (file: File): Promise<string> => {
        await new Promise(resolve => setTimeout(resolve, 1500));
        return file.name;
    };

    const handleSave = async () => {
        setIsLoading(true);
        try {
            let docUrl = formData.doc;
            if (selectedFile) {
                docUrl = await uploadFile(selectedFile);
            }
            await new Promise(resolve => setTimeout(resolve, 1000));
            const itemData = { ...formData, doc: docUrl };
            if (isEditMode) {
                if (!item?.id) throw new Error('No se puede actualizar: ID del item no encontrado');
                const updateData = { ...itemData, rol: itemData.rol as "DEV" | "ESTANDAR" | "SUPER" };
                updateItem(item.id, updateData);
            } else {
                const newItem: DataItem = {
                    id: generateId(),
                    ...itemData,
                    rol: itemData.rol as "DEV" | "ESTANDAR" | "SUPER",
                    estado: itemData.estado as "ACTIVO" | "INACTIVO"
                };
                const currentItems = data.items;
                setData({ items: [...currentItems, newItem] });
            }
        } catch (error) {
            console.error(`Error al ${isEditMode ? 'actualizar' : 'agregar'} item:`, error);
        } finally {
            setIsLoading(false);
        }
    };

    const modalProps = {
        title: isEditMode ? "" : "Agregar Usuario",
        icon: isEditMode ? <SquarePen size={16} /> : <UserPlus size={16} />,
        buttonClassName: `table-modal-btn save-user-btn ${isEditMode ? 'action-btn' : ''}`,
        buttonText: isLoading ? (isEditMode ? "Actualizando..." : "Guardando...") : (isEditMode ? "Guardar Cambios" : "Guardar Usuario"),
        onclick: handleSave,
        loading: isLoading
    };

    return (
        <Modal {...modalProps}>
            <div className="user-form">
                <div style={{ marginBottom: "42px", marginTop: "32px" }}>
                    <Input
                        name="nombre"
                        type="text"
                        placeholder="Ingrese el nombre completo"
                        required
                        onChange={handleChange}
                        value={formData.nombre}
                        disabled={isLoading}
                    />
                </div>
                <div style={{ marginBottom: "42px" }}>
                    <Input
                        name="correo"
                        type="email"
                        placeholder="ejemplo@correo.com"
                        required
                        onChange={handleChange}
                        value={formData.correo}
                        disabled={isLoading}
                    />
                </div>
                <div style={{ marginBottom: "42px" }}>
                    <Input
                        name="telefono"
                        type="tel"
                        placeholder="04XX-XXXXXXX"
                        onChange={handleChange}
                        value={formData.telefono}
                        disabled={isLoading}
                    />
                </div>
                <div style={{ marginBottom: "42px" }}>
                    <Input
                        name="cedula"
                        type="text"
                        placeholder="12345678"
                        required
                        onChange={handleChange}
                        value={formData.cedula}
                        disabled={isLoading}
                    />
                </div>
                <div style={{ marginBottom: "15px" }}>
                    <Input
                        name="limite"
                        type="number"
                        placeholder="Límite (ej: 100)"
                        required
                        onChange={handleChange}
                        value={formData.limite.toString()}
                        disabled={isLoading}
                        min={1}
                    />
                </div>
                <div style={{ marginBottom: "42px" }}>
                    <label style={{ display: "flex", alignItems: "center", marginBottom: "8px", fontSize: "14px", fontWeight: "500", color: "#374151" }}>
                        <Shield size={16} style={{ marginRight: "8px" }} />
                        Rol del usuario
                    </label>
                    <Select
                        value={formData.rol || ''}
                        onValueChange={handleSelectChange}
                    >
                        <SelectTrigger>
                            <SelectValue placeholder="Seleccionar rol" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectLabel>Roles disponibles</SelectLabel>
                            <SelectSeparator />
                            {Object.entries(roles).map(([key, value]) => (
                                <SelectItem key={key} value={value as string}>
                                    {badges.roles[key as keyof typeof badges.roles]?.name || value as string}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <div style={{ marginBottom: "15px" }}>
                    <label style={{ display: "flex", alignItems: "center", marginBottom: "8px", fontSize: "14px", fontWeight: "500", color: "#374151" }}>
                        Estado del usuario
                    </label>
                    <Select
                        value={formData.estado}
                        onValueChange={handleEstadoChange}
                    >
                        <SelectTrigger>
                            <SelectValue placeholder="Seleccionar estado" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectLabel>Estados disponibles</SelectLabel>
                            <SelectSeparator />
                            <SelectItem value="ACTIVO">
                                <span style={{ color: badges.estados.ACTIVO.color }}>
                                    {badges.estados.ACTIVO.name}
                                </span>
                            </SelectItem>
                            <SelectItem value="INACTIVO">
                                <span style={{ color: badges.estados.INACTIVO.color }}>
                                    {badges.estados.INACTIVO.name}
                                </span>
                            </SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div style={{ marginBottom: "15px" }}>
                    <label style={{ display: "flex", alignItems: "center", marginBottom: "8px", fontSize: "14px", fontWeight: "500", color: "#374151" }}>
                        <FileText size={16} style={{ marginRight: "8px" }} />
                        Documento PDF {!isEditMode && <span style={{ color: "#ef4444" }}>*</span>}
                    </label>
                    <div style={{
                        position: "relative",
                        border: "2px dashed #d1d5db",
                        borderRadius: "8px",
                        padding: "16px",
                        textAlign: "center",
                        backgroundColor: "#f9fafb",
                        transition: "all 0.2s ease",
                        cursor: isLoading ? "not-allowed" : "pointer",
                        overflow: "hidden"
                    }}>
                        <input
                            type="file"
                            accept=".pdf"
                            onChange={handleFileChange}
                            disabled={isLoading}
                            style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                opacity: 0,
                                cursor: isLoading ? "not-allowed" : "pointer",
                                zIndex: 1
                            }}
                        />
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", position: "relative", zIndex: 0 }}>
                            <Upload size={24} style={{ color: "#6b7280" }} />
                            {fileName ? (
                                <div style={{ fontSize: "14px", color: "#374151", fontWeight: "500" }}>
                                    {fileName}
                                </div>
                            ) : (
                                <>
                                    <div style={{ fontSize: "14px", color: "#6b7280" }}>
                                        Haz clic para seleccionar un archivo PDF
                                    </div>
                                    <div style={{ fontSize: "12px", color: "#9ca3af" }}>
                                        Máximo 10MB
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default AggEditar;