import { onMount } from 'solid-js';
import parser from 'ua-parser-js';

const Cursor = () => {
  let cursorContainer: HTMLDivElement | undefined;
  let primaryCursor: HTMLDivElement | undefined;
  let secondaryCursor: HTMLDivElement | undefined;

  onMount(() => {
    if (parser().device.type === 'mobile' && cursorContainer) {
      cursorContainer.style.display = 'none';
    }

    window.addEventListener('mousemove', (event) => {
      primaryCursorHandler(event);
      secondaryCursorHandler(event);
    });
  });

  const primaryCursorHandler = (event: MouseEvent) => {
    if (!primaryCursor) return;
    const { clientX, clientY } = event;

    const mouseX = clientX - primaryCursor.offsetWidth / 2;
    const mouseY = clientY - primaryCursor.offsetHeight / 2;

    const interactable = (event.target as Element).closest('.interactable');
    const interacting = interactable !== null;
    if (interacting) {
        document.body.classList.add('is-interacting');
    }

    const keyframes = {
      transform: `translate(${mouseX}px, ${mouseY}px) scale(${
        interacting ? 7 : 1
      }`,
    };

    primaryCursor.animate(keyframes, {
      duration: 2500,
      fill: 'forwards',
    });
  };

  const secondaryCursorHandler = (event: MouseEvent) => {
    if (!secondaryCursor) return;
    const { clientX, clientY } = event;

    const mouseX = clientX - secondaryCursor.offsetWidth / 2;
    const mouseY = clientY - secondaryCursor.offsetHeight / 2;

    const interactable = (event.target as Element).closest('.interactable');
    const interacting = interactable !== null;

    const keyframes = {
      transform: `translate(${mouseX}px, ${mouseY}px)`,
      opacity: interacting ? 0 : 1,
    };

    secondaryCursor.animate(keyframes, {
      duration: 600,
      fill: 'forwards',
    });
  };

  return (
    <div id="custom-cursor" ref={cursorContainer}>
      <div class="primary-cursor" ref={primaryCursor} />
      <div class="secondary-cursor" ref={secondaryCursor} />
    </div>
  );
};

export default Cursor;
