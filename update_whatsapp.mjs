import fs from 'fs';
import path from 'path';

const files = [
  'src/components/Topbar.jsx',
  'src/components/Footer.jsx',
  'src/pages/ContactPage.jsx'
];

files.forEach(file => {
  const filePath = path.join('c:/Projekte/Projekte2/Maksutaj', file);
  let content = fs.readFileSync(filePath, 'utf8');

  // In Topbar.jsx
  if (file.includes('Topbar.jsx')) {
    content = content.replace(/className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24"/g, 'className="w-5 h-5 mr-2 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24"');
  }

  // In Footer.jsx
  if (file.includes('Footer.jsx')) {
    content = content.replace(/className="w-5 h-5 text-brand-gold mr-3 mt-1" fill="currentColor" viewBox="0 0 24 24"/g, 'className="w-6 h-6 text-[#25D366] mr-3 mt-0.5" fill="currentColor" viewBox="0 0 24 24"');
  }

  // In ContactPage.jsx
  if (file.includes('ContactPage.jsx')) {
    content = content.replace(/className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 24 24"/g, 'className="w-6 h-6 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24"');
  }

  fs.writeFileSync(filePath, content);
});

console.log("Updated WhatsApp emojis");
