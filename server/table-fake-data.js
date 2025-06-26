import fs from 'fs';
import { faker } from '@faker-js/faker';

const roles = [
  { name: 'SUPER', color: '#4CAF50' },
  { name: 'DEV', color: '#F44336' },
  { name: 'ESTANDAR', color: '#FFC107' }
];

const status = [
  { name: 'ACTIVO', color: '#2196F3' },
  { name: 'INACTIVO', color: '#9E9E9E' }
];

function generateUser(id) {
  return {
    id: id,
    nombre: faker.person.firstName() + " " + faker.person.lastName(),
    correo: faker.internet.email(),
    telefono: faker.phone.number(),
    cedula: faker.string.alphanumeric(8).toUpperCase() + faker.string.alpha(1).toUpperCase(),
    rol: faker.helpers.arrayElement(roles).name,
    estado: faker.helpers.arrayElement(status).name,
    limite: faker.number.int({ min: 1, max: 100 }),
    doc: faker.helpers.arrayElement(['Cédula', 'Pasaporte', 'Licencia de conducir']),
  };
}

const data = {
  usuarios: {
    config: {
      pagination: {
        defaultLimit: 45,
        maxLimit: 45
      }
    },
    data: Array.from({ length: 45 }, (_, i) => generateUser(i + 1))
  },
  rol: roles,
  status: status
};

fs.writeFileSync('./server/db.json', JSON.stringify(data, null, 2));
console.log('db.json generado exitosamente con 100 usuarios, roles, estatus y config!');