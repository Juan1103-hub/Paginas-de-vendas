const fs = require('fs');

const path = 'joelheira/index.html';
let content = fs.readFileSync(path, 'utf8');

content = content.replace(/styles\.css/g, 'assets/css/styles.css');
content = content.replace(/produto-principal\.jpg/g, 'assets/img/produto-principal.jpg');
content = content.replace(/detalhe-(\d)\.jpg/g, 'assets/img/detalhe-$1.jpg');
content = content.replace(/thumb-demo\.jpg/g, 'assets/img/thumb-demo.jpg');
content = content.replace(/thumb-depoimento\.jpg/g, 'assets/img/thumb-depoimento.jpg');
content = content.replace(/thumb-vsl\.jpg/g, 'assets/img/thumb-vsl.jpg');
content = content.replace(/garantia\.png/g, 'assets/img/garantia.png');
content = content.replace(/logo\.png/g, 'assets/img/logo.png');

fs.writeFileSync(path, content, 'utf8');
console.log('Fixed paths safely in utf8');
