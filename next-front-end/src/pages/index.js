import Head from 'next/head';
import dynamic from 'next/dynamic'
import React, { useState } from 'react'
import Header from '../../components/Header';
import Navigation from '../../components/Navigation';
const CodeEditor = dynamic(()=> import('../../components/CodeEditor'), {
  ssr: false
})

export default function Home() {
  const [value, setValue] = React.useState('')
  const [value2, setValue2] = React.useState('')

  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Code Genie | Home</title>
        <meta name="description" content="Use AI to optimize your code." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="flex flex-col md:flex-row flex-1">
        <div className="flex flex-1">
          <div className="md:w-3/8 flex-1">
            <div className='p-2 bg-gray-700 text-violet-400'>
              <h1 className='font-bold ml-10 text-2xl'> Input code </h1>
            </div>
            <CodeEditor value={value} setValue={setValue} />
          </div>
          <div className="">
            <Navigation />
          </div>
          <div className="md:w-3/8 flex-1">
            <div className='p-2 bg-gray-700 text-violet-400'>
              <h1 className='font-bold ml-10 text-2xl'> Optimized code </h1>
            </div>
            <CodeEditor value={value2} setValue={setValue2} />
          </div>
        </div>
      </div>
    </div>
  );
}
