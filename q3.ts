import * as fs from "fs";

// Lê os dados do arquivo JSON
const rawData = fs.readFileSync("dados.json", "utf-8");
const faturamento = JSON.parse(rawData);

// Filtra os dias com faturamento maior que 0
const diasComFaturamento = faturamento.filter(
  (dia: { valor: number }) => dia.valor > 0
);

// Calcula o menor e maior valor de faturamento
const menorValor = Math.min(
  ...diasComFaturamento.map((dia: { valor: number }) => dia.valor)
);
const maiorValor = Math.max(
  ...diasComFaturamento.map((dia: { valor: number }) => dia.valor)
);

// Calcula a média mensal, ignorando os dias sem faturamento
const somaFaturamento = diasComFaturamento.reduce(
  (acc: number, dia: { valor: number }) => acc + dia.valor,
  0
);
const mediaMensal = somaFaturamento / diasComFaturamento.length;

// Conta os dias com faturamento acima da média mensal
const diasAcimaDaMedia = diasComFaturamento.filter(
  (dia: { valor: number }) => dia.valor > mediaMensal
).length;

// Exibe os resultados
console.log(`Menor valor de faturamento: ${menorValor.toFixed(2)}`);
console.log(`Maior valor de faturamento: ${maiorValor.toFixed(2)}`);
console.log(
  `Número de dias com faturamento acima da média mensal: ${diasAcimaDaMedia}`
);
