import Head from 'next/head'
import { Inter } from 'next/font/google'
import Header from '../components/header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Carrinho</title>
        <meta name="description" content="Carrinho next js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className='container p-2'>
        <h1>
          Carrinho
        </h1>
      </main>
    </>
  )
}
