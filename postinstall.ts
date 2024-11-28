import * as fs from 'fs';
import * as path from 'path';



// Función para copiar recursivamente una carpeta
function copyFolderSync(from: string, to: string): void {
    fs.mkdirSync(to, { recursive: true });
    fs.readdirSync(from).forEach(element => {
        const fromPath = path.join(from, element);
        const toPath = path.join(to, element);
        if (fs.lstatSync(fromPath).isFile()) {
            fs.copyFileSync(fromPath, toPath);
        } else {
            copyFolderSync(fromPath, toPath);
        }
    });
}
// Define la carpeta de origen y la carpeta de destino
const sourceDir = path.join(__dirname, 'src', 'sass');
const targetDir = path.join(__dirname, 'dist', 'static', 'sass');

// Copia la carpeta de origen a la carpeta de destino
copyFolderSync(sourceDir, targetDir);

console.log('Carpeta copiada');