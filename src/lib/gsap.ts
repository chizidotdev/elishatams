import gsap from 'gsap';
import { CSSRulePlugin } from 'gsap/dist/CSSRulePlugin';
gsap.registerPlugin(CSSRulePlugin);

export const introTimeline = () => {
  const intro = gsap.timeline();
  const imageReveal = CSSRulePlugin.getRule('.img-container::after');

  intro.to(imageReveal, {
    delay: 2,
    duration: 1,
    width: '0%',
    ease: 'power2.easeInOut',
  });

  intro.play();
};

export const navTimelineOpen = () => {
  const toggleMenu = gsap.timeline();
  gsap.set('.nav-item', { y: '200%' });

  toggleMenu
    .to('.outlet', {
      y: '50vh',
      width: '95%',
      ease: 'Power2.easeInOut',
    })
    .to('.nav-item', {
      delay: -0.5,
      duration: 0.2,
      y: '0',
      ease: 'Power2.easeInOut',
      stagger: 0.1,
    })
    .to('.root-container', {
      delay: -1,
      overflow: 'hidden',
      height: '100vh',
    });

  toggleMenu.play();
};

export const navTimelineClose = () => {
  const toggleMenu = gsap.timeline();

  toggleMenu
    .to('.outlet', {
      y: '0',
      width: '100%',
      ease: 'Power2.easeInOut',
      clearProps: 'y',
    })
    .to('.root-container', {
      delay: -1,
      height: 'auto',
      clearProps: 'overflow',
    });

  toggleMenu.play();
};
