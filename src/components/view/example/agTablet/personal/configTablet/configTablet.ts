import { ColDef, ColGroupDef } from "ag-grid-community";
import Empleado from "./EmpleadoTypes";
import ActionCell from "./ActionCell";

const empleadoColumnDefs: (ColDef<Empleado> | ColGroupDef<Empleado>)[] = [
  {
    headerName: "Index",
    field: "id",
    width: 100,
    valueGetter: (params) => {
        if (params.node && params.node.rowIndex !== null && params.node.rowIndex !== undefined) {
          return params.node.rowIndex + 1; 
        }
        return null;
      },
  },
  {
    headerName: "Tipo de empleado",
    field: "tipo_empleado",
    filter: true,
  
  },
  {
    headerName: "DATOS DEL PERSONAL",
    children: [
      { headerName: "Nombres", field: "nombres", filter: true },
      { headerName: "Apellidos", field: "apellidos", filter: true },
      { headerName: "C.I", field: "ci", filter: true },
      {
        headerName: "Fecha de Nacimiento",
        field: "fecha_nacimiento",
        filter: true,
      },
      { headerName: "Teléfono", field: "telefono", filter: true },
      {
        headerName: "Dirección de Habitación",
        field: "direccion_de_habitacion",
        filter: true,
      },
      {
        headerName: "Correo Electrónico",
        field: "correo_electronico",
        filter: true,
      },
      {
        headerName: "Fecha de Ingreso MPPE",
        field: "fecha_ingreso_mppe",
        filter: true,
      },
      { headerName: "Años de Servicio", field: "anos_servicio", filter: true },
      {
        headerName: "Título Obtenido",
        field: "titulo_obtenido",
        filter: true,
      },
      {
        headerName: "Código / Cargo (Según Recibo de Pago)",
        field: "codigo_cargo",
        filter: true,
      },
      {
        headerName: "Dependencia Nominal / Código (Según Recibo de Pago)",
        field: "dependencia_nominal",
        filter: true,
      },
      {
        headerName: "Estatus",
        field: "estatus",
        filter: true,
      },
      {
        headerName:
          "Reposo o Permiso Médico - Abandonos Entre Otros (Desde - Hasta)",
        field: "reposo_permiso",
        filter: true,
      },
      {
        headerName: "Título Pregrado",
        field: "titulo_pregrado",
        filter: true,
      },
      {
        headerName: "Área Docente Especialista",
        field: "area_docente_especialista",
        filter: true,
      },
      {
        headerName: "Grado Sección",
        field: "grado_seccion",
        filter: true,
      },
      {
        headerName: "Función Trabajo",
        field: "funcion_trabajo",
        filter: true,
      },
      {
        headerName: "Acarigua",
        field: "acarigua",
        filter: true,
      },
    ],
  },
  {
    headerName: "Inscripción en el PSUV",
    children: [
      {
        headerName: "Inscrito en el PSUV",
        field: "inscrito_psuv",
        filter: true,
      },
    ],
  },
  {
    headerName: "Movimiento Social",
    children: [
      {
        headerName: "Pertenece a Algún Movimiento Social",
        field: "pertenece_movimiento_social",
        filter: true,
      },
    ],
  },
  {
    headerName: "Carnet Patria",
    children: [
      { headerName: "N. Código", field: "carnet_patria_codigo", filter: true },
      { headerName: "N. Serial", field: "carnet_patria_serial", filter: true },
    ],
  },
  {
    headerName: "Tipo de Voto",
    children: [
      {
        headerName: "Nombre del Centro de Votación",
        field: "centro_votacion",
        filter: true,
      },
      { headerName: "Tipo de Voto", field: "tipo_voto", filter: true },
    ],
  },
  {
    headerName: "Observaciones",
    children: [
      { headerName: "Observaciones", field: "observaciones", filter: true },
    ],
  },
  {
    headerName: "Acciones",
    cellRenderer: (params: any) => {
      return ActionCell(params);
    },
  },
];

export default empleadoColumnDefs;
