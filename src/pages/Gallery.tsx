import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ImageSrc from '../components/ImageSrc';
import { For, JSX, onMount } from 'solid-js';
import { gsap } from 'gsap';
import { A } from '@solidjs/router';
import IntroLoader from '../components/IntroLoader';

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  onMount(() => setTimeout(() => ScrollTrigger.refresh(), 500));

  onMount(() => {
    const matchmedia = gsap.matchMedia();

    matchmedia.add('(min-width: 768px)', () => {
      const navItems = gsap.utils.toArray(
        '.gallery__navbar-item'
      ) as HTMLElement[];
      const images = gsap.utils.toArray('.gallery__list-item') as HTMLElement[];

      gsap.set(images, { opacity: 0, scale: 0.95 });

      gsap.to('.gallery__navbar', {
        scrollTrigger: {
          trigger: '.gallery__navbar',
          start: 'top top',
          end: 'bottom bottom',
          pin: '.gallery__list',
          scrub: true,
        },
      });

      navItems.forEach((item, index) => {
        gsap.to(images[index], {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          scrollTrigger: {
            trigger: item,
            start: '-1% center',
            end: '101% center',
            toggleActions: 'play none none reverse',
            onEnter: () => item.classList.add('is-active'),
            onLeaveBack: () => item.classList.remove('is-active'),
            onLeave: () => item.classList.remove('is-active'),
            onEnterBack: () => item.classList.add('is-active'),
          },
        });
      });
    });
  });

  const handleClick: JSX.EventHandlerUnion<HTMLLIElement, MouseEvent> = (e) => {
    e.target.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <>
      <IntroLoader title="Gallery." />
      <div class="gallery">
        <header class="gallery__header">
          <h1 class="gallery__header-title">Gallery</h1>
        </header>

        <div class="gallery__content">
          <ul class="gallery__navbar">
            <For each={portraits}>
              {(portrait, index) => (
                <li class="gallery__navbar-item" onClick={handleClick}>
                  <span class="gallery__navbar-item--index">
                    Pr. {index() + 1}
                  </span>
                  <A href="">{portrait.name}</A>
                </li>
              )}
            </For>
          </ul>

          <div class="gallery__list">
            <For each={portraits}>
              {(portrait) => (
                <div class="gallery__list-item">
                  <ImageSrc path={portrait.path} />
                  <div class="gallery__list-item--title">
                    <A href="">{portrait.name}</A>
                  </div>
                </div>
              )}
            </For>
          </div>
        </div>

        <div class="gallery-shadow" />
      </div>
    </>
  );
};

export default Gallery;

export const portraits = [
  { name: 'Emily Davis', path: '/images/img-1.jpg' },
  { name: 'Cali Floyd', path: '/images/img-2.jpg' },
  { name: 'Kiara White', path: '/images/img-3.jpg' },
  { name: 'Savannah Castillo', path: '/images/img-5.jpg' },
  { name: 'Ariel Miller', path: '/images/img-6.jpg' },
  { name: 'Adeline Stewart', path: '/images/img-7.jpg' },
  { name: 'Malcolm Newman', path: '/images/img-8.jpg' },
  { name: 'Kayson Cooper', path: '/images/img-9.jpg' },
  { name: 'Kylie Myers', path: '/images/img-10.jpg' },
  { name: 'Eleanor Patel', path: '/images/img-11.jpg' },
  { name: 'John Baker', path: '/images/img-12.jpg' },
  { name: 'Travis Ramos', path: '/images/img-13.jpg' },
  { name: 'Bailey Nelson', path: '/images/img-14.jpg' },
  { name: 'Madelyn Robinson', path: '/images/img-15.jpg' },
  { name: 'Kobe Cruz', path: '/images/img-16.jpg' },
  { name: 'Jayce Watson', path: '/images/img-17.jpg' },
  { name: 'Brooklynn Meyer', path: '/images/img-18.jpg' },
  { name: 'Bentley Cox', path: '/images/img-19.jpg' },
];
