interface EmpleadoTypes {
  id: number;
  tipo_empleado: string;
  nombres: string;
  apellidos: string;
  ci: number;
  fecha_nacimiento: string;
  telefono: string;
  correo_electronico: string;
  fecha_ingreso_mppe: string;
  direccion_de_habitacion: string;
  codigo_cargo: string;
  dependencia_nominal: string;
  estatus: boolean;
  reposo_permiso: string;
  anos_servicio: number;
  observaciones: string;
  titulo_pregrado: string;
  area_docente_especialista: string;
  grado_seccion: string;
  funcion_trabajo: string;
  acarigua: string;
  titulo_obtenido: string;
  inscrito_psuv: boolean;
  pertenece_movimiento_social: string;
  carnet_patria_codigo: string;
  carnet_patria_serial: string;
  centro_votacion: string;
  tipo_voto: string;
}

export default EmpleadoTypes;
