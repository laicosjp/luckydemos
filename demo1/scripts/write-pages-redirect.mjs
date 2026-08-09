import { mkdir, writeFile } from 'node:fs/promises';

const destination = new URL('../dist/index.html', import.meta.url);

await mkdir(new URL('../dist/', import.meta.url), { recursive: true });
await writeFile(destination, `<!doctype html>
<html lang="ja">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="refresh" content="0; url=/luckydemos/demo1/">
    <link rel="canonical" href="https://laicosjp.github.io/luckydemos/demo1/">
    <title>Demo 1</title>
  </head>
  <body>
    <a href="/luckydemos/demo1/">demo1へ移動</a>
  </body>
</html>
`);
