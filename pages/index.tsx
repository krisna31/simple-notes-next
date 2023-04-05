import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <h1 className={'text-3xl font-bold underline text-lime-900' + ' ' + inter.className}>Hello World</h1>
    </>
  )
}
