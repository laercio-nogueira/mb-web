const fs = require('fs');
const path = require('path');

module.exports = (req, res, next) => {
  const manifest = JSON.parse(
    fs.readFileSync(path.join(__dirname, '../../dist/.vite/manifest.json'), 'utf-8')
  );

  const entry = manifest['src/main.js'];
  const jsFile = entry.file;
  const cssFile = entry.css ? entry.css[0] : null;
  req.jsPath = `/assets/${path.basename(jsFile)}`,
  req.cssPath = cssFile ? `/assets/${path.basename(cssFile)}` : null,
    
  next();
};