import { gsap } from 'gsap';
import { onCleanup, onMount } from 'solid-js';

export const Menu = (props: { onClick: () => void }) => {
  let ref: HTMLDivElement | undefined;

  onMount(() => {
    if (!ref) return;

    const xTo = gsap.quickTo(ref, 'x', {
      duration: 1,
      ease: 'elastic.out(1, 0.3)',
    });
    const yTo = gsap.quickTo(ref, 'y', {
      duration: 1,
      ease: 'elastic.out(1, 0.3)',
    });

    const onMouseMove = (e: MouseEvent) => {
      if (!ref) return;
      const { clientX, clientY } = e;
      const { left, top, width, height } = ref.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      xTo(x);
      yTo(y);
    };

    const onMouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    ref.addEventListener('mousemove', onMouseMove);
    ref.addEventListener('mouseleave', onMouseLeave);

    onCleanup(() => {
      if (!ref) return;
      ref.removeEventListener('mousemove', onMouseMove);
      ref.removeEventListener('mouseleave', onMouseLeave);
    });
  });

  return (
    <div ref={ref} class="menu interactable" onClick={props.onClick}>
      <div class="menu__line" />
      <div class="menu__line" />
    </div>
  );
};
