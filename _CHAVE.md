# Chave de Escape — Proporcionalidade Salarial

Para REMOVER a regra de meses do código, execute no terminal:

    node _remover-proporcional.js

## O que o comando apaga

Apaga apenas a regra de limites por mês:
- Fevereiro/Março: proporcional se ≤ 27 dias
- Demais meses: proporcional se ≤ 29 dias

## O que o comando NÃO apaga

Mantém intacto o cálculo proporcional de horista (horas trabalhadas × valor/hora).

---

## Regra ativa no código (mensalista)

| Mês               | Dias trabalhados | Cálculo                      |
|-------------------|-----------------|------------------------------|
| Fevereiro / Março | ≤ 27 dias       | Proporcional (sal/30 × dias) |
| Fevereiro / Março | ≥ 28 dias       | Salário integral             |
| Demais meses      | ≤ 29 dias       | Proporcional (sal/30 × dias) |
| Demais meses      | ≥ 30 dias       | Salário integral             |
