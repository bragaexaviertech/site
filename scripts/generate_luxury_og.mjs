import sharp from 'sharp'
import path from 'path'
import fs from 'fs'

async function generateLuxuryOg() {
  const width = 1200
  const height = 630

  // 1. Fundo escuro luxuoso (#0A0A0C)
  const bg = await sharp({
    create: {
      width,
      height,
      channels: 4,
      background: { r: 10, g: 10, b: 12, alpha: 1 },
    },
  })
    .png()
    .toBuffer()

  // 2. Foto dos Sócios cortada na direita (620x630)
  const photo = await sharp('public/assets/equipe-escritorio.webp')
    .resize(620, 630, { fit: 'cover', position: 'top' })
    .toBuffer()

  // 3. Logo Oficial dourada
  const logo = await sharp('public/logo-BX.png')
    .resize({ height: 75 })
    .toBuffer()

  // 4. Degradê suave da esquerda para a direita para fundir a foto
  const gradientFade = Buffer.from(`
    <svg width="620" height="630" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="fade" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#0A0A0C" stop-opacity="1"/>
          <stop offset="35%" stop-color="#0A0A0C" stop-opacity="0.6"/>
          <stop offset="100%" stop-color="#0A0A0C" stop-opacity="0"/>
        </linearGradient>
        <linearGradient id="topFade" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#0A0A0C" stop-opacity="0.4"/>
          <stop offset="25%" stop-color="#0A0A0C" stop-opacity="0"/>
          <stop offset="80%" stop-color="#0A0A0C" stop-opacity="0"/>
          <stop offset="100%" stop-color="#0A0A0C" stop-opacity="0.6"/>
        </linearGradient>
      </defs>
      <rect width="620" height="630" fill="url(#fade)"/>
      <rect width="620" height="630" fill="url(#topFade)"/>
    </svg>
  `)

  // 5. Textos e elementos gráficos editoriais
  const svgText = Buffer.from(`
    <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
      <!-- Glow dourado no canto esquerdo -->
      <defs>
        <radialGradient id="glow" cx="20%" cy="30%" r="50%">
          <stop offset="0%" stop-color="#C5A059" stop-opacity="0.15"/>
          <stop offset="100%" stop-color="#0A0A0C" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <rect width="700" height="630" fill="url(#glow)"/>

      <!-- Linha Dourada de Acento -->
      <rect x="70" y="160" width="45" height="3" fill="#C5A059"/>

      <!-- Eyebrow -->
      <text x="70" y="195" font-family="'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="13" font-weight="600" fill="#C5A059" letter-spacing="4">BOUTIQUE JURÍDICA • SÓCIOS FUNDADORES</text>

      <!-- Headline Principal -->
      <text x="70" y="255" font-family="'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="42" font-weight="300" fill="#F4EFE6" letter-spacing="-0.5">Defesa Estratégica em</text>
      <text x="70" y="310" font-family="'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="42" font-weight="600" fill="#C5A059" letter-spacing="-0.5">Dívidas Bancárias &amp; Safra</text>

      <!-- Subtítulo / Descrição -->
      <text x="70" y="375" font-family="'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="18" font-weight="300" fill="#CFCABF">Proteção patrimonial de empresas, sócios avalistas</text>
      <text x="70" y="405" font-family="'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="18" font-weight="300" fill="#CFCABF">e produtores rurais em todo o Brasil.</text>

      <!-- Linha divisória fina -->
      <line x1="70" y1="450" x2="580" y2="450" stroke="#333333" stroke-width="1"/>

      <!-- Áreas de Atuação e Badges -->
      <text x="70" y="490" font-family="'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="14" font-weight="500" fill="#E8D8B8" letter-spacing="1.5">DIREITO BANCÁRIO  •  CRÉDITO RURAL  •  PASSIVOS PJ</text>
      <text x="70" y="535" font-family="'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="12" font-weight="400" fill="#888888" letter-spacing="2">MONTES CLAROS – MG  •  ATUAÇÃO EM TODO O PAÍS</text>

      <!-- Selo Especial -->
      <rect x="70" y="565" width="230" height="28" rx="4" fill="#151E17" stroke="#C5A059" stroke-width="1" stroke-opacity="0.4"/>
      <text x="85" y="583" font-family="'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="10.5" font-weight="600" fill="#C5A059" letter-spacing="2">100% DEFESA DO DEVEDOR</text>
    </svg>
  `)

  const finalImage = await sharp(bg)
    .composite([
      { input: photo, top: 0, left: 580 },
      { input: gradientFade, top: 0, left: 580 },
      { input: logo, top: 60, left: 70 },
      { input: svgText, top: 0, left: 0 },
    ])
    .jpeg({ quality: 95 })
    .toBuffer()

  fs.writeFileSync('public/og-image.jpg', finalImage)
  fs.writeFileSync('public/og-image.png', finalImage)
  fs.writeFileSync('app/opengraph-image.jpg', finalImage)
  fs.writeFileSync('app/twitter-image.jpg', finalImage)

  console.log('✓ Imagens Open Graph criadas com sucesso em public/ e app/!')
}

generateLuxuryOg().catch(console.error)
