import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

const AccordionImprint = ({ question, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div>
      <AnimatePresence>
        <div className='flex items-center justify-center'>
          <motion.div
            key='question'
            className='text-lg rounded-none shadow-md shadow-black/20 btn btn-wide hover:text-white hover:bg-gray-600'
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className=''>IMPRINT - Privacy Policy</div>
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
