import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />

        {/* Email JS */}
        <Script
          async
          src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"
        />
        <Script
          onLoad={() => {
            ;(function () {
              emailjs.init('cTwOxaU2kVqzmEP2i')
            })()
          }}
        />

        {/* <!-- Google tag (gtag.js) --> */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-F0RXS6T56G"
        />
        <Script
          onLoad={() => {
            window.dataLayer = window.dataLayer || []
            function gtag() {
              dataLayer.push(arguments)
            }
            gtag('js', new Date())
            gtag('config', 'G-F0RXS6T56G')
          }}
        />
      </body>
    </Html>
  )
}
