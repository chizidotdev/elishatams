import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ImageSrc from '../components/ImageSrc';
import { For, onMount } from 'solid-js';
import { gsap } from 'gsap';
import { A } from '@solidjs/router';

gsap.registerPlugin(ScrollTrigger);
const Gallery = () => {
  onMount(() => {
    const matchmedia = gsap.matchMedia();

    matchmedia.add('(min-width: 768px)', () => {
      const navItems = gsap.utils.toArray(
        '.gallery__navbar-item:not(:first-child)'
      ) as HTMLElement[];
      const images = gsap.utils.toArray(
        '.gallery__list-item:not(:first-child)'
      ) as HTMLElement[];

      gsap.set(images, { yPercent: 100 });

      ScrollTrigger.create({
        trigger: '.gallery__navbar',
        start: 'top top',
        end: 'bottom bottom',
        pin: '.gallery__list',
        scrub: true,
      });

      navItems.forEach((item, index) => {
        const title = item.querySelector('a');
        ScrollTrigger.create({
          trigger: title,
          start: 'top center',
          end: 'bottom center',
          animation: gsap.to(images[index], { yPercent: 0 }),
          scrub: 0.5,
          snap: {
            snapTo: 1 / (navItems.length - 1),
            duration: { min: 0.1, max: 0.1 },
            delay: 0.5,
            ease: 'power4.inOut',
          },
        });
      });
    });
  });

  return (
    <div class="gallery">
      <header class="gallery__header">
        <h1 class="gallery__header-title">Gallery</h1>
      </header>

      <div class="gallery__content">
        <ul class="gallery__navbar">
          <For each={portraits}>
            {(item) => (
              <li class="gallery__navbar-item">
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
