import React from 'react';
import BgImgFull from '../components/BgImgFull';

export default function StyleTest() {
  return (
    <div className='relative_ '>
      <BgImgFull background='/img/hero_bg.jpg' as='image'>
        <div className='absolute inset-0 flex items-center justify-center mb-20 xl:pl-10'>
          <div className=' text-center relative flex flex-col h-[160px] max-w-[750px] px-14 py-6 items-center justify-center border-2 border-yellow-500 mb-28 bg-black bg-opacity-60 text-white'>
            <div
              className='absolute -top-5 sm:px-4 h-[30px] flex items-center justify-center '
              style={{ backdropFilter: 'blur(10px)' }}
            >
              <p className='text-[10px] xs:text-[12px] sm:text-[13px]text-center font-bold text-white'>
                EGAL, OB DU HILFSKRÄFTE, EXPERTEN ODER FÜHRUNGSKRÄFTE SUCHST:
              </p>
            </div>
            <p className='mb-4 text-sm'>
              Im kostenlosen{' '}
              <span className='font-bold'>RECRUITING-CRASH-KURS</span> zeigen
              wir Dir 1:1 umsetzbare Lösungsansätze auf, die wirklich
              <span className='font-bold'> funktionieren.</span>
            </p>
            <button className='absolute transform translate-x-1/2 right-1/2 bottom-0 mb-[-26px] px-8 py-4 font-bold text-[12px] text-black bg-yellow-500'>
              JETZT KOSTENLOSES TICKET SICHERN!
            </button>
          </div>
        </div>
      </BgImgFull>
    </div>
  );
}
