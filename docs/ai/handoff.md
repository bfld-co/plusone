# Handoff

Estado deixado pelo último agente. Mais recente no topo.
Sem este arquivo, o próximo agente — Codex ou Claude — recomeça no escuro.

---

## 2026-09-07 | codex | BFLD contract and Pages authority baseline

**Objetivo:** retirar instrucoes institucionais substituidas e preparar a
transferencia segura da Pages para a organizacao sem alterar producao.

**Feito:** kernel, Registry, BASE-1.2, manifesto, baseline, dois Work Packages e
validador comum aos tres executores foram adicionados. A identidade Hachi x
Plusone foi preservada.

**Verificado:** o dominio responde HTTP 200 e seu corpo possui o mesmo SHA-256
do `index.html`; `CNAME` e `.nojekyll` conferem com o baseline.

**Nao feito:** DNS, dominio, HTTPS, parent, conteudo e identidade nao foram
alterados. A Pages da organizacao foi criada somente como staging e ainda nao
possui o dominio customizado.

**Risco residual:** a producao ainda depende do repositorio pessoal predecessor
e de um alias de conta substituido no DNS. O computador estava bloqueado e o
controle DNS nao pode ser validado.

**Proxima acao:** integrar a evidencia, mover o clone para `ventures/` e, com o
computador desbloqueado, transferir a claim e o DNS usando a staging ja validada.

**Rollback:** reverter a PR e restaurar o caminho anterior no Registry; producao
permanece no predecessor.

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
