// Execute com: node _remover-proporcional.js
const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'index.html');
let html = fs.readFileSync(file, 'utf8');

const antigo = `  // Proporcionalidade: Fev/Mar corte em 28 (≤27 proporcional), demais em 30 (≤29 proporcional)
  const _propAtiva=!window.location.search.includes('sem-proporcional');
  const _limCorte=(MES_ATUAL===2||MES_ATUAL===3)?28:30;
  const salMensal = categoria === 'horista'
    ? sal * (dTrabCalc - hRepouso)
    : (_propAtiva && dTrabCalc < _limCorte) ? Math.trunc(sal/30*dTrabCalc*100)/100 : sal;`;

const novo = `  const salMensal = categoria === 'horista' ? sal * (dTrabCalc - hRepouso) : sal;`;

if (!html.includes(antigo.trim().split('\n')[1])) {
  console.log('⚠️  Bloco de proporcionalidade não encontrado. Já foi removido?');
  process.exit(1);
}

html = html.replace(antigo, novo);
fs.writeFileSync(file, html, 'utf8');
console.log('✅  Proporcionalidade removida do index.html com sucesso.');
