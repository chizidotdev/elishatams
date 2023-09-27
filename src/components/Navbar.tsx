import { A, Outlet } from '@solidjs/router';
import { Magnetic } from './Magnetic';
import { createSignal } from 'solid-js';
import { navTimelineClose, navTimelineOpen } from '../lib/gsap';

const Navbar = () => {
  const [open, setOpen] = createSignal(false);

  const handleMenu = () => {
    if (open()) {
      navTimelineClose();
      setOpen(false);
    } else {
      navTimelineOpen();
      setOpen(true);
    }
  };

  return (
    <>
      <section data-scroll-section class="root-container">
        <header class="header">
          <nav class="header__nav">
            <ul onClick={handleMenu}>
              <A href="/">
                <li class="nav-item interactable">Home</li>
              </A>
              <A href="/gallery">
                <li class="nav-item interactable">Gallery</li>
              </A>
              <A href="/about">
                <li class="nav-item interactable">About</li>
              </A>
            </ul>

            <div class="header__nav-social">
              <a
                class="interactable"
                href="https://instagram.com/elisha_tamzy?igshid=YmMyMTA2M2Y="
              >
                <span>Instagram</span>
              </a>
              <a class="interactable" href="https://twitter.com/elisha_tams">
                <span>Twitter</span>
              </a>
              <a class="interactable" href="https://www.wa.me/+2348144792294/">
                <span>WhatsApp</span>
              </a>
            </div>
          </nav>
        </header>

        <Magnetic>
          <div class="menu" onClick={handleMenu}>
            <div class="menu__line" />
            <div class="menu__line" />
          </div>
        </Magnetic>

        <div class="outlet">
          <Outlet />
        </div>
      </section>
    </>
  );
};

export default Navbar;
