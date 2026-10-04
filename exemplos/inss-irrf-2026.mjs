// Exemplo mínimo: INSS progressivo e IRRF 2026 com a redução da Lei 15.270/2025.
// Uso: node exemplos/inss-irrf-2026.mjs 6000
import { readFileSync } from 'node:fs';
const r = JSON.parse(readFileSync(new URL('../dados/regras-2026.json', import.meta.url)));
const round2 = (x) => Math.sign(x) * Math.round(Math.abs(x) * 100 + 1e-7) / 100;

export function inss(salario) {
  let prev = 0, total = 0;
  for (const b of r.inss.bands) { if (salario <= prev) break; total += (Math.min(salario, b.upTo) - prev) * b.rate; prev = b.upTo; }
  return round2(total);
}
const tabela = (base) => { if (base <= 0) return 0; const b = r.irrf.bands.find((x) => x.upTo === null || base <= x.upTo); return round2(Math.max(0, base * b.rate - b.deduct)); };
export function irrf(salario, dependentes = 0) {
  const legal = tabela(salario - inss(salario) - dependentes * r.irrf.dependentDeduction);
  const simplificado = tabela(salario - r.irrf.simplifiedDiscount);
  const imposto = Math.min(legal, simplificado);
  const red = r.irrfReduction;
  const reducao = salario <= red.fullExemptionUpTo ? Math.min(imposto, red.maxReduction)
    : salario <= red.phaseOutUpTo ? Math.min(Math.max(red.phaseOutConstant - red.phaseOutFactor * salario, 0), imposto) : 0;
  return round2(imposto - reducao);
}
const s = Number(process.argv[2] || 6000);
console.log({ salario: s, inss: inss(s), irrf: irrf(s), liquido: round2(s - inss(s) - irrf(s)) });
