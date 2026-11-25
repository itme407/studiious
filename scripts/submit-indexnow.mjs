import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const sitemapPath = path.join(rootDir, 'public', 'sitemap.xml');

const INDEXNOW_KEY = '1e6ac7b58a4b4c8d858b2b012ea116cc';
const HOST = 'seal-pdf.com';
const KEY_LOCATION = `https://${HOST}/${INDEXNOW_KEY}.txt`;

async function main() {
  const sitemapXml = fs.readFileSync(sitemapPath, 'utf8');
  const urlList = [...sitemapXml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1].trim());

  if (urlList.length === 0) {
    console.error('No URLs found in public/sitemap.xml');
    process.exit(1);
  }

  const payload = {
    host: HOST,
    key: INDEXNOW_KEY,
    keyLocation: KEY_LOCATION,
    urlList,
  };

  console.log(`Submitting ${urlList.length} URLs to IndexNow...`);

  const res = await fetch('https://api.indexnow.org/IndexNow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(payload),
  });

  const text = await res.text();
  console.log(`IndexNow response: ${res.status} ${res.statusText}${text ? ` — ${text}` : ''}`);

  if (!res.ok) {
    process.exit(1);
  }
}

main().catch((err) => {
  console.error('IndexNow submission failed:', err);
  process.exit(1);
});
