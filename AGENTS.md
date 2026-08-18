# AGENTS.md — plusone

> Contrato operacional único deste repositório. `CLAUDE.md` importa este arquivo.
> Kernel: `anchora-co/agent-os` · registro: `agent-os/registry/repos.yaml` (`cof-plusone`)

## 1. Identidade

| Campo | Valor |
|---|---|
| frente | coffee |
| papel | canônico |
| entidade | Hachi |
| fonte da verdade de | publicação do objeto de marca Hachi × Plusone — Emotional Coordinates, servido em `https://plusone.hachiproject.com` |
| caminho local | `~/Anchora/coffee/plusone` |

**Repositório público.** É o único repositório público do portfólio café: tudo
que entra aqui é legível por qualquer pessoa.

## 2. Ordem de leitura

1. este arquivo
2. `README.md` — inclui o procedimento de publicação em três passos
3. `docs/ai/handoff.md`
4. `index.html` — o objeto de marca de quatro seções (Presentation, Brand
   Guidelines, Crossmodal Coffee, BrandBook), unificadas sob o design system do
   BrandBook. Cerca de 2,2 MB por causa da fotografia embutida.
5. `CNAME` — domínio customizado lido pelo GitHub Pages

## 3. Fronteiras

- **Não é** o repositório de IP da Hachi. Marca, HECS e arquitetura do Hachi OS
  vivem em `Hachi`, que é privado e contém IP confidencial.
- **Não é** aplicação: é uma página estática publicada pelo GitHub Pages a
  partir da raiz de `main`.
- **Nunca entra aqui:** IP técnico não aprovado para público, protocolo de
  processo, dado comercial, preço, economia de franquia ou qualquer material
  interno da Paradise Horse, da Valley Coffee ou da Yumgaafe.
- **Não se mistura com** `paradise-horse` nem `valley-coffee`: entidades
  distintas, públicos distintos.

## 4. Método

- MAES: não se aplica (não há `.anchora-engineering/` neste repositório).
- Modo de marca: sub-marca Hachi, no sistema visual do BrandBook Hachi ×
  Plusone. Nunca o sistema visual da Anchora, da Paradise Horse ou da Yumgaafe.

## 5. Executor

- Primário: **claude** — cópia, narrativa e ajuste do objeto de marca.
- Secundário: **codex** — `gh`, PRs, publicação e DNS/Pages.

## 6. Regras invioláveis

1. Repositório público: nada confidencial entra. Na dúvida sobre o nível de
   confidencialidade de uma alegação, ela não é publicada.
2. IP técnico e alegação de processo da Hachi só aparecem aqui com aprovação
   explícita e registrada.
3. O site é servido a partir de `index.html` na raiz de `main`, via GitHub
   Pages, com o domínio lido do arquivo `CNAME`. Não remova o `CNAME` nem o
   `.nojekyll`.
4. `index.html` é um arquivo grande, com fotografia embutida. Substitua o
   arquivo inteiro por uma versão entregue e verificada; não edite trechos
   binários embutidos à mão.
5. Toda mudança é renderizada e inspecionada no navegador antes de publicar, e
   a página publicada é conferida no domínio público depois do deploy.
6. Hachi não é marca de varejo: esta é uma peça de marca, não um canal de
   venda.
7. Segredo não entra no repositório: nem token, nem `.env`, nem chave.
8. Trabalho não declarado não existe: ao terminar, atualize
   `docs/ai/handoff.md`.

## 7. Definição de pronto

- Página renderizada e inspecionada localmente e depois em
  `https://plusone.hachiproject.com`.
- `CNAME` e `.nojekyll` preservados; HTTPS ativo.
- Nenhuma alegação confidencial ou não aprovada publicada.
- `docs/ai/handoff.md` atualizado e risco residual declarado.

## 8. Handoff

Ao terminar, acrescente em `docs/ai/handoff.md`:

```markdown
## <AAAA-MM-DD> · <codex|claude> · coffee

**Objetivo:**
**Feito:**
**Verificado:**
**Não feito:**
**Risco residual:**
**Próxima ação:**
```
