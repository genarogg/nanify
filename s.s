const fs = require('fs');
const path = require('path');
const readline = require('readline');

// Ruta de destino fija
const destinationDir = path.join(__dirname, 'src', 'sass', 'nanify');

// Rutas preestablecidas
const predefinedPaths = {
    btnLoki: './src/sass_backup/btnLoki.module.scss',
    // Agrega más rutas aquí según sea necesario
};

// Función para copiar un archivo de un punto A a un punto B
function copyFile(from, to) {
    fs.copyFileSync(from, to);
    console.log(`Archivo copiado de ${from} a ${to}`);
}

// Configura readline para leer la entrada del usuario
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Muestra las opciones al usuario
console.log('Opciones disponibles:');
Object.keys(predefinedPaths).forEach(key => {
    console.log(`- ${key}`);
});

// Pregunta al usuario por la opción
rl.question('Introduce la opción del archivo a copiar: ', (option) => {
    const from = predefinedPaths[option];
    if (!from) {
        console.error('Opción no válida');
        rl.close();
        return;
    }

    const fileName = path.basename(from);
    const to = path.join(destinationDir, fileName);

    // Verifica si el directorio de destino existe, si no, créalo
    if (!fs.existsSync(destinationDir)) {
        fs.mkdirSync(destinationDir, { recursive: true });
    }

    try {
        copyFile(from, to);
    } catch (error) {
        console.error('Error al copiar el archivo', error);
    }
    rl.close();
});

quiero que tenga dos opciones donde puede estar el archivo ./src/./src/sass_backup y 