# Tabelas trabalhistas CLT 2026 em JSON (INSS, IRRF, redução da Lei 15.270, seguro-desemprego, FGTS, aviso prévio)

Registro aberto dos valores oficiais usados na folha de pagamento brasileira em 2026, com **fonte oficial, data de vigência e data da última conferência** em cada item. Mantido pelo [ContaCLT](https://contaclt.com/) — as mesmas tabelas alimentam as calculadoras de [rescisão](https://contaclt.com/calculadora-rescisao/), [salário líquido](https://contaclt.com/calculadora-salario-liquido/), [13º](https://contaclt.com/calculadora-decimo-terceiro/) e [férias](https://contaclt.com/calculadora-ferias/).

## Arquivos

| Arquivo | Conteúdo |
|---|---|
| [`dados/regras-2026.json`](dados/regras-2026.json) | Salário mínimo, INSS 2026, IRRF mensal, redução do IR (Lei 15.270/2025), seguro-desemprego, adicional noturno, insalubridade/periculosidade, FGTS, aviso prévio e prazos do 13º |
| [`dados/regras-2025.json`](dados/regras-2025.json) | Valores de 2025 para comparação (INSS da Portaria MPS/MF nº 6/2025; IRRF de maio a dezembro de 2025) |
| [`exemplos/inss-irrf-2026.mjs`](exemplos/inss-irrf-2026.mjs) | Exemplo em JavaScript: INSS progressivo e IRRF com a redução de 2026 |

## Resumo de 2026

**INSS (empregado CLT)** — Portaria Interministerial MPS/MF nº 13/2026

| Salário de contribuição | Alíquota |
|---|---|
| Até R$ 1.621,00 | 7,5% |
| De R$ 1.621,01 até R$ 2.902,84 | 9% |
| De R$ 2.902,85 até R$ 4.354,27 | 12% |
| De R$ 4.354,28 até R$ 8.475,55 | 14% |

Contribuição máxima: R$ 988,09 (soma exata das faixas, arredondada no final).

**IRRF mensal** — Lei 15.191/2025

| Base de cálculo | Alíquota | Parcela a deduzir |
|---|---|---|
| Até R$ 2.428,80 | Isento | — |
| De R$ 2.428,81 até R$ 2.826,65 | 7,5% | R$ 182,16 |
| De R$ 2.826,66 até R$ 3.751,05 | 15% | R$ 394,16 |
| De R$ 3.751,06 até R$ 4.664,68 | 22,5% | R$ 675,49 |
| Acima de R$ 4.664,68 | 27,5% | R$ 908,73 |

Dedução por dependente R$ 189,59; desconto simplificado R$ 607,20 (usa-se o mais vantajoso).

**Redução do IR a partir de 2026** — Lei 15.270/2025 (art. 3º-A da Lei 9.250/1995), medida pelo rendimento tributável **bruto** do mês:

- até R$ 5.000,00: redução de até R$ 312,89, zerando o imposto;
- de R$ 5.000,01 a R$ 7.350,00: redução = R$ 978,62 − 0,133145 × rendimento;
- acima de R$ 7.350,00: sem redução. Aplica-se também ao 13º salário.

**Seguro-desemprego** — tabela anual do MTE, vigente desde 11/01/2026

| Média salarial | Parcela |
|---|---|
| Até R$ 2.222,17 | Média × 0,8 (mínimo R$ 1.621,00) |
| De R$ 2.222,18 até R$ 3.703,99 | R$ 1.777,74 + 50% do que passar de R$ 2.222,17 |
| Acima de R$ 3.703,99 | R$ 2.518,65 (teto) |

Calculadora: [contaclt.com/calculadora-seguro-desemprego](https://contaclt.com/calculadora-seguro-desemprego/).

## Exemplo

```sh
node exemplos/inss-irrf-2026.mjs 6000
# { salario: 6000, inss: 641.51, irrf: 385.1, liquido: 4973.39 }
```

Valores conferidos contra simulações publicadas por fontes independentes; a diferença de um centavo em alguns casos vem do arredondamento faixa a faixa usado por algumas folhas. Detalhes em [metodologia](https://contaclt.com/metodologia/).

## Atualização

Os valores são revisados quando o governo publica novas tabelas (salário mínimo e INSS costumam sair entre dezembro e janeiro). Histórico em [contaclt.com/atualizacoes](https://contaclt.com/atualizacoes/). Encontrou divergência com a fonte oficial? Abra uma *issue* com o link do ato.

## Licença

- Dados (`dados/`): [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.pt_BR) — cite “ContaCLT (https://contaclt.com/dados/)”.
- Código de exemplo (`exemplos/`): MIT.

Conteúdo informativo; não substitui orientação de contador, advogado ou sindicato.
