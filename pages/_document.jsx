import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Bruno - Full Stack Developer</title>
        <meta
          name="description"
          content="Full Stack Developer - Specialties Ruby on Rails, HTML, CSS, JavaScript, ReactJS and PostgreSQL"
        />
        <meta name="robots" content="noodp" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Bruno - Full Stack Developer" />
        <meta
          property="og:description"
          content="Full Stack Developer - Specialties Ruby on Rails, HTML, CSS, JavaScript, ReactJS and PostgreSQL"
        />
        <meta property="og:site_name" content="Bruno - Full Stack Developer" />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:description"
          content="Full Stack Developer - Specialties Ruby on Rails, HTML, CSS, JavaScript, ReactJS and PostgreSQL"
        />
        <meta name="twitter:title" content="Bruno - Full Stack Developer" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
          integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
          crossorigin=""
        />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
        <title>Portfolio App</title>
      </Head>
      <body>
        <Main />
        <NextScript />
        <script
          type="text/javascript"
          src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"
        ></script>
        <Script type="text/javascript">
          (function(){emailjs.init('cTwOxaU2kVqzmEP2i')})();
        </Script>
        {/* <!-- Google tag (gtag.js) --> */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-F0RXS6T56G"
        />
        <Script>
          window.dataLayer = window.dataLayer || []; function gtag()
          {dataLayer.push(arguments)}
          gtag('js', new Date()); gtag('config', 'G-F0RXS6T56G');
        </Script>
      </body>
    </Html>
  )
}
