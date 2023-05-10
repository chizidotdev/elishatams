import gsap from 'gsap';
import { CSSRulePlugin } from 'gsap/dist/CSSRulePlugin';
gsap.registerPlugin(CSSRulePlugin);

export const introTimeline = () => {
  const intro = gsap.timeline();
  let imageReveal = CSSRulePlugin.getRule('.img-container::after');

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

  toggleMenu
    .to(
      '.outlet',
      {
        y: '50vh',
        width: '95%',
        ease: 'Power2.easeInOut',
      },
      0
    )
    .from(
      '.nav-item',
      {
        duration: 0.2,
        y: '200%',
        ease: 'Expo.easeInOut',
        stagger: 0.1,
        skewY: 10,
      },
      0
    )
    .to('.root-container', {
      delay: -1,
      overflow: 'hidden',
      height: '100vh',
    });

  // reverse ? toggleMenu.reverse() : toggleMenu.play();
  toggleMenu.play();
};

export const navTimelineClose = () => {
  const toggleMenu = gsap.timeline();

  toggleMenu
    .to('.outlet', {
      y: '0',
      width: '100%',
      ease: 'Power2.easeInOut',
    })
    .to('.root-container', {
      delay: -1,
      height: 'auto',
    });

  toggleMenu.play();
};
