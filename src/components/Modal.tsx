import React from 'react';
import { motion } from 'framer-motion';

interface ModalProps {
  selected: string | null;
  setSelected: React.Dispatch<React.SetStateAction<string | null>>;
}

const ImageLink: React.FC<ModalProps> = ({ selected, setSelected }) => {
  if (!selected) return null;

  return (
    <div onClick={() => setSelected(null)} className='modal'>
      <div className='modal__image-container'>
        <motion.img
          className='gallery__image-link-item'
          src={selected}
          layoutId={`gallery-container-${selected}`}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    </div>
  );
};

export default ImageLink;

