'use client'
import React, { useState, useEffect, useCallback, useMemo, memo } from 'react'
import { SquarePen, UserPlus, Shield, FileText, User, Mail, Phone, CreditCard, Hash } from 'lucide-react'
import { useGlobal, useGlobalStatic, type DataItem, type UserRole, type UserStatus } from '../../../context/Global'
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

const AggEditar: React.FC<AggEditarProps> = memo(({ item }) => {
    // 🔥 OPTIMIZACIÓN CRÍTICA: Suscripción selectiva a Zustand
    const updateItem = useGlobal(state => state.updateItem)
    const setData = useGlobal(state => state.setData)
    const dataItems = useGlobal(state => state.data.items)
    
    // 🔥 OPTIMIZACIÓN: Suscripción selectiva al estado estático
    const roles = useGlobalStatic(state => state.roles)
    const badges = useGlobalStatic(state => state.badges)
    
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

    // 🔥 OPTIMIZACIÓN: Memoizar resetForm
    const resetForm = useCallback(() => {
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
    }, []);

    // 🔥 OPTIMIZACIÓN CRÍTICA: useEffect con dependencias específicas
    useEffect(() => {
        if (isEditMode && item) {
            // Solo actualizar si los datos realmente cambiaron
            const newFormData = {
                nombre: item.nombre || '',
                correo: item.correo || '',
                telefono: item.telefono || '',
                cedula: item.cedula || '',
                rol: item.rol,
                estado: item.estado || 'ACTIVO',
                limite: item.limite || 0,
                doc: item.doc || ''
            };
            
            setFormData(newFormData);
            setSelectedFile(null);
        } else if (!isEditMode) {
            resetForm();
        }
    }, [item?.id, item?.nombre, item?.correo, item?.telefono, item?.cedula, item?.rol, item?.estado, item?.limite, item?.doc, isEditMode, resetForm]);

    // 🔥 OPTIMIZACIÓN: Memoizar handlers
    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        if (name === 'limite') {
            const numValue = parseInt(value);
            if (isNaN(numValue) || numValue < 0) return;
            setFormData(prev => ({ ...prev, [name]: numValue }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    }, []);

    const handleSelectChange = useCallback((value: string | string[]) => {
        const roleValue = Array.isArray(value) ? value[0] : value;

        // Type guard para validar que el rol es válido
        const isValidRole = (val: string): val is UserRole => {
            return Object.values(roles).includes(val as UserRole);
        };

        if (isValidRole(roleValue)) {
            setFormData(prev => ({ ...prev, rol: roleValue }));
        }
    }, [roles]);

    const handleEstadoChange = useCallback((value: string | string[]) => {
        const stateValue = Array.isArray(value) ? value[0] : value;

        // Type guard para validar que el estado es válido
        const isValidStatus = (val: string): val is UserStatus => {
            return val === 'ACTIVO' || val === 'INACTIVO';
        };

        if (isValidStatus(stateValue)) {
            setFormData(prev => ({ ...prev, estado: stateValue }));
        }
    }, []);

    // 🔥 OPTIMIZACIÓN: Memoizar handleFileChange
    const handleFileChange = useCallback((file: File | null) => {
        setSelectedFile(file);
        if (file) {
            setFormData(prev => ({ ...prev, doc: file.name }));
        } else {
            setFormData(prev => ({ ...prev, doc: '' }));
        }
    }, []);

    // 🔥 OPTIMIZACIÓN: Memoizar funciones auxiliares
    const generateId = useCallback(() => Date.now(), []);

    const uploadFile = useCallback(async (file: File): Promise<string> => {
        await new Promise(resolve => setTimeout(resolve, 1500));
        return file.name;
    }, []);

    const handleSave = useCallback(async () => {
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
                setData({ items: [...dataItems, newItem] });
            }
        } catch (error) {
            console.error(`Error al ${isEditMode ? 'actualizar' : 'agregar'} item:`, error);
        } finally {
            setIsLoading(false);
        }
    }, [formData, selectedFile, uploadFile, isEditMode, item?.id, updateItem, generateId, setData, dataItems]);

    // 🔥 OPTIMIZACIÓN: Memoizar props del modal
    const modalProps = useMemo(() => ({
        title: isEditMode ? "" : "Agregar Usuario",
        icon: isEditMode ? <SquarePen size={16} /> : <UserPlus size={16} />,
        buttonClassName: `table-modal-btn save-user-btn ${isEditMode ? 'action-btn' : ''}`,
        buttonText: isLoading ? (isEditMode ? "Actualizando..." : "Guardando...") : (isEditMode ? "Guardar Cambios" : "Guardar Usuario"),
        onclick: handleSave,
        loading: isLoading,
        cancel: isEditMode
    }), [isEditMode, isLoading, handleSave]);

    // 🔥 OPTIMIZACIÓN: Memoizar opciones de roles
    const roleOptions = useMemo(() => 
        (Object.entries(roles) as [keyof typeof roles, UserRole][]).map(([key, value]) => (
            <SelectItem key={key} value={value}>
                {badges.roles[key]?.name || value}
            </SelectItem>
        )), [roles, badges.roles]
    );

    // 🔥 OPTIMIZACIÓN: Memoizar placeholder del archivo
    const filePlaceholder = useMemo(() => {
        if (isEditMode && formData.doc && !selectedFile) {
            return `Archivo actual: ${formData.doc}`;
        }
        return "Haz clic para seleccionar un archivo PDF";
    }, [isEditMode, formData.doc, selectedFile]);

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
                            {roleOptions}
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
                        placeholder={filePlaceholder}
                        required={!isEditMode}
                        disabled={isLoading}
                        maxSize="Máximo 10MB"
                        icon={<FileText size={16} style={{ marginLeft: "10px" }} />}
                    />
                </div>
            </div>
        </Modal>
    );
});

// Establecer displayName para debugging
AggEditar.displayName = 'AggEditar';

export default AggEditar;