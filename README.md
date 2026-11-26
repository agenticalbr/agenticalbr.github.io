# agentical.com.br

Site da Agentical em Astro + Tailwind, publicado no GitHub Pages.

## Rodar localmente

    npm install
    npm run dev      # http://localhost:4321 (mostra também os rascunhos do blog)
    npm run build    # gera dist/ (sem rascunhos)

## Onde mexer

- `src/consts.ts`: link da agenda (`AGENDA_URL`) e e-mail de contato
- `src/data/produtos.ts`: textos dos 6 produtos
- `src/content/blog/*.md`: posts (`rascunho: true` não vai para o ar)
- `src/styles/global.css`: paleta e fontes (Syne até 500; o ExtraBold é só do logo)

## Publicação

O workflow `.github/workflows/deploy.yml` publica a cada push na `main`.
Em Settings → Pages, a fonte precisa estar como **GitHub Actions**.

`_legacy/` guarda a splash page antiga. `docs/` é ignorada e nunca deve ser publicada.
