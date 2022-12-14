import React, { useState, useRef, useEffect } from 'react';
import { useInView } from 'framer-motion';

export default function ProgressBar({ endProgresBarValue, progresBarTitle }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  // state for progresBarValue
  const [progresBarValue, setProgresBarValue] = useState(0);

  // increase the progresBarValue to endProgresBarValue when the element is in the viewport (useInView)

  useEffect(() => {
    const endProgresValue = endProgresBarValue;
    if (isInView) {
      const timer = setInterval(() => {
        if (progresBarValue < endProgresValue) {
          setProgresBarValue(progresBarValue + 1);
        }
      }, 15);
      return () => clearInterval(timer);
    }
  }, [isInView, progresBarValue, endProgresBarValue]);

  return (
    <>
      <div ref={ref}>
        <div className='p-4 shadow-xl bg-slate-100 '>
          <div className='flex justify-between '>
            <div className='text-base tracking-wide card-title'>
              {progresBarTitle}
            </div>
            <div className='text-base tracking-wide card-title'>
              {progresBarValue} %
            </div>
          </div>

          <progress
            className='progress'
            value={progresBarValue}
            max='100'
          ></progress>
        </div>
      </div>
    </>
  );
}
