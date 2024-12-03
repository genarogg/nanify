const fs = require('fs');
const path = require('path');

// Función para copiar recursivamente una carpeta
function copyFolderSync(from, to) {
    fs.mkdirSync(to, { recursive: true });
    fs.readdirSync(from).forEach(element => {
        const fromPath = path.join(from, element);
        const toPath = path.join(to, element);
        if (fs.lstatSync(fromPath).isFile()) {
            if (!fs.existsSync(toPath)) {
                fs.copyFileSync(fromPath, toPath);
            }
        } else {
            copyFolderSync(fromPath, toPath);
        }
    });
}

// Define la carpeta de origen y la carpeta de destino
const sourceDir = path.join(__dirname, 'src', 'styles', 'init');
const targetDir = path.join(__dirname, '..', '..', 'src', 'sass');

// Verifica si la carpeta de destino ya existe
if (!fs.existsSync(targetDir)) {
    // Copia la carpeta de origen a la carpeta de destino
    try {
        copyFolderSync(sourceDir, targetDir);
        console.log('Carpeta copiada');
    } catch (error) {
        console.error('Error al copiar la carpeta', error);
    }
} else {
    console.log('La carpeta de destino ya existe. No se copian los archivos.');
}