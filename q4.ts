// Faturamentos por estado

const faturamentos = {
  sp: 67836.43,
  rj: 36678.66,
  mg: 29229.88,
  es: 27165.48,
  outros: 19849.53,
};

// Total
const total = Object.values(faturamentos).reduce((acc, val) => acc + val, 0);

// Calcula e exibe o percentual de cada estado
console.log("Percentual de representação por estado:");
for (const estado in faturamentos) {
  const percentual = (faturamentos[estado] / total) * 100;
  console.log(`${estado.toUpperCase()}: ${percentual.toFixed(2)}%`);
}
