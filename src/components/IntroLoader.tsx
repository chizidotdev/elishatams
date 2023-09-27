import { gsap } from 'gsap';
import { onMount } from 'solid-js';
import { Portal } from 'solid-js/web';

const IntroLoader = ({ title }: { title: string }) => {
  let titleRef: HTMLDivElement | undefined;
  let introRef: HTMLDivElement | undefined;

  onMount(() => {
    if (!titleRef || !introRef) return;

    gsap.set(titleRef, { y: 100, opacity: 0 });
    gsap.set('img', { scale: 1.2 });
    const timeline = gsap.timeline();
    timeline
      .to(titleRef, {
        duration: 1.25,
        y: 0,
        opacity: 1,
        ease: 'power4.inOut',
      })
      .to(titleRef, {
        duration: 1.5,
        y: '-100%',
        opacity: 0,
        ease: 'power4.inOut',
      })
      .to(introRef, {
        delay: -1,
        duration: 1.5,
        y: '-100%',
        ease: 'power4.inOut',
      })
      .to(introRef, {
        display: 'none',
      })
      .to(
        'img',
        {
          scale: 1,
          duration: 1,
          ease: 'power4.inOut',
        },
        '-=1.7'
      );
  });

  return (
    <Portal mount={document.body}>
      <div ref={introRef} class="intro-container">
        <h1 ref={titleRef}>{title}</h1>
      </div>
    </Portal>
  );
};

export default IntroLoader;
