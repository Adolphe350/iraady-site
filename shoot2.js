const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch();
  const ctx = await b.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1.5 });
  for (const s of ['site-a-dark', 'site-b-editorial']) {
    const p = await ctx.newPage();
    await p.goto('file:///tmp/iraady-build/' + s + '/index.html', { waitUntil: 'domcontentloaded' });
    await p.waitForTimeout(1500);
    await p.screenshot({ path: '/tmp/iraady-build/' + s + '-preview.png', fullPage: false });
    console.log('shot', s);
    await p.close();
  }
  await b.close();
})();
