const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch();
  const ctx = await b.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1.2 });
  for (const s of ['site-a-dark', 'site-b-editorial']) {
    const p = await ctx.newPage();
    await p.goto('file:///tmp/iraady-build/' + s + '/index.html', { waitUntil: 'networkidle' });
    await p.waitForTimeout(2500);
    await p.screenshot({ path: '/tmp/iraady-build/' + s + '-v2-full.png', fullPage: true });
    console.log('shot', s);
    await p.close();
  }
  await b.close();
})();
