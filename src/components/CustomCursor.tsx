import React, { useEffect, useRef } from 'react';
import parser from 'ua-parser-js';

const CustomCursor = () => {
  const cursorContainer = useRef<HTMLDivElement | null>(null);
  const secondaryCursor = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (parser().device.type === 'mobile' && cursorContainer.current) {
      cursorContainer.current.style.display = 'none';
    }

    window.addEventListener('mousemove', (event) => {
      if (!secondaryCursor.current) return;
      const { clientX, clientY } = event;

      const mouseX = clientX - secondaryCursor.current?.offsetWidth / 2;
      const mouseY = clientY - secondaryCursor.current?.offsetHeight / 2;

     const interactable = (event.target as Element).closest('img');
     const interacting = interactable !== null;
      
      const keyframes = {
        //transform: `translate(${mouseX}px, ${mouseY}px)`
        transform: `translate(${mouseX}px, ${mouseY}px) scale(${interacting ? 3 : 1}`
      }

      secondaryCursor.current.animate(keyframes, {
        duration: 800,
        fill: 'forwards',
      });
    });
  }, []);

  return (
    <div id='custom-cursor' ref={cursorContainer} >
      <div className='secondary-cursor' ref={secondaryCursor} />
    </div>
  );
};

export default CustomCursor;
