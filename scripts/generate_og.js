const sharp = require('sharp');
const path = require('path');

async function createOg() {
  const width = 1200;
  const height = 630;

  const bg = await sharp({
    create: {
      width,
      height,
      channels: 4,
      background: { r: 10, g: 10, b: 12, alpha: 1 }
    }
  }).png().toBuffer();

  const photo = await sharp('public/assets/equipe-editorial.jpg')
    .resize(600, 630, { fit: 'cover', position: 'top' })
    .toBuffer();

  const logo = await sharp('public/logo-BX.png')
    .resize({ height: 80 })
    .toBuffer();

  const svgText = Buffer.from(`
    <svg width="600" height="630" xmlns="http://www.w3.org/2000/svg">
      <text x="60" y="270" font-family="'Plus Jakarta Sans', Arial, sans-serif" font-size="38" font-weight="300" fill="#F3F0E8">Estratégia jurídica</text>
      <text x="60" y="320" font-family="'Plus Jakarta Sans', Arial, sans-serif" font-size="38" font-weight="300" fill="#F3F0E8">para proteger patrimônio</text>
      <text x="60" y="370" font-family="'Plus Jakarta Sans', Arial, sans-serif" font-size="38" font-weight="300" fill="#D1C0A0" font-style="italic">e reorganizar dívidas.</text>
      <text x="60" y="430" font-family="'Plus Jakarta Sans', Arial, sans-serif" font-size="16" font-weight="300" fill="#9D9D96">Direito Bancário • Dívidas Empresariais • Agronegócio</text>
      <text x="60" y="470" font-family="'Plus Jakarta Sans', Arial, sans-serif" font-size="13" font-weight="400" fill="#B49A67" letter-spacing="3">MONTES CLAROS – MG • ATUAÇÃO NACIONAL</text>
    </svg>
  `);

  const gradientFade = Buffer.from(`
    <svg width="600" height="630" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="fade" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#0A0A0C" stop-opacity="1"/>
          <stop offset="30%" stop-color="#0A0A0C" stop-opacity="0.6"/>
          <stop offset="100%" stop-color="#0A0A0C" stop-opacity="0"/>
        </linearGradient>
      </defs>
      <rect width="600" height="630" fill="url(#fade)"/>
    </svg>
  `);

  await sharp(bg)
    .composite([
      { input: photo, top: 0, left: 600 },
      { input: gradientFade, top: 0, left: 600 },
      { input: logo, top: 60, left: 60 },
      { input: svgText, top: 0, left: 0 }
    ])
    .jpeg({ quality: 92 })
    .toFile('public/og-image.jpg');

  console.log('OG image created successfully at public/og-image.jpg');
}

createOg().catch(console.error);
