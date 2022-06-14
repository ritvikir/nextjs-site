import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (

<div className=" grid justify-center mt-40">
  <div className="relative">
    <div className="absolute -inset-0.5 bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-400 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt" />
    <div className="max-w-sm relative px-7 py-4 bg-gray-900 rounded-3xl">
      <div className="flex justify-center pt-10 pb-4">
        <Image src="/ritvik.jpg" className='rounded-full w-1/2' width="150" height="150"></Image>
      </div>

      <div className="px-2 py-4">
        <div className="font-bold text-4xl text-slate-300 my-2">Ritvik Irigireddy</div>
      <div>
               <p className="font-semibold text-base pt-2 pb-4 text-slate-300">

      Currently still working on this site ... more coming soon!

        </p>

        <a className="underline underline-offset-2 mr-4 text-slate-300" href="https://github.com/ritvikir">GitHub</a>
        <a className="underline underline-offset-2 text-slate-300" href="mailto:ririgireddy1@gmail.com">Email</a>


 
 
      </div>
      <p className="font-semibold text-xs pt-8 text-slate-300">
        Built with Next.js & TailwindCSS
      </p>
 
    </div>
  </div>
</div>    
</div>

  )
}

export default Home
