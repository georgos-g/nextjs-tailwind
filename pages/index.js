import Head from 'next/head';
import Services from './Services';
import About from './About';
import Contact from './Contact';

export default function Home() {
  return (
    <>
      {/* add a responsive fullscreen bg-img to section */}
      <Head>
        <title>Home</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <section id='home'>
        <div className='relative  bg-gradient-to-tl from-gray-900 to-gray-600  w-full h-full -z-10'>
          <img
            src='img/hero_bg.jpg'
            className='absolute object-cover h-full w-full mix-blend-overlay'
          />
          <div className='h-screen flex flex-col justify-center items-center'>
            <h2 className='drop-shadow-lg shadow-slate-100 font-openSansLight text-center text-1xl tracking-[3px] text-gray-400'>
              JUNIOR FRONTEND DEVELOPER | MEDIA DESIGNER
              <h1 className='font-montserratBold  text-[3.5em] tracking-[9px] text-gray-100'>
                GEORGOS GAKIS
              </h1>
            </h2>
          </div>
        </div>
      </section>
      <About />
      <Services />
      <Contact />
    </>
  );
}
