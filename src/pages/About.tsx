import { useAnimation, motion } from 'framer-motion';
import React, { useEffect } from 'react';
import { BsInstagram, BsTwitter, BsWhatsapp } from 'react-icons/bs';
import IntroLoader from 'src/components/intro/Intro';
import { defaultTransition } from 'src/utils/framerAnimations';

const About = () => {
  const loaderControls = useAnimation();

  useEffect(() => {
    setTimeout(() => {
      loaderControls.start({
        opacity: 0,
        transition: defaultTransition,
      });
    }, 2000);
  }, []);

  return (
    <>
      <IntroLoader title='About.' loaderControls={loaderControls} />

      <div className='about'>
        <header className='about__header px-5 py-3 lg:py-0'>
          <h1 className='about__header-title'>About</h1>
        </header>

        <div className='about__content'>
          <div className='about__content-intro'>
            <div className='about__content-intro--img w-2/5'>
              <motion.img
                initial={{ scale: 1.6 }}
                animate={{ scale: 1 }}
                transition={{ ...defaultTransition, delay: 2 }}
                src='/images/self-1.jpeg'
                alt='Elisha tams'
              />
            </div>

            <div className='about__content-intro--main w-3/5'>
              <p className='about__content-intro--title'>
                Elisha Tams <br />
                Artist
              </p>

              <p className='about__content-intro--title'>
                Port Harcourt <br />
                Nigeria
              </p>

              <div className='about__content-intro--links'>
                <a href='mailto:elishatams@gmail.com/' target='_blank' rel='noreferrer'>
                  elishatams@gmail.com
                </a>
                <a href='https://www.wa.me/+2348144792294/' target='_blank' rel='noreferrer'>
                  +234&nbsp;814&nbsp;479&nbsp;2294
                </a>
              </div>
            </div>
          </div>

          <div className='about__content-body md:w-3/5'>
            {/* <p>
              My name is Tamunodiepriye Elisha. I am from Nigeria and I reside in Port Harcourt city
              in River State. My first experience as an artist was when I began tracing and making
              sketches at 5years old. My older brother loved drawing and I always watched him play
              around his pencils as it mademewant to draw as well; He was my first influence.
              <br />
              Being among other kids who had the same burning desire and enthusiasmserved as another
              form of inspiration but the best of them all was when I was on my way home in 2016, I
              sawaroadside artist working on a realistic drawing. I had never seen a drawing as good
              and real ashis and it was there I realise that I had to improve and expand my
              knowledge in Art.
              <br />
              I believe that being an artist something that one is born to do and then followed up
              with consistent training as I studied through practical experiences, learning through
              trial anderror and studying the works of Kelvin Okafor and many other artists.it was
              here I further expandedmy knowledge on graphite, and charcoal drawings.
              <br />
              <br />I have been drawing profressionally for 6 years and I have created a lot of art
              pieces andalsomade numerous commissioned drawings as well. I work primarily using
              graphite and charcoal pencils and I currently work from home. My biggest Achievement
              would be inspiring other artist, friends and children in learninghowtodraw and
              becoming good at it.
            </p> */}
            <p>
              My name is Tamunodiepriye Elisha. I am from Nigeria and I reside in Port Harcourt city
              in River State. My first experience as an artist was when I began tracing and making
              sketches at 5years old. My older brother loved drawing and I always watched him play
              around his pencils as it mademewant to draw as well; He was my first influence.
              <br />
              Being among other kids who had the same burning desire and enthusiasmserved as another
              form of inspiration but the best of them all was when I was on my way home in 2016, I
              sawaroadside artist working on a realistic drawing. I had never seen a drawing as good
              and real ashis and it was there I realise that I had to improve and expand my
              knowledge in Art.
              <br />
              I believe that being an artist something that one is born to do and then followed up
              with consistent training as I studied through practical experiences, learning through
              trial anderror and studying the works of Kelvin Okafor and many other artists.it was
              here I further expandedmy knowledge on graphite, and charcoal drawings.
              <br />
              <br />I have been drawing profressionally for 6 years and I have created a lot of art
              pieces andalsomade numerous commissioned drawings as well. I work primarily using
              graphite and charcoal pencils and I currently work from home. My biggest Achievement
              would be inspiring other artist, friends and children in learninghowtodraw and
              becoming good at it.
            </p>
          </div>
        </div>

        <nav className='about__nav pt-20 pb-10'>
          <div className='transition-all flex gap-6'>
            <a href='https://twitter.com/elisha_tams' rel='noreferrer' target='_blank'>
              <BsTwitter /> Twitter
            </a>
            <a
              href='https://instagram.com/elisha_tamzy?igshid=YmMyMTA2M2Y='
              rel='noreferrer'
              target='_blank'
            >
              <BsInstagram /> Instagram
            </a>
            <a href='https://www.wa.me/+2348144792294/' rel='noreferrer' target='_blank'>
              <BsWhatsapp /> WhatsApp
            </a>
          </div>
          <p className='about__nav-copy'>
            Designed & Developed by
            <a
              href='https://www.chizi.dev'
              rel='noreferrer'
              target='_blank'
              className='link text-gray-500'
            >
              Chizi Victor
            </a>
          </p>
        </nav>
      </div>
    </>
  );
};

export default About;
