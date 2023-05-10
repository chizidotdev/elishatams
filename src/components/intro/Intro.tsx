import { AnimationControls, motion } from 'framer-motion';
import React from 'react';
import { defaultTransition, variants } from 'src/utils/framerAnimations';

interface IntroProps {
  title: string;
  loaderControls: AnimationControls;
}

const IntroLoader = ({ title, loaderControls }: IntroProps) => {
  return (
    <motion.div className='intro-container' animate={loaderControls}>
      <motion.h1
        variants={variants}
        initial={'initial'}
        animate={'animate'}
        transition={defaultTransition}
      >
        {title}
      </motion.h1>
    </motion.div>
  );
};

export default IntroLoader;
