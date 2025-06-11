import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function extractStrings(dir) {
  const files = fs.readdirSync(dir);
  const strings = new Set();
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      extractStrings(filePath).forEach(str => strings.add(str));
    } else if (file.endsWith('.jsx') || file.endsWith('.js')) {
      const content = fs.readFileSync(filePath, 'utf8');
      const matches = content.match(/t\(['"`]([^'"`]+)['"`]\)/g);
      
      if (matches) {
        matches.forEach(match => {
          const key = match.match(/t\(['"`]([^'"`]+)['"`]\)/)[1];
          strings.add(key);
        });
      }
    }
  });
  
  return Array.from(strings);
}

const translationKeys = extractStrings('./src');
console.log('Translation keys found:', translationKeys);

// حفظ النتائج في ملف JSON
const output = {
  keys: translationKeys,
  count: translationKeys.length,
  timestamp: new Date().toISOString()
};

fs.writeFileSync('translation-keys.json', JSON.stringify(output, null, 2));
console.log(`Found ${translationKeys.length} translation keys`);
console.log('Results saved to translation-keys.json');