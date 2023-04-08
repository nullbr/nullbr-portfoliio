import Head from 'next/head'
import Layout, { siteTitle } from '../components/Layout'
import GlobalContext from '../context'

export default function Home() {
  return (
    <GlobalContext>
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section>
          <p>Full Stack Developer</p>
          <p>
            (This is a sample website - you’ll be building a site like this on{' '}
            <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
          </p>
        </section>
      </Layout>
    </GlobalContext>
  )
}
