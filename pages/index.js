import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Publisher Privacy Policy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Publisher Privacy Policy" />
        <p className="description">
          We do not collect any data from the users
          You may NOT edit/copy/change/modify/publish our code/project/plugin without our permission</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
