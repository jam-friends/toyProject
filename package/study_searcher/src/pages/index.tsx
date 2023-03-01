import Head from 'next/head'
import Image from 'next/image'

import { Inter } from 'next/font/google'

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>{' '}
      <ExampleComponentCSS>fdsfdsfdsfds</ExampleComponentCSS>
      <ExampleComponentCSS2>fdsfdsfdsfds</ExampleComponentCSS2>
    </>
  )
}

const ExampleComponentCSS = styled.div`
  color: red;
`
const ExampleComponentCSS2 = tw.div`
bg-amber-50
`
