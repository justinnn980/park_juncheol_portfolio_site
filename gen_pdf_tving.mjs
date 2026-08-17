import puppeteer from 'puppeteer';
import { pathToFileURL } from 'url';
import path from 'path';

const filePath = path.resolve('resume_tving_print.html');
const browser = await puppeteer.launch({ headless: 'new' });
const page = await browser.newPage();

await page.setViewport({ width: 1280, height: 900 });
await page.goto(pathToFileURL(filePath).href, {
  waitUntil: 'networkidle0',
  timeout: 60000,
});

await page.evaluateHandle('document.fonts.ready');

await page.pdf({
  path: '박준철_티빙_IT Support Engineer_경력기술서.pdf',
  format: 'A4',
  printBackground: true,
  margin: { top: '0', bottom: '0', left: '0', right: '0' },
});

await browser.close();
console.log('✅ PDF 생성 완료: 박준철_티빙_IT Support Engineer_경력기술서.pdf');
