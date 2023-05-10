import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { defaultTransition } from 'src/utils/framerAnimations';

interface ImageProps {
  path: string;
  index: number;
  setSelected: React.Dispatch<React.SetStateAction<string | null>>
}

const ImageLink: React.FC<ImageProps> = ({ path, index, setSelected }) => {
  const initialImageSrc = `https://ik.imagekit.io/chizidotdev${path}`
  const [imageSrc, setImageSrc] = useState(`${initialImageSrc}/tr:q-1`)

  useEffect(() => {
    const image = new Image();
    image.src = initialImageSrc;
    image.onload = () => {
      setImageSrc(initialImageSrc);
    };
  }, [])

  return (
    <>
      <motion.img
        className='gallery__image-link-item gallery__img-main'
        src={imageSrc}
        layoutId={`gallery-container-${index}`}
        transition={defaultTransition}
        onClick={() => setSelected(imageSrc)}
      />
    </>
  );
};

export default ImageLink;
