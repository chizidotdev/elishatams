import { onMount } from 'solid-js';
// import parser from 'ua-parser-js';

const Cursor = () => {
  let cursorContainer: HTMLDivElement | undefined;
  let secondaryCursor: HTMLDivElement | undefined;

  onMount(() => {
    // if (parser().device.type === 'mobile' && cursorContainer) {
    //   cursorContainer.style.display = 'none';
    // }

    window.addEventListener('mousemove', (event) => {
      if (!secondaryCursor) return;
      const { clientX, clientY } = event;

      const mouseX = clientX - secondaryCursor.offsetWidth / 2;
      const mouseY = clientY - secondaryCursor.offsetHeight / 2;

      const interactable = (event.target as Element).closest(
        '.gallery__image-link-item'
      );
      const interacting = interactable !== null;

      const keyframes = {
        //transform: `translate(${mouseX}px, ${mouseY}px)`
        transform: `translate(${mouseX}px, ${mouseY}px) scale(${
          interacting ? 5 : 1
        }`,
      };

      secondaryCursor.animate(keyframes, {
        duration: 800,
        fill: 'forwards',
      });
    });
  });

  return (
    <div id="custom-cursor" ref={cursorContainer}>
      <div class="secondary-cursor" ref={secondaryCursor} />
    </div>
  );
};

export default Cursor;
