const fs = require('fs');
const path = require('path');
const readline = require('readline');

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

// Rutas preestablecidas
const predefinedPaths = {
    alanaLayout: path.join(__dirname, "..", 'src', 'components', 'layout', "ecommerce", "alana"),
};

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
rl.question('Introduce la opción del directorio a copiar: ', (option) => {
    const source = predefinedPaths[option];
    if (!source) {
        console.error('Opción no válida');
        rl.close();
        return;
    }

    // Pregunta al usuario por el nombre del directorio de destino
    rl.question('Introduce el nombre del directorio de destino (deja en blanco para usar la opción): ', (destDir) => {
        const targetDir = destDir || option;
        const target = path.join(__dirname, "..", '..', '..', 'src', "components", targetDir);
        const dirName = targetDir.toUpperCase();

        // Verifica si la carpeta de destino ya existe
        if (!fs.existsSync(target)) {
            try {
                copyFolderSync(source, target);
                console.log(`Carpeta copiada ${dirName}`);
            } catch (error) {
                console.error(`Error al copiar la carpeta ${dirName}`, error);
            }
        } else {
            console.log(`La carpeta de destino ${dirName} ya existe. No se copian los archivos.`);
        }
        rl.close();
    });
});