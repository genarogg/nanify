import fs from 'fs';
import { faker } from '@faker-js/faker';

const roles = [
  { name: 'ACTIVO', color: '#4CAF50' },
  { name: 'INACTIVO', color: '#F44336' },
  { name: 'PENDIENTE', color: '#FFC107' }
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
    status: faker.helpers.arrayElement(status).name,
  };
}

const data = {
  usuarios: {
    config: {
      pagination: {
        defaultLimit: 10,
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