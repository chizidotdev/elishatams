import { useAnimation, useMotionValue, useSpring } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import Header from 'src/components/gallery/Header';
import ImageLink from 'src/components/ImageLink';
import { motion } from 'framer-motion';
import { defaultTransition } from 'src/utils/framerAnimations';
import { portraits } from 'src/utils/data';
import { shuffle } from 'src/utils/shuffleArray';
import IntroLoader from 'src/components/intro/Intro';
import Modal from 'src/components/Modal';

export interface Datatype {
  cover: string;
  title: string;
  color: string;
  slug: string;
}

const gridUtils = [600, 400, 700, 600, 900];

const Gallery = () => {
  const [gridVisible, setGridVisible] = useState(true);
  const [shuffledData, setShuffledData] = useState(portraits);
  const [selectedImage, setSelectedImage] = useState<string | null>('');
  const gridRef = useRef<HTMLDivElement | null>(null);

  const gridAnimation = useAnimation();

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    sequence();

    setShuffledData(shuffle(portraits));
  }, []);

  const loaderControls = useAnimation();

  useEffect(() => {
    setTimeout(() => {
      loaderControls.start({
        opacity: 0,
        transition: defaultTransition,
      });
    }, 3500);
  }, []);

  async function sequence() {
    gridAnimation.set((index) => ({
      y: gridUtils[index % 5],
      scale: 1.1,
    }));

    await gridAnimation.start({
      y: 0,
      transition: { ...defaultTransition, duration: 1.6, delay: 3 },
    });

    await gridAnimation.start({
      scale: 1,
      transition: defaultTransition,
    });

    setGridVisible(false);
  }

  const handleGridParallax = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (gridRef.current) {
      const speed = -20;
      const { width, height } = gridRef.current.getBoundingClientRect();
      const offsetX = event.pageX - width * 0.5;
      const offsetY = event.pageY - height * 0.5;

      const newTransformX = (offsetX * speed) / 50;
      const newTransformY = (offsetY * speed) / 50;

      x.set(newTransformX);
      y.set(newTransformY);
    }
  };

  const xMotion = useSpring(x, { stiffness: 400, damping: 90 });
  const yMotion = useSpring(y, { stiffness: 400, damping: 90 });

  return (
    <>
      <IntroLoader title='Gallery.' loaderControls={loaderControls} />
      <Modal selected={selectedImage} setSelected={setSelectedImage} />

      <div data-scroll-section className='gallery'>
        <Header view={gridVisible} toggleView={setGridVisible} />
        <div className='gallery__content'>
          {gridVisible && (
            <div data-scroll-container className='gallery__grid-container'>
              <motion.div
                className='gallery__grid-elements'
                ref={gridRef}
                onMouseMove={handleGridParallax}
                transition={defaultTransition}
                style={{ x: xMotion, y: yMotion }}
              >
                {shuffledData.map((element, index) => (
                  <motion.div
                    key={index}
                    animate={gridAnimation}
                    custom={index}
                    className='element'
                  >
                    <div className='thumbnail-wrapper'>
                      <ImageLink path={element} index={index} setSelected={setSelectedImage} />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          )}

          {!gridVisible && (
            <div className='gallery__list-elements' data-scroll-section>
              {shuffledData.map((element, index) => (
                <div key={index} className='element'>
                  <ImageLink path={element} index={index} setSelected={setSelectedImage} /> 
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Gallery;
