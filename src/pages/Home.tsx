import { useAnimation, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import IntroLoader from 'src/components/intro/Intro';
import { defaultTransition } from 'src/utils/framerAnimations';
import { introTimeline } from 'src/utils/gsapAnimations';
import { AiFillCaretRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Home = () => {
  const loaderControls = useAnimation();

  useEffect(() => {
    introTimeline();

    setTimeout(() => {
      loaderControls.start({
        opacity: 0,
        transition: defaultTransition,
      });
    }, 2000);
  }, []);

  return (
    <>
      <IntroLoader title='Elisha Tams.' loaderControls={loaderControls} />
      <div className='home'>
        <div className='home__heading'>
          <div className='logo'>Elisha Tams.</div>

          <p className='header__title hidden lg:block mr-[35vw] mt-3'>
            elisha tams <br /> artist
          </p>
        </div>

        <section className='wrapper'>
          <div className='portrait'>
            <div className='grid mt-5 md:mt-10'>
              <section className='portrait__section flex items-end justify-end gap-12'>
                <div className='portrait__heading md:text-right'>
                  <h1 className='portrait__heading--title'>Elisha Tams</h1>
                  <h1 className='portrait__heading--title'>Portfolio</h1>
                </div>

                <div className='portrait__section--body ml-10'>
                  <div className='img-container'>
                    <ProfileImage path='/images/self-4.jpg'/>
                  </div>
                </div>
              </section>

              <section className='portrait__section flex flex-col md:flex-row-reverse gap-6'>
                <div className='portrait__heading flex-1 lg:flex-[2]'>
                  <h1 className='portrait__heading--title'>Pencil Artist</h1>
                  <Link to='/gallery'>
                    <h1 className='portrait__heading--title link w-max text-gray-500 flex items-center cursor-pointer'>
                      Gallery <AiFillCaretRight />
                    </h1>
                  </Link>
                </div>

                <div className='portrait__section--body flex-1 mr-10 lg:mr-20 lg:-mt-10'>
                  <div className='img-container'>
                    <ProfileImage path='/images/self-1.jpg'/>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

const ProfileImage: React.FC<{path: string}> = ({ path }) => {
  const initialImageSrc = `https://ik.imagekit.io/chizidotdev${path}/tr:w-600`
  const [imageSrc, setImageSrc] = useState(`${initialImageSrc},q-1`)

  useEffect(() => {
    const image = new Image();
    image.src = initialImageSrc;
    image.onload = () => {
      console.log('loaded', initialImageSrc)
      setImageSrc(initialImageSrc);
    };
  }, [])

  return (
    <motion.img
      initial={{ scale: 1.6 }}
      animate={{ scale: 1 }}
      transition={{ ...defaultTransition, delay: 2 }}
      className='portrait__img'
      src={imageSrc}
      alt=''
      width={700}
      height={1000}
    />
  );
};

export default Home;

