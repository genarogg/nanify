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

// Arreglo de directorios a copiar
const directories = [
    {
        source: path.join(__dirname, "..", 'src', 'sass'),
        target: path.join(__dirname, "..", '..', '..', 'src', 'sass'), 
        name: 'STYLES'
    },
    { 
        source: path.join(__dirname, "..", 'src', 'app', 'api'), 
        target: path.join(__dirname, "..", '..', '..', 'src', 'app', 'api'), 
        name: 'API' },
    { 
        source: path.join(__dirname, "..", 'src', 'functions'), 
        target: path.join(__dirname, "..", '..', '..', 'src', 'functions'), 
        name: 'FUNCIONES' }
];

// Itera sobre el arreglo y copia las carpetas
directories.forEach(dir => {
    if (!fs.existsSync(dir.target)) {
        try {
            copyFolderSync(dir.source, dir.target);
            console.log(`Carpeta copiada ${dir.name}`);
        } catch (error) {
            console.error(`Error al copiar la carpeta ${dir.name}`, error);
        }
    } else {
        console.log(`La carpeta de destino ${dir.name} ya existe. No se copian los archivos.`);
    }
});