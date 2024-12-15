import Head from 'next/head'
import Image from 'next/image'
import Model from '../components/voxel-model'
import NoSsr from '../components/no-ssr'
import NextLink from 'next/link'

const Home = ( ) => {
  return (
    <div>
      <Head>
        <title>Homepage</title>
        <meta name="description" content="disy's homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header id='Navbar' className='flex sticky z-50'>
        <div id='logo-position' className='fixed m-8 opacity-100 ease-in-out duration-150 hover:opacity-75'>
          <div id='Logo' className='cursor-pointer overflow-hidden'>
            <NextLink href="/#">
              <Image src="/favicon.png" width={50} height={50} />
            </NextLink>
          </div>
        </div>
        <div id='buttons-position' className='mt-10'>
          <div id='buttons'>
              <NextLink href="/works">
                <a className='group outline outline-offset-0 outline-1 outline-white/30 fixed cursor-pointer inline-block overflow-hidden bg-transparent px-5 py-2.5 font-[Nunito] font-semibold text-xs text-center text-slate-50 right-[217.5px] scale-[0.9]'>
                  <span className="absolute top-0 left-0 mb-0 flex h-0 w-full translate-y-0 transform bg-white opacity-100 transition-all duration-200 ease-out group-hover:h-full"></span>
                  <span className="relative group-hover:text-black">WORKS</span>
                </a>
              </NextLink>
              <NextLink href="/social">
                <a className='group outline outline-offset-0 outline-1 outline-white/30 fixed cursor-pointer inline-block overflow-hidden bg-transparent px-5 py-2.5 font-[Nunito] font-semibold text-xs text-center text-slate-50 right-[137px] scale-[0.9]'>
                  <span className="absolute top-0 left-0 mb-0 flex h-0 w-full translate-y-0 transform bg-white opacity-100 transition-all duration-200 ease-out group-hover:h-full"></span>
                  <span className="relative group-hover:text-black">SOCIAL</span>
                </a>
              </NextLink>
              <NextLink href="/about">
                <a className='group outline outline-offset-0 outline-1 outline-white/30 fixed cursor-pointer inline-block overflow-hidden bg-transparent px-5 py-2.5 font-[Nunito] font-semibold text-xs text-center text-slate-50 right-10 scale-[0.9]'>
                  <span className="absolute top-0 left-0 mb-0 flex h-0 w-full translate-y-0 transform bg-white opacity-100 transition-all duration-200 ease-out group-hover:h-full"></span>
                  <span className="relative group-hover:text-black">ABOUTME</span>
                </a>
              </NextLink>
            </div>  
          </div>
      </header>

      <div className='bottom-10 right-10'>
        <NoSsr>
            <Model />
        </NoSsr>
      </div>

      <footer>
        <a className='absolute font-sans bottom-12 right-[912px] tracking-tight pointer-events-none text-neutral-800'>
          <span>© Khoi Nguyen</span>
        </a>
      </footer>

    </div>
  )
}

export default Home