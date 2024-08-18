import Image from 'next/image';

const BgImgFull = ({ children, background, greyScale, greyScale50, alt }) => {
  return (
    <div className='relative'>
      <div className='w-full sm:h-full bg-gradient-to-tl from-yellow-900 to-gray-900'>
        <Image
          width={1920}
          height={1080}
          src={background}
          // if alt exists, use it, otherwise use "background image"
          alt={alt ? alt : 'background image'}
          priority={true}
          className={`object-cover w-full h-screen mix-blend-overlay
          ${greyScale ? 'grayscale' : ''} 
          ${greyScale50 ? 'grayscale-[50%]' : ''}
          
          `}
          as='image'
          // sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, (max-width: 1920px) 33vw, 1920px'
          quality={90}
        />
        {children}
      </div>
    </div>
  );
};

export default BgImgFull;
