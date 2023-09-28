import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LocomotiveScroll from 'locomotive-scroll';
import { Accessor, createSignal } from 'solid-js';
import { JSX, createContext, onMount, useContext } from 'solid-js';

type LocoScrollContextType = Accessor<{ locoScroll: LocomotiveScroll }>;
export const LocoScrollContext = createContext({} as LocoScrollContextType);

export function LocoScrollProvider(props: { children: JSX.Element }) {
  const [locoScroll, setLocoScroll] = createSignal<{
    locoScroll: LocomotiveScroll;
  }>({} as { locoScroll: LocomotiveScroll });

  onMount(() => {
    // --- SETUP START ---
    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
    const selector = '[data-scroll-container]';
    const el = document.querySelector(selector) as HTMLElement;
    const locoScroll = new LocomotiveScroll({ el, smooth: true });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on('scroll', ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy(selector, {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value!, { duration: 0, disableLerp: true })
          : (locoScroll as any).scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: el.style.transform ? 'transform' : 'fixed',
    });

    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
    ScrollTrigger.addEventListener('refresh', (() =>
      locoScroll.update()) as unknown as gsap.Callback);
    ScrollTrigger.defaults({ scroller: '[data-scroll-container]' });
    // --- SETUP END ---

    setLocoScroll({ locoScroll });
  });

  return (
    <LocoScrollContext.Provider value={locoScroll}>
      {props.children}
    </LocoScrollContext.Provider>
  );
}

export function useLocoScroll() {
  const context = useContext(LocoScrollContext);
  if (!context) {
    throw new Error('useLocoScrollContext: cannot find a LocoScrollContext');
  }
  return context;
}
