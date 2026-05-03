import fs from 'fs';
import path from 'path';

const files = [
  'src/components/Footer.jsx',
  'src/components/Hero.jsx',
  'src/components/Navbar.jsx',
  'src/components/Services.jsx',
  'src/components/Topbar.jsx',
  'src/pages/AboutPage.jsx',
  'src/pages/ContactPage.jsx',
  'src/pages/HomePage.jsx',
  'src/pages/ReferencesPage.jsx'
];

files.forEach(file => {
  const filePath = path.join('c:/Projekte/Projekte2/Maksutaj', file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Fix React imports
  content = content.replace(/import React from ['"]react['"];?\n?/g, '');
  content = content.replace(/import React, \{([^}]+)\} from ['"]react['"];?/g, 'import {$1} from "react";');

  // Fix Navbar escape
  if (file.includes('Navbar.jsx')) {
    content = content.replace(/className=\{"block px-4 py-4 text-center text-lg font-display font-bold uppercase tracking-widest \\\$\{isActive\('\/references'\)\} bg-gray-50 hover:bg-brand-gold\/10 hover:text-brand-gold rounded-lg border border-gray-100"\}/g, 'className={`block px-4 py-4 text-center text-lg font-display font-bold uppercase tracking-widest ${isActive(\'/references\')} bg-gray-50 hover:bg-brand-gold/10 hover:text-brand-gold rounded-lg border border-gray-100`}');
  }

  // Fix ContactPage error unused
  if (file.includes('ContactPage.jsx')) {
    content = content.replace(/catch \(error\)/g, 'catch (e)');
  }

  fs.writeFileSync(filePath, content);
});

console.log("Fixed linting errors");
