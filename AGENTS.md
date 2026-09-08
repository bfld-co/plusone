# AGENTS.md: Plusone public brand object

Antes de qualquer acao, leia o kernel global em
`/Users/antonaci/BFLD/.agent-os/AGENTS.md`.

Confirme este repositorio no Registry v3 em
`/Users/antonaci/BFLD/.agent-os/registry/repos.yaml` e opere somente no
`canonical_path` declarado.

## Identidade e autoridade

Este repositorio publica um objeto de marca Hachi x Plusone. Hachi e Plusone
preservam identidade propria. A BFLD governa o processo e a disciplina do
repositorio, sem substituir a identidade do produto por sua marca corporativa.

Este repositorio nao e fonte de IP tecnico, operacao, precos, dados comerciais
ou decisoes institucionais da Hachi ou da BFLD.

## Ordem de leitura

1. este arquivo;
2. `README.md`;
3. `repo.manifest.json`;
4. `.bfld-engineering/project.json`;
5. `docs/engineering/04-work-packages/WP-0001-bfld-runtime-contract.md`;
6. `docs/engineering/04-work-packages/WP-0002-pages-authority-cutover.md`;
7. `docs/ai/handoff.md`.

`index.html`, `CNAME` e `.nojekyll` sao artefatos de producao e nao devem ser
alterados fora de Work Package aprovado.

## Runtime e fronteiras

- O dominio publico atual responde por GitHub Pages e entrega exatamente o
  `index.html` desta arvore.
- A Pages atual ainda pertence ao repositorio pessoal predecessor. A Pages da
  organizacao deve ser validada como staging antes de qualquer troca de DNS.
- O dominio, HTTPS, arquivo `CNAME`, bytes publicados e rollback sao invariantes.
- Nada confidencial, segredo, token, preco ou IP tecnico entra neste repositorio
  publico.

## Metodo e coordenacao

- Metodo: BASE-1.2, proporcional ao risco.
- Envelope: `.bfld-engineering/`.
- Codex, Claude e Flightdeck obedecem ao mesmo kernel, Registry e contrato.
- Mudanca material exige CI, evidencia, rastreabilidade e handoff.

## Definicao de pronto

- `node scripts/validate-repository.mjs` passa;
- o hash do site e os controles Pages conferem com o baseline;
- staging e producao sao validadas antes e depois de qualquer cutover;
- DNS muda uma unica vez, com rollback documentado;
- `docs/ai/handoff.md` registra separadamente commit, PR, CI, merge e runtime.
