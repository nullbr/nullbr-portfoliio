import Head from 'next/head'
import Sidebar from '../Sidebar/'
import styles from './index.module.scss'

export const siteTitle = 'Bruno - Full Stack Developer'

const Layout = ({ children }) => {
  return (
    <div className="App">
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{siteTitle}</title>
        <meta
          name="description"
          content="Full Stack Developer - Specialties Ruby on Rails, HTML, CSS, JavaScript, ReactJS and PostgreSQL"
        />
        <meta name="robots" content="noodp" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={siteTitle} />
        <meta
          property="og:description"
          content="Full Stack Developer - Specialties Ruby on Rails, HTML, CSS, JavaScript, ReactJS and PostgreSQL"
        />
        <meta property="og:site_name" content={siteTitle} />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:description"
          content="Full Stack Developer - Specialties Ruby on Rails, HTML, CSS, JavaScript, ReactJS and PostgreSQL"
        />
        <meta name="twitter:title" content={siteTitle} />
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
          integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
          crossorigin=""
        />
        {/* <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" /> */}
        <title>Portfolio App</title>
      </Head>
      <Sidebar />
      <div className={styles.page}>
        {/* <span className="tags top-tags">&lt;body&gt;</span> */}

        {children}
        {/* <span className="tags bottom-tags">
          &lt;/body&gt;
          <br />
          <span className="bottom-tag-html">&lt;/html&gt;</span>
        </span> */}
      </div>
    </div>
  )
}

export default Layout
