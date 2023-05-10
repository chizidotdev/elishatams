import React, { useState } from 'react';
// import { BsArrowRight } from 'react-icons/bs';
import { Link, Outlet } from 'react-router-dom';
import { navTimelineClose, navTimelineOpen } from '../utils/gsapAnimations';

const Navbar = () => {
  const [, setDisabled] = useState(false);
  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setDisabled(true);

    if (open) {
      navTimelineClose();
      setOpen(false);
    } else {
      navTimelineOpen();
      setOpen(true);
    }

    setTimeout(() => {
      setDisabled(false);
    }, 2000);
  };

  return (
    <>
      <section data-scroll-section className='root-container'>
        <header className='header'>
          <nav className='header__nav'>
            <ul className='flex flex-col' onClick={handleMenu}>
              <Link to='/'>
                <li className='nav-item'>Home</li>
              </Link>
              <Link to='/gallery'>
                <li className='nav-item'>Gallery</li>
              </Link>
              <Link to='/about'>
                <li className='nav-item'>About</li>
              </Link>
            </ul>

            <div className='header__nav-social'>
              <a href='https://instagram.com/elisha_tamzy?igshid=YmMyMTA2M2Y='>
                <span>Instagram</span>
              </a>
              <a href='https://twitter.com/elisha_tams'>
                <span>Twitter</span>
              </a>
              <a href='https://www.wa.me/+2348144792294/'>
                <span>WhatsApp</span>
              </a>
            </div>
          </nav>
        </header>

        <div className='menu' onClick={handleMenu} />

        <div className='outlet mx-auto'>
          <Outlet />
        </div>
      </section>
    </>
  );
};

export default Navbar;
