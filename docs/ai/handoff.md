# Handoff

Estado deixado pelo último agente. Mais recente no topo.
Sem este arquivo, o próximo agente — Codex ou Claude — recomeça no escuro.

---

## 2026-08-18 · claude · coffee

**Objetivo:** normalizar o contrato de entrada de agentes deste repositório.
**Feito:** criado `AGENTS.md` como contrato operacional único, preenchido a
partir do `README.md` e da árvore do repositório; `CLAUDE.md` criado com a
única linha `@AGENTS.md`; criado este `docs/ai/handoff.md`; criado `.gitignore`
com `graphify-out/`, `.env` e `.env.local`.
**Verificado:** o repositório não tinha nenhum arquivo de contrato antes desta
mudança; `index.html`, `CNAME` e `.nojekyll` seguem intactos.
**Não feito:** nenhum conteúdo de projeto foi criado, alterado ou removido.
**Risco residual:** o repositório é público; qualquer conteúdo adicionado aqui
fica visível externamente, inclusive este contrato.
**Próxima ação:** confirmar com Matheus se algum trecho do contrato deve ficar
fora de um repositório público.
