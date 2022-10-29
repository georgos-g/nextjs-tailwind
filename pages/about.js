import Image from 'next/future/image';
import MoveUp from '../components/MoveUp';
import SocialIcons from '../components/SocialIcons';

export default function About() {
  return (
    <section
      id='about'
      className='flex bg-gray-400/60 xl:h-screen xl:items-center'
    >
      {/* Card Wrap  */}
      <div className='container flex flex-wrap-reverse justify-center mx-auto sm:flex-wrap sm:py-28 '>
        {/* Photo and description*/}
        <div className='relative md:shadow-xl'>
          <div className='xs:w-[460px] h-[600px] bg-slate-200 shadow-xl'>
            <Image
              width={400}
              height={700}
              src='/img/gg_no-bg.png'
              alt='Georgos Gakis'
              className='object-cover w-full h-full'
            />
          </div>
          <div className='absolute bottom-0 left-0 w-full h-auto p-6 xs:p-8 txt_header bg-slate-100 '>
            <h3 className=' txt_header'>Georgos Gakis</h3>
            <p className='txt_sub_header'>WEB DEVELOPER</p>
          </div>
        </div>
        {/* Text and Icons Wrapper */}
        <div className='flex flex-col justify-between xs:max-w-[460px] md:shadow-xl p-6 pt-10 xs:p-10 xs:pb-4 bg-slate-100 xl:max-w-[600px]'>
          {/* text */}
          <div>
            <h2 className='pb-6 project_title'>ABOUT ME</h2>
            <p className='mb-4 text-base sm:text-lg font-openSansLight'>
              I am a web developer with an artistic background. During my
              long-term activity in the event business I was involved in
              numerous projects as media, web and music producer.
              <br />
              <br />
              My passion: combining technology and art performances.
              <br />
              I'm a very positive person, problem solver with high attention to
              detail.
              <br />
              Fan of dancing, bicycling, TV series and mediterranean food.
              <br />A family person and father of two special girls.
              <br />
              <br />I am looking forward to working as a developer in a pleasant
              working environment, realizing projects, learning new technologies
              and developing my coding skills.
            </p>
          </div>
          {/* social icons */}
          <div className='grid content-end w-20'>
            <MoveUp>
              <SocialIcons />
            </MoveUp>
          </div>
        </div>
      </div>
    </section>
  );
}
