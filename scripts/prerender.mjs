import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { toolMarketingData } from '../src/data/toolMarketingData.js';
import { guidesData } from '../src/data/guidesData.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const SITE_URL = 'https://seal-pdf.com';

const tools = [
  { path: '/merge-pdf', key: 'merge', name: 'Merge PDF', desc: 'Combine PDFs in the order you want with the easiest PDF merger.', kw: 'merge PDF, combine PDF files, PDF merger free, join PDF files online, combine documents' },
  { path: '/split-pdf', key: 'splitter', name: 'Split PDF', desc: 'Separate one page or a whole set for easy conversion.', kw: 'split PDF, extract PDF pages, PDF splitter online, cut PDF pages, separate PDF pages free' },
  { path: '/remove-pages', key: 'remover', name: 'Remove pages', desc: 'Remove pages from a PDF document. Select and remove the pages.', kw: 'remove PDF pages, delete PDF pages, delete pages from PDF online, clean PDF, remove pages free' },
  { path: '/extract-pages', key: 'extract', name: 'Extract pages', desc: 'Extract specific pages from a PDF to form a new document.', kw: 'extract PDF pages, save PDF pages, extract pages from PDF online, select PDF pages' },
  { path: '/organize-pdf', key: 'organize', name: 'Organize PDF', desc: 'Sort, change order, or delete PDF pages easily.', kw: 'organize PDF, reorder PDF pages, rotate PDF pages, move pages in PDF online, organize documents' },
  { path: '/compress-pdf', key: 'compress', name: 'Compress PDF', desc: 'Reduce file size while optimizing for maximal PDF quality.', kw: 'compress PDF, shrink PDF size, reduce PDF size, PDF compressor online, optimize PDF quality' },
  { path: '/jpg-to-pdf', key: 'img2pdf', name: 'JPG to PDF', desc: 'Convert JPG images to PDF in seconds. Easily adjust orientation and margins.', kw: 'jpg to PDF, image to PDF converter, png to PDF, photos to PDF online, convert jpg to PDF free' },
  { path: '/pdf-to-jpg', key: 'pdf2jpg', name: 'PDF to JPG', desc: 'Convert each PDF page into a JPG or extract all images contained in a PDF.', kw: 'pdf to jpg, convert PDF to images, extract images from PDF, PDF to jpeg converter online' },
  { path: '/pdf-to-word', key: 'pdf2word', name: 'PDF to Word', desc: 'Convert PDF documents to editable Word files with high accuracy.', kw: 'pdf to word, convert PDF to docx, PDF to word converter online, editable word document free' },
  { path: '/rotate-pdf', key: 'rotate', name: 'Rotate PDF', desc: 'Rotate your PDFs the way you need them.', kw: 'rotate PDF, fix PDF orientation, turn PDF pages, rotate PDF online, rotate single page' },
  { path: '/page-numbers', key: 'numberer', name: 'Add page numbers', desc: 'Add page numbers into PDFs with ease. Choose your positions and dimensions.', kw: 'add page numbers to PDF, PDF page numbering online, insert page numbers, format PDF page numbers' },
  { path: '/watermark-pdf', key: 'watermark', name: 'Add watermark', desc: 'Stamp an image or text over your PDF in seconds.', kw: 'watermark PDF, add watermark online, PDF watermark creator, text watermark, image watermark' },
  { path: '/crop-pdf', key: 'crop', name: 'Crop PDF', desc: 'Crop PDF margins, change PDF page size.', kw: 'crop PDF, trim PDF margins, change page size PDF, crop PDF online, adjust PDF view' },
  { path: '/edit-pdf', key: 'editor', name: 'Edit PDF', desc: 'Add text, images, shapes or freehand annotations to a PDF document.', kw: 'edit PDF online, free PDF editor, write on PDF, annotate PDF, add text to PDF' },
  { path: '/remove-watermark', key: 'remover_tool', name: 'Remove Watermark', desc: 'True watermark removal: identifies and deletes recurring objects from PDF data.', kw: 'remove watermark from PDF, watermark remover online, clean PDF watermark, delete PDF objects' },
  { path: '/protect-pdf', key: 'protect', name: 'Protect PDF', desc: 'Encrypt your PDF with a password to prevent unauthorized access.', kw: 'protect PDF, password protect PDF, encrypt PDF, lock PDF document, secure PDF files online' },
  { path: '/redact-pdf', key: 'redact', name: 'Redact PDF', desc: 'Permanently hide and blackout sensitive text and images.', kw: 'redact PDF, black out PDF text, permanently hide PDF info, secure redaction online, GDPR PDF tool' },
];

const homeFaqs = [
  {
    q: 'How does Seal-PDF protect my document privacy?',
    a: 'SealPDF uses advanced client-side WebAssembly technology. Most document operations (like merging, splitting, watermarking, rotating, and numbering) run directly inside your web browser engine. Your files are processed locally on your device and are never uploaded to any remote server.'
  },
  {
    q: 'Are there any file size limits or usage restrictions?',
    a: "SealPDF offers free processing with generous file capacity. Because local tools leverage your device's memory, you can manipulate multi-page PDFs and high-resolution files without strict cloud caps."
  },
  {
    q: 'Can I use SealPDF on mobile devices or smartphones?',
    a: 'Yes! SealPDF is fully responsive and optimized for mobile web browsers across iOS, Android, macOS, Windows, and Linux. No app installation is required.'
  },
  {
    q: 'Is SealPDF compliant with GDPR and CCPA privacy standards?',
    a: 'Yes. SealPDF strictly adheres to GDPR and CCPA privacy principles. Because we operate with a client-side execution paradigm, we do not inspect, retain, or monetize your personal document data.'
  },
  {
    q: 'What is the difference between visual hiding and programmatic redaction?',
    a: "Visual hiding places a dark block over text while leaving underlying text selectable in the document layout. Programmatic redaction, offered by SealPDF's Redact Tool, permanently purges the raw vector data and text characters from the binary stream so it cannot be recovered."
  }
];

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function renderNavHtml() {
  return `<header style="padding:1rem 2rem;border-bottom:1px solid #e2e8f0;display:flex;justify-content:space-between;align-items:center;">
    <a href="/" style="font-weight:700;font-size:1.25rem;text-decoration:none;color:#0f172a;">SealPDF</a>
    <nav style="display:flex;gap:1rem;flex-wrap:wrap;">
      <a href="/merge-pdf">Merge PDF</a>
      <a href="/split-pdf">Split PDF</a>
      <a href="/compress-pdf">Compress PDF</a>
      <a href="/watermark-pdf">Watermark PDF</a>
      <a href="/jpg-to-pdf">JPG to PDF</a>
      <a href="/guides">Guides</a>
      <a href="/help">Help</a>
    </nav>
  </header>`;
}

function renderFooterHtml() {
  return `<footer style="padding:2rem;border-top:1px solid #e2e8f0;text-align:center;color:#64748b;margin-top:3rem;">
    <p>&copy; 2026 SealPDF. All rights reserved. <a href="/about">About Us</a> | <a href="/contact">Contact</a> | <a href="/guides">Guides</a> | <a href="/help">Help Center</a> | <a href="/privacy">Privacy Policy</a> | <a href="/terms">Terms of Service</a></p>
  </footer>`;
}

function buildRouteHtml(template, routePath, meta, schemaData, bodyHtml) {
  const canonical = `${SITE_URL}${routePath === '/' ? '/' : routePath}`;
  let html = template;

  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(meta.title)}</title>`);
  html = html.replace(/<meta name="description"[\s\S]*?content="[^"]*"\s*\/>/, `<meta name="description" content="${escapeHtml(meta.description)}" />`);
  html = html.replace(/<meta name="keywords"[\s\S]*?content="[^"]*"\s*\/>/, `<meta name="keywords" content="${escapeHtml(meta.keywords)}" />`);
  html = html.replace(/<link rel="canonical" href="[^"]*" id="canonical-link" \/>/, `<link rel="canonical" href="${canonical}" id="canonical-link" />`);

  html = html.replace(/<meta property="og:type" content="[^"]*" \/>/, `<meta property="og:type" content="${meta.ogType || 'website'}" />`);
  html = html.replace(/<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${canonical}" />`);
  html = html.replace(/<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${escapeHtml(meta.title)}" />`);
  html = html.replace(/<meta property="og:description"[\s\S]*?content="[^"]*"\s*\/>/, `<meta property="og:description" content="${escapeHtml(meta.description)}" />`);

  html = html.replace(/<meta name="twitter:url" content="[^"]*" \/>/, `<meta name="twitter:url" content="${canonical}" />`);
  html = html.replace(/<meta name="twitter:title" content="[^"]*" \/>/, `<meta name="twitter:title" content="${escapeHtml(meta.title)}" />`);
  html = html.replace(/<meta name="twitter:description"[\s\S]*?content="[^"]*"\s*\/>/, `<meta name="twitter:description" content="${escapeHtml(meta.description)}" />`);

  if (schemaData) {
    const jsonLdTag = `  <script id="jsonld-schema" type="application/ld+json">${JSON.stringify(schemaData)}</script>\n</head>`;
    html = html.replace('</head>', jsonLdTag);
  }

  // Replace #app-loading inside #root with semantic pre-rendered HTML (React replaces #root on mount)
  html = html.replace(
    /<div id="root">[\s\S]*?<\/div>\s*<noscript>[\s\S]*?<\/noscript>/,
    `<div id="root">${renderNavHtml()}<main style="max-width:1000px;margin:0 auto;padding:2rem 1rem;">${bodyHtml}</main>${renderFooterHtml()}</div>`
  );

  return html;
}

function writeRouteFile(routePath, html) {
  if (routePath === '/') {
    fs.writeFileSync(path.join(distDir, 'index.html'), html, 'utf8');
    return;
  }
  const targetDir = path.join(distDir, routePath.replace(/^\//, ''));
  fs.mkdirSync(targetDir, { recursive: true });
  fs.writeFileSync(path.join(targetDir, 'index.html'), html, 'utf8');
}

function main() {
  const templatePath = path.join(distDir, 'index.html');
  if (!fs.existsSync(templatePath)) {
    console.error('dist/index.html not found. Run vite build first.');
    process.exit(1);
  }
  const template = fs.readFileSync(templatePath, 'utf8');
  let count = 0;

  // 1. Homepage
  const homeSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        name: 'SealPDF',
        url: `${SITE_URL}/`,
        description: 'SealPDF is a professional, fast, and secure PDF toolkit. Watermark, merge, split, rotate, and number your PDF files for free. No file limits, no registration.'
      },
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: 'SealPDF',
        url: `${SITE_URL}/`,
        logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo.png` }
      },
      {
        '@type': 'ItemList',
        '@id': `${SITE_URL}/#tools`,
        name: 'SealPDF Online PDF Tools',
        itemListElement: tools.map((t, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: t.name,
          url: `${SITE_URL}${t.path}`
        }))
      },
      {
        '@type': 'FAQPage',
        '@id': `${SITE_URL}/#faq`,
        mainEntity: homeFaqs.map(f => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a }
        }))
      }
    ]
  };
  const homeBody = `
    <h1>Simplify your PDF workflow with everything in one spot</h1>
    <p>Powerful PDF tools made simple and free. Merge, split, compress, convert, rotate, unlock, and watermark your PDFs with just a few clicks.</p>
    <section>
      <h2>Free Browser-Based PDF Tools</h2>
      <ul>${tools.map(t => `<li><a href="${t.path}"><strong>${escapeHtml(t.name)}</strong></a>: ${escapeHtml(t.desc)}</li>`).join('')}</ul>
    </section>
    <section>
      <h2>Frequently Asked Questions</h2>
      ${homeFaqs.map(f => `<h3>${escapeHtml(f.q)}</h3><p>${escapeHtml(f.a)}</p>`).join('')}
    </section>
  `;
  writeRouteFile('/', buildRouteHtml(template, '/', {
    title: 'SealPDF | Professional PDF Toolkit - Watermark, Merge, Split & More',
    description: 'SealPDF is a professional, fast, and secure PDF toolkit. Watermark, merge, split, rotate, and number your PDF files for free. No file limits, no registration.',
    keywords: 'PDF toolkit, watermark PDF, merge PDF, split PDF, PDF pages numberer, PDF rotator, image to PDF, free PDF tools, SealPDF'
  }, homeSchema, homeBody));
  count++;

  // 2. All 17 Tool Pages
  for (const tool of tools) {
    const data = toolMarketingData[tool.key];
    const url = `${SITE_URL}${tool.path}`;
    const schema = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebApplication',
          '@id': `${url}#webapp`,
          name: `SealPDF - ${tool.name}`,
          url,
          description: data.description,
          applicationCategory: 'BusinessApplication',
          operatingSystem: 'All',
          browserRequirements: 'Requires HTML5 compatible browser',
          offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }
        },
        {
          '@type': 'HowTo',
          '@id': `${url}#howto`,
          name: `How to ${tool.name} Online Free`,
          description: `Step-by-step guide to ${data.title.toLowerCase()} online for free.`,
          step: data.steps.map((s, idx) => ({
            '@type': 'HowToStep',
            position: idx + 1,
            url: `${url}#step-${idx + 1}`,
            name: s.title,
            text: s.text
          }))
        },
        {
          '@type': 'FAQPage',
          '@id': `${url}#faq`,
          mainEntity: data.faqs.map(f => ({
            '@type': 'Question',
            name: f.question,
            acceptedAnswer: { '@type': 'Answer', text: f.answer }
          }))
        },
        {
          '@type': 'BreadcrumbList',
          '@id': `${url}#breadcrumb`,
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
            { '@type': 'ListItem', position: 2, name: tool.name, item: url }
          ]
        }
      ]
    };
    const body = `
      <nav aria-label="Breadcrumb"><a href="/">Home</a> / <span>${escapeHtml(tool.name)}</span></nav>
      <h1>${escapeHtml(tool.name)}</h1>
      <p>${escapeHtml(tool.desc)}</p>
      <section>
        <h2>${escapeHtml(data.title)}</h2>
        <p>${escapeHtml(data.description)}</p>
        <ul>${data.features.map(f => `<li><strong>${escapeHtml(f.title)}:</strong> ${escapeHtml(f.text)}</li>`).join('')}</ul>
      </section>
      <section>
        <h2>How to ${escapeHtml(tool.name)} in 3 Steps</h2>
        <ol>${data.steps.map(s => `<li><strong>${escapeHtml(s.title)}:</strong> ${escapeHtml(s.text)}</li>`).join('')}</ol>
      </section>
      <section>
        <h2>Frequently Asked Questions</h2>
        ${data.faqs.map(f => `<h3>${escapeHtml(f.question)}</h3><p>${escapeHtml(f.answer)}</p>`).join('')}
      </section>
    `;
    writeRouteFile(tool.path, buildRouteHtml(template, tool.path, {
      title: `${data.title} | SealPDF`,
      description: data.description,
      keywords: tool.kw
    }, schema, body));
    count++;
  }

  // 3. Guides Index
  const guidesSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `${SITE_URL}/guides#collection`,
        name: 'SealPDF Guides & Technical Resources',
        url: `${SITE_URL}/guides`,
        description: 'Educational articles, guides, and tutorials on managing, optimizing, and protecting PDF files securely.'
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Guides', item: `${SITE_URL}/guides` }
        ]
      }
    ]
  };
  const guidesBody = `
    <h1>PDF Guides, Optimization Tips &amp; Security Insights</h1>
    <p>Master your digital workflows. In-depth technical articles on document formats, data compliance, security parameters, and compression mechanics.</p>
    <ul>${guidesData.map(g => `<li><a href="/guides/${g.slug}"><strong>${escapeHtml(g.title)}</strong></a> — ${escapeHtml(g.excerpt)}</li>`).join('')}</ul>
  `;
  writeRouteFile('/guides', buildRouteHtml(template, '/guides', {
    title: 'Guides & Resources | SealPDF',
    description: 'Read our expert-written, comprehensive PDF guides. Learn about password protection, document watermarks, compression efficiency, layout integrity, and GDPR compliance.',
    keywords: 'PDF guides, how-to PDF, password protect guide, compress PDF guide, document safety, GDPR compliance PDF'
  }, guidesSchema, guidesBody));
  count++;

  // 4. Individual Guide Pages
  for (const guide of guidesData) {
    const routePath = `/guides/${guide.slug}`;
    const url = `${SITE_URL}${routePath}`;
    const schema = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'TechArticle',
          '@id': `${url}#article`,
          headline: guide.title,
          description: guide.description,
          image: `${SITE_URL}/logo.png`,
          author: { '@type': 'Organization', name: 'SealPDF' },
          publisher: {
            '@type': 'Organization',
            name: 'SealPDF',
            logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo.png` }
          },
          datePublished: '2026-07-21T00:00:00Z',
          dateModified: '2026-11-25T00:00:00Z',
          mainEntityOfPage: url
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
            { '@type': 'ListItem', position: 2, name: 'Guides', item: `${SITE_URL}/guides` },
            { '@type': 'ListItem', position: 3, name: guide.title, item: url }
          ]
        }
      ]
    };
    const articleHtml = guide.content.map(b => {
      if (b.type === 'heading') return `<h2>${escapeHtml(b.text)}</h2>`;
      if (b.type === 'paragraph') return `<p>${b.text}</p>`;
      if (b.type === 'list') return `<ul>${b.items.map(i => `<li>${i}</li>`).join('')}</ul>`;
      if (b.type === 'callout') return `<blockquote>${escapeHtml(b.text)}</blockquote>`;
      if (b.type === 'link') return `<p><a href="${b.path}">${escapeHtml(b.text)}</a></p>`;
      return '';
    }).join('');
    const guideBody = `
      <nav aria-label="Breadcrumb"><a href="/">Home</a> / <a href="/guides">Guides</a> / <span>${escapeHtml(guide.title)}</span></nav>
      <article>
        <h1>${escapeHtml(guide.title)}</h1>
        <p>${escapeHtml(guide.excerpt)}</p>
        ${articleHtml}
      </article>
    `;
    writeRouteFile(routePath, buildRouteHtml(template, routePath, {
      title: `${guide.title} | SealPDF Guides`,
      description: guide.description,
      keywords: guide.keywords,
      ogType: 'article'
    }, schema, guideBody));
    count++;
  }

  // 5. Static info pages
  const staticPages = [
    {
      path: '/help',
      title: 'Help & Support Center | SealPDF',
      description: 'Get answers to frequently asked questions about SealPDF file processing security, GDPR compliance, and tools support.',
      keywords: 'help center, FAQ, support, PDF processing, local browser processing, GDPR FAQ, SealPDF support',
      h1: 'SealPDF Help & Support Center',
      body: '<p>Find answers about browser-based PDF processing, GDPR compliance, file limits, and troubleshooting.</p>'
    },
    {
      path: '/about',
      title: 'About Us | SealPDF',
      description: 'Learn more about SealPDF, our mission, values, and how we build secure, browser-based tools to simplify your PDF workflow.',
      keywords: 'about us, PDF toolkit story, free PDF mission, SealPDF',
      h1: 'About SealPDF',
      body: '<p>SealPDF builds fast, privacy-first PDF utilities that run directly in your browser using WebAssembly.</p>'
    },
    {
      path: '/contact',
      title: 'Contact Us | SealPDF',
      description: 'Get in touch with the SealPDF team for support, feature requests, or general inquiries.',
      keywords: 'contact, support, feedback, PDF tool help, SealPDF',
      h1: 'Contact SealPDF',
      body: '<p>Reach out to the SealPDF team for support, feedback, or partnership inquiries.</p>'
    },
    {
      path: '/privacy',
      title: 'Privacy Policy | SealPDF',
      description: 'Read our privacy policy to understand how we protect your files and personal information. Complete local browser safety.',
      keywords: 'privacy policy, data security, PDF privacy, SealPDF',
      h1: 'Privacy Policy',
      body: '<p>Your files are processed locally in your browser whenever possible and are never stored permanently.</p>'
    },
    {
      path: '/terms',
      title: 'Terms of Service | SealPDF',
      description: 'Read the SealPDF Terms of Service. Understand our usage conditions and security commitments.',
      keywords: 'terms of service, user agreement, PDF tools terms, SealPDF',
      h1: 'Terms of Service',
      body: '<p>Review the terms and conditions for using SealPDF online document utilities.</p>'
    }
  ];

  for (const page of staticPages) {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: page.title,
      url: `${SITE_URL}${page.path}`,
      description: page.description
    };
    writeRouteFile(page.path, buildRouteHtml(template, page.path, page, schema, `<h1>${escapeHtml(page.h1)}</h1>${page.body}`));
    count++;
  }

  console.log(`Prerendered ${count} static SEO routes into dist/`);
}

main();
