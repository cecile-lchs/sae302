const fs = require('fs');

function checkFile(path) {
  try {
    const content = fs.readFileSync(path, 'utf8');
    const data = JSON.parse(content);
    console.log(`File: ${path}`);
    console.log('Root keys:', Object.keys(data));
    if (data.chapter1) {
      console.log('chapter1 keys:', Object.keys(data.chapter1));
      if (data.chapter1.chapter2) {
        console.log('WARNING: chapter2 found INSIDE chapter1');
      }
    }
    if (data.scenes && data.scenes.verite) { // Check if root has scenes (wrong)
      console.log('WARNING: scenes found at ROOT');
    }
  } catch (e) {
    console.error(`Error parsing ${path}:`, e.message);
  }
}

checkFile('src/storyFr.json');
checkFile('src/storyEn.json');
