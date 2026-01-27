
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const storyFr = JSON.parse(fs.readFileSync(path.join(__dirname, 'src', 'storyFr.json'), 'utf8'));
const storyEn = JSON.parse(fs.readFileSync(path.join(__dirname, 'src', 'storyEn.json'), 'utf8'));

console.log("\nChecking for 'avoue' scene in Chapter 1:");

if (storyFr.chapter1.scenes.avoue) console.log("storyFr: avoue scene FOUND");
else console.log("storyFr: avoue scene NOT FOUND");

if (storyEn.chapter1.scenes.avoue) console.log("storyEn: avoue scene FOUND");
else console.log("storyEn: avoue scene NOT FOUND");

if (storyEn.chapter2.scenes.start) console.log("storyEn: chapter2 start scene FOUND");
else console.log("storyEn: chapter2 start scene NOT FOUND");
