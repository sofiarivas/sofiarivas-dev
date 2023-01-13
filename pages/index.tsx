import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Sofia Rivas</title>
        <meta name="description" content="👋🏼 Hi! I'm Sofia. Frontend Developer and UI Designer driven by curiosity." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container">
        <div className="text-gray-600">
          <h1 className="text-8xl">Hello, I am Sofia!</h1>
          <p className="text-lg">Frontend Developer and UI Designer driven by curiosity. I’m an eager
            learner that became passionate about building what I can create as a designer.</p>
        </div>
      </main>
    </>
  )
}
