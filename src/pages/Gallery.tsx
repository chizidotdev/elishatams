import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ImageSrc from '../components/ImageSrc';
import { For, JSX, onMount } from 'solid-js';
import { gsap } from 'gsap';
import { A } from '@solidjs/router';

gsap.registerPlugin(ScrollTrigger);
const Gallery = () => {
  onMount(() => {
    const matchmedia = gsap.matchMedia();

    matchmedia.add('(min-width: 768px)', () => {
      const navItems = gsap.utils.toArray(
        '.gallery__navbar-item'
      ) as HTMLElement[];
      const images = gsap.utils.toArray('.gallery__list-item') as HTMLElement[];

      gsap.set(images, { opacity: 0 });

      ScrollTrigger.create({
        trigger: '.gallery__navbar',
        start: 'top top',
        end: 'bottom bottom',
        pin: '.gallery__list',
        scrub: true,
      });

      navItems.forEach((item, index) => {
        ScrollTrigger.create({
          trigger: item,
          start: '-1% center',
          end: '101% center',
          animation: gsap.to(images[index], { opacity: 1 }),
          toggleActions: 'play none none reverse',
          onEnter: () => item.classList.add('is-active'),
          onLeaveBack: () => item.classList.remove('is-active'),
          onLeave: () => item.classList.remove('is-active'),
          onEnterBack: () => item.classList.add('is-active'),
        });
      });
    });
  });

  const handleClick: JSX.EventHandlerUnion<HTMLLIElement, MouseEvent> = (e) => {
    e.target.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <div class="gallery">
      <header class="gallery__header">
        <h1 class="gallery__header-title">Gallery</h1>
      </header>

      <div class="gallery__content">
        <ul class="gallery__navbar">
          <For each={portraits}>
            {(item) => (
              <li class="gallery__navbar-item" onClick={handleClick}>
                <A href="">{item}</A>
              </li>
            )}
          </For>
        </ul>

        <div class="gallery__list">
          <For each={portraits}>
            {(image) => (
              <div class="gallery__list-item">
                <ImageSrc path={image} />
                <div class="gallery__list-item-title">
                  <A href="">{image}</A>
                </div>
              </div>
            )}
          </For>
        </div>
      </div>
    </div>
  );
};

export default Gallery;

export const portraits = [
  '/images/img-1.jpg',
  '/images/img-2.jpg',
  '/images/img-3.jpg',
  '/images/img-5.jpg',
  '/images/img-6.jpg',
  '/images/img-7.jpg',
  '/images/img-8.jpg',
  '/images/img-9.jpg',
  '/images/img-10.jpg',
  '/images/img-11.jpg',
  '/images/img-12.jpg',
  '/images/img-13.jpg',
  '/images/img-14.jpg',
  '/images/img-15.jpg',
  '/images/img-16.jpg',
  '/images/img-17.jpg',
  '/images/img-18.jpg',
  '/images/img-19.jpg',
];
