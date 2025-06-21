import fs from 'fs';
import { faker } from '@faker-js/faker';

const roles = [
  { name: 'ACTIVO', color: '#4CAF50' },
  { name: 'INACTIVO', color: '#F44336' },
  { name: 'PENDIENTE', color: '#FFC107' }
];

const estatus = [
  { name: 'ACTIVO', color: '#2196F3' },
  { name: 'INACTIVO', color: '#9E9E9E' }
];

function generateUser(id) {
  return {
    id: id,
    name: faker.person.firstName(),
    lastName: faker.person.lastName(),
    phones: faker.phone.number(),
    correo: faker.internet.email(),
    cedula: faker.string.alphanumeric(8).toUpperCase() + faker.string.alpha(1).toUpperCase(),
    rol: faker.helpers.arrayElement(roles).name,
    estatus: faker.helpers.arrayElement(estatus).name,
  };
}

const data = {
  usuarios: Array.from({ length: 100 }, (_, i) => generateUser(i + 1)),
  rol: roles,
  estatus: estatus
};

fs.writeFileSync('./server/table-fake-data.json', JSON.stringify(data, null, 2));
console.log('db.json generado exitosamente con 100 usuarios, roles y estatus!');