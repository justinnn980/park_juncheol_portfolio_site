import puppeteer from 'puppeteer';
import { pathToFileURL } from 'url';
import path from 'path';

const targets = [
  { src: 'resume_common_print.html', out: '박준철_이력서_경력기술서.pdf' },
  { src: 'portfolio_common_print.html', out: '박준철_포트폴리오.pdf' },
];

const browser = await puppeteer.launch({ headless: 'new' });

for (const { src, out } of targets) {
  const filePath = path.resolve(src);
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 900 });
  await page.goto(pathToFileURL(filePath).href, {
    waitUntil: 'networkidle0',
    timeout: 60000,
  });
  await page.evaluateHandle('document.fonts.ready');
  await page.pdf({
    path: out,
    format: 'A4',
    printBackground: true,
    margin: { top: '0', bottom: '0', left: '0', right: '0' },
  });
  await page.close();
  console.log(`✅ PDF 생성 완료: ${out}`);
}

await browser.close();
