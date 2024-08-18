import AccordionImprint from '../components/AccordionImprint';
import {
  AddressMailIcon,
  AddressMapIcon,
  AddressPhoneIcon,
} from '../components/Icons';
import Imprint from '../components/Imprint';

export default function Contact() {
  return (
    <section id='contact' className=''>
      <div className='flex flex-col justify-center text-center bg-[#777] py-52'>
        <div className=''>
          <p className='px-4 text-5xl leading-snug tracking-wide font-montserratThin text-slate-50 '>
            FIND OUT WHAT I CAN DO FOR YOU
          </p>

          {/* center button  */}
          <div className='flex justify-center pt-20'>
            <button className='text-lg rounded-none shadow-md btn shadow-black/50 btn-wide hover:bg-gray-600'>
              <a
                className='uppercase text-black/70 hover:text-white'
                // base64 encoded email address
                href={`mailto:${atob('bWFpbEBnZW9yZ29zLWdha2lzLmNvbQ==')}`}
              >
                get in touch
              </a>
            </button>
          </div>
        </div>
      </div>

      {/* address wrapper */}
      <div className='bg-slate-100 '>
        <div className='container flex flex-wrap justify-center mx-auto pt-14 '>
          {/* phone */}
          <div className='flex justify-start w-[300px] md:mx-6 py-4 text-gray-500'>
            <div className='flex text-left'>
              <AddressPhoneIcon />
              <div className='pl-4'>
                <p className='section_sub_header'>PHONE</p>
                <p>+49 221 3762692</p>
              </div>
            </div>
          </div>
          {/* address */}
          <div className='flex justify-start w-[300px] md:mx-6 py-4 text-gray-500'>
            <div className='flex text-left'>
              <AddressMapIcon />
              <div className='pl-4'>
                <p className='section_sub_header'>OFFICE</p>
                <p> ROLANDSTR. 63, 50677 KÖLN</p>
              </div>
            </div>
          </div>
          {/* email */}
          <div className='flex justify-start w-[300px] md:mx-6 py-4 text-gray-500'>
            <div className='flex text-left'>
              <AddressMailIcon />
              <div className='pl-4'>
                <p className='section_sub_header'>EMAIL</p>
                <p className='uppercase'>
                  {/* base64  */}
                  {`${atob('bWFpbEBnZW9yZ29zLWdha2lzLmNvbQ==')}`}
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* imprint */}
        <div className='py-20 '>
          <AccordionImprint content={<Imprint />} />
        </div>
      </div>
    </section>
  );
}
