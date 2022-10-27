import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AccordionImprint = ({ question, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div>
      <AnimatePresence>
        <div className='flex items-center justify-center'>
          <motion.div
            key='question'
            //   className='relative z-20 px-1 py-2 bg-blue-200 border-l-2 border-yellow-500 shadow-sm cursor-pointer rounded-tr-md rounded-br-md font-open'
            className=' text-lg rounded-none btn w-[340px]'
            onClick={() => setIsOpen(!isOpen)}
          >
            <motion.div className='ml-1 font-bold text-slate-50'>
              IMPRINT - Privacy Policy
            </motion.div>
          </motion.div>
        </div>

        {isOpen && (
          <motion.div
            key='content'
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                duration: 0.5,
              },
            }}
            exit={{ opacity: 0 }}
            className='p-2 text-lg text-gray-700'
          >
            {content}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default AccordionImprint;
