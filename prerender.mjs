import { execSync } from 'node:child_process';
import { readFileSync, writeFileSync, rmSync, readdirSync, mkdirSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
import path from 'node:path';

execSync('vite build --ssr src/entry-server.jsx --outDir dist-ssr', {
  stdio: 'inherit',
});

const ssrFile = readdirSync('dist-ssr').find((f) => f.startsWith('entry-server'));
const { renderApp } = await import(pathToFileURL(path.resolve('dist-ssr', ssrFile)).href);
// Uma URL por plataforma, para a mensagem do WhatsApp chegar marcada:
//   /         -> #Site    (organico, direto)
//   /google/  -> #Google
//   /meta/    -> #Meta
const VARIANTES = [
  { origem: 'site',   dir: ''       },
  { origem: 'google', dir: 'google' },
  { origem: 'meta',   dir: 'meta'   },
];
const CANONICAL = 'https://amaralebohrer.com.br/';

const indexPath = 'dist/index.html';
const htmlBase = readFileSync(indexPath, 'utf8');

globalThis.__ORIGEM__ = 'site';
const appHtml = renderApp();

let html = htmlBase;

const jsMatch = html.match(/<script type="module"[^>]*src="([^"]+)"[^>]*><\/script>/);
const mainJs = jsMatch ? jsMatch[1] : null;

html = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

if (mainJs && !html.includes(`rel="modulepreload" href="${mainJs}"`)) {
  html = html.replace(
    '</head>',
    `<link rel="modulepreload" href="${mainJs}" crossorigin>\n</head>`
  );
}

writeFileSync(indexPath, html);

// noindex + canonical para a raiz: as variantes existem para campanha paga,
// nao para busca organica, e sem isso seriam conteudo duplicado da raiz. Isso
// importa mais aqui do que nas LPs: este e o dominio que ranqueia.
for (const v of VARIANTES) {
  if (!v.dir) continue;
  globalThis.__ORIGEM__ = v.origem;
  const corpo = renderApp();
  let saida = htmlBase.replace('<div id="root"></div>', `<div id="root">${corpo}</div>`);
  if (mainJs && !saida.includes(`rel="modulepreload" href="${mainJs}"`)) {
    saida = saida.replace('</head>', `<link rel="modulepreload" href="${mainJs}" crossorigin>\n</head>`);
  }
  saida = saida.replace(/\s*<link rel="canonical"[^>]*>/gi, '');
  saida = saida.replace('</head>',
    `<meta name="robots" content="noindex, follow">\n<link rel="canonical" href="${CANONICAL}">\n</head>`);
  mkdirSync(path.join('dist', v.dir), { recursive: true });
  writeFileSync(path.join('dist', v.dir, 'index.html'), saida);
  console.log(`✓ Prerendered dist/${v.dir}/index.html  (origem: ${v.origem})`);
}

rmSync('dist-ssr', { recursive: true, force: true });

console.log('✓ Prerendered dist/index.html');
