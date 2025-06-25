'use client'
import React, { useState, useEffect } from 'react'
import { SquarePen, UserPlus, Shield, FileText, User, Mail, Phone, CreditCard, Hash } from 'lucide-react'
import { useGlobal, type DataItem, type UserRole, type UserStatus } from '../../../context/Global'
import Modal from '../../../../ux/modal'
import Input from '../../../../ux/input'
import InputFile from '../../../../ux/input-file'
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

// Interface para el formulario
interface FormData {
    nombre: string;
    correo: string;
    telefono: string;
    cedula: string;
    rol: UserRole | undefined;
    estado: UserStatus;
    limite: number;
    doc: string;
}

const AggEditar: React.FC<AggEditarProps> = ({ item }) => {
    const { updateItem, setData, data, roles, badges } = useGlobal();
    const isEditMode = !!item;

    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const [formData, setFormData] = useState<FormData>({
        nombre: '',
        correo: '',
        telefono: '',
        cedula: '',
        rol: undefined,
        estado: 'ACTIVO',
        limite: 0,
        doc: ''
    });

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
    };

    useEffect(() => {
        if (isEditMode && item) {
            setFormData({
                nombre: item.nombre || '',
                correo: item.correo || '',
                telefono: item.telefono || '',
                cedula: item.cedula || '',
                rol: item.rol,
                estado: item.estado || 'ACTIVO',
                limite: item.limite || 0,
                doc: item.doc || ''
            });
            // En modo edición, no establecemos el archivo ya que solo tenemos el nombre
            setSelectedFile(null);
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
        
        // Type guard para validar que el rol es válido
        const isValidRole = (val: string): val is UserRole => {
            return Object.values(roles).includes(val as UserRole);
        };
        
        if (isValidRole(roleValue)) {
            setFormData(prev => ({ ...prev, rol: roleValue }));
        }
    };

    const handleEstadoChange = (value: string | string[]) => {
        const stateValue = Array.isArray(value) ? value[0] : value;
        
        // Type guard para validar que el estado es válido
        const isValidStatus = (val: string): val is UserStatus => {
            return val === 'ACTIVO' || val === 'INACTIVO';
        };
        
        if (isValidStatus(stateValue)) {
            setFormData(prev => ({ ...prev, estado: stateValue }));
        }
    };

    // Nueva función para manejar el cambio de archivo que coincide con la interfaz de InputFile
    const handleFileChange = (file: File | null) => {
        setSelectedFile(file);
        if (file) {
            setFormData(prev => ({ ...prev, doc: file.name }));
        } else {
            setFormData(prev => ({ ...prev, doc: '' }));
        }
    };

    const generateId = () => Date.now();

    const uploadFile = async (file: File): Promise<string> => {
        await new Promise(resolve => setTimeout(resolve, 1500));
        return file.name;
    };

    const handleSave = async () => {
        // Validación: el rol es requerido
        if (!formData.rol) {
            console.error('El rol es requerido');
            return;
        }

        setIsLoading(true);
        try {
            let docUrl = formData.doc;
            if (selectedFile) {
                docUrl = await uploadFile(selectedFile);
            }
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            const itemData = { ...formData, doc: docUrl, rol: formData.rol };
            
            if (isEditMode) {
                if (!item?.id) throw new Error('No se puede actualizar: ID del item no encontrado');
                updateItem(item.id, itemData);
            } else {
                const newItem: DataItem = {
                    id: generateId(),
                    ...itemData,
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
        <Modal {...modalProps} cancel={isEditMode}>
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
                        icon={<User size={16} />}
                        hasContentState={true}
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
                        icon={<Mail size={16} />}
                        hasContentState={true}
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
                        icon={<Phone size={16} />}
                        hasContentState={true}
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
                        icon={<CreditCard size={16} />}
                        hasContentState={true}
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
                        icon={<Hash size={16} />}
                        hasContentState={true}
                    />
                </div>
                <div style={{ marginBottom: "15px" }}>
                    <label style={{ display: "flex", alignItems: "center", marginBottom: "8px", fontSize: "14px", fontWeight: "500", color: "#374151" }}>
                        <Shield size={16} style={{ marginRight: "8px", marginLeft: "10px" }} />
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
                            {(Object.entries(roles) as [keyof typeof roles, UserRole][]).map(([key, value]) => (
                                <SelectItem key={key} value={value}>
                                    {badges.roles[key]?.name || value}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <div style={{ marginBottom: "15px" }}>
                    <label style={{ display: "flex", alignItems: "center", marginBottom: "8px", fontSize: "14px", fontWeight: "500", color: "#374151" }}>
                        <Shield size={16} style={{ marginRight: "8px", marginLeft: "10px" }} />
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
                <div style={{ marginBottom: "7px" }}>
                    <InputFile
                        name="doc"
                        label="Documento PDF"
                        value={selectedFile}
                        onChange={handleFileChange}
                        accept=".pdf"
                        placeholder={
                            isEditMode && formData.doc && !selectedFile
                                ? `Archivo actual: ${formData.doc}`
                                : "Haz clic para seleccionar un archivo PDF"
                        }
                        required={!isEditMode}
                        disabled={isLoading}
                        maxSize="Máximo 10MB"
                        icon={<FileText size={16} style={{ marginLeft: "10px" }} />}
                    />
                </div>
            </div>
        </Modal>
    );
};

export default AggEditar;