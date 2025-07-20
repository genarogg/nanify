import fs from 'fs';
import path from 'path';

// Verificar si estamos en producción
const isProduction = process.env.NODE_ENV === 'production';

if (isProduction) {
    console.log('🚫 Script cancelado: No se puede ejecutar en producción por seguridad.');
    process.exit(0);
}

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
        source: path.join(path.dirname(import.meta.url.replace('file://', '')), "..", 'src', 'sass'),
        target: path.join(path.dirname(import.meta.url.replace('file://', '')), "..", '..', '..', 'src', 'sass'),
        name: 'STYLES'
    },
    {
        source: path.join(path.dirname(import.meta.url.replace('file://', '')), "..", 'src', 'app', 'api'),
        target: path.join(path.dirname(import.meta.url.replace('file://', '')), "..", '..', '..', 'src', 'app', 'api'),
        name: 'API'
    },
    {
        source: path.join(path.dirname(import.meta.url.replace('file://', '')), "..", 'src', 'functions'),
        target: path.join(path.dirname(import.meta.url.replace('file://', '')), "..", '..', '..', 'src', 'functions'),
        name: 'FUNCIONES'
    }
];

// Itera sobre el arreglo y copia las carpetas
directories.forEach(dir => {
    if (!fs.existsSync(dir.target)) {
        try {
            copyFolderSync(dir.source, dir.target);
            console.log(`✅ Carpeta copiada ${dir.name}`);
        } catch (error) {
            console.error(`❌ Error al copiar la carpeta ${dir.name}`, error);
        }
    } else {
        console.log(`⚠️ La carpeta de destino ${dir.name} ya existe. No se copian los archivos.`);
    }
});

// Función para agregar un script a package.json
function addScriptToPackageJson(scriptName, scriptCommand) {
    const packageJsonPath = path.join(path.dirname(import.meta.url.replace('file://', '')), '..', 'package.json');
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

    packageJson.scripts = packageJson.scripts || {};
    packageJson.scripts[scriptName] = scriptCommand;

    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2), 'utf8');
    console.log(`✅ Script "${scriptName}" agregado a package.json`);
}

// Agrega el script moveComponents a package.json
addScriptToPackageJson("@nano", 'node ./node_modules/nanify/fn/moveComponents.js');