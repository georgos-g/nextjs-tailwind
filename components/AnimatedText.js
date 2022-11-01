import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import MoveAnimatedText from './MoveAnimatedText';

export default function AnimatedText() {
  const [titleTypewriter, count] = useTypewriter({
    words: [
      '(JUNIOR) FRONTEND DEVELOPER',
      'WEB DESIGNER',
      'MEDIA DESIGNER',
      // 'PALOMAS BABAKA',
      // 'AMALIAS BABAKA',
      // 'HALLO FREUNDE',
      // 'WILLKOMMEN',
    ],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 30,
    delaySpeed: 1000,
  });

  return (
    <>
      <div className='z-10'>
        <h2 className='drop-shadow-lg shadow-slate-100 font-openSansLight text-left  text-gray-400 text-[1em] md:text-[1.4em] tracking-[3px]'>
          <MoveAnimatedText delay={0}>Hello, I&apos;m</MoveAnimatedText>
        </h2>
        <h1 className='font-montserratBold text-[2em] md:text-[3em] tracking-[9px] text-gray-100 max-w-[300px]'>
          <MoveAnimatedText delay={1}>GEORGOS</MoveAnimatedText>
        </h1>
        <MoveAnimatedText delay={1.5}>
          <h2 className='drop-shadow-lg text-gray-300 shadow-slate-100 font-openSansLight text-left text-[1em] md:text-[1.2em] tracking-[3px]'>
            <span>{titleTypewriter}</span>_
            <Cursor cursorColor='gray' />
          </h2>
        </MoveAnimatedText>
      </div>
    </>
  );
}
