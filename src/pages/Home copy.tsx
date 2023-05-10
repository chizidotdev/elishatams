import { useAnimation, motion } from 'framer-motion';
import React, { useEffect } from 'react';
import IntroLoader from 'src/components/intro/Intro';
import { defaultTransition } from 'src/utils/framerAnimations';
import { introTimeline } from 'src/utils/gsapAnimations';

const IKIT_URL = 'https://ik.imagekit.io/chizidotdev/tr:w-600/';

const Home = () => {
  // const [pic, setPic] = useState(0);
  // const randomPic = () => {
  //   return setPic(Math.round(Math.random() * 6));
  // };
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
            <div className='flex flex-col lg:flex-row gap-14 lg:gap-32 mt-5 md:mt-10'>
              <div className='portrait__heading'>
                <h1 className='portrait__heading--cta'>Hi, check out my portrait gallery</h1>
              </div>

              <section className='portrait__section sm:grid grid-cols-2 gap-12'>
                <div className='portrait__section--body'>
                  <div className='img-container'>
                    <motion.img
                      initial={{ scale: 1.6 }}
                      animate={{ scale: 1 }}
                      transition={{ ...defaultTransition, delay: 2 }}
                      whileHover={{ scale: 1.1 }}
                      className='portrait__img'
                      src={`${IKIT_URL}/images/self-4.jpg`}
                      alt=''
                      width={1000}
                      height={700}
                    />
                  </div>
                </div>

                <div className='portrait__section--body'>
                  <div className='img-container'>
                    <motion.img
                      initial={{ scale: 1.6 }}
                      animate={{ scale: 1 }}
                      transition={{ ...defaultTransition, delay: 2 }}
                      whileHover={{ scale: 1.1 }}
                      className='portrait__img'
                      src={`${IKIT_URL}/images/self-1.jpg`}
                      alt=''
                      width={700}
                      height={1000}
                    />
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

export default Home;
