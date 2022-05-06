import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/Navbar'
// import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Materia</title>
      </Head>
      <main>
        <Navbar />
      </main>
    </div>
  )
}

export default Home
