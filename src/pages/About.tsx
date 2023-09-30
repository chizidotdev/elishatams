import { BsInstagram, BsTwitter, BsWhatsapp } from 'solid-icons/bs';
import { imageKitURI } from '../lib/constants';
import IntroLoader from '../components/IntroLoader';

const About = () => {
  return (
    <>
      <IntroLoader title="About." />
      <div class="about">
        <header class="about__header">
          <h1 class="about__header-title">About</h1>
        </header>

        <div class="about__content">
          <div class="about__content-intro">
            <div
              data-scroll
              data-scroll-speed="0.1"
              class="about__content-intro--img"
            >
              <img
                src={`${imageKitURI}/images/self-1.jpeg`}
                alt="Elisha tams"
              />
            </div>

            <div class="about__content-intro--main">
              <p class="about__content-intro--title">
                Elisha Tams <br />
                Artist
              </p>

              <p class="about__content-intro--title">
                Port Harcourt <br />
                Nigeria
              </p>

              <div class="about__content-intro--links">
                <a
                  href="mailto:elishatams@gmail.com/"
                  target="_blank"
                  rel="noreferrer"
                  class="interactable"
                >
                  elishatams@gmail.com
                </a>
                <a
                  href="https://www.wa.me/+2348144792294/"
                  target="_blank"
                  rel="noreferrer"
                  class="interactable"
                >
                  +234&nbsp;814&nbsp;479&nbsp;2294
                </a>
              </div>
            </div>
          </div>

          <div class="about__content-body">
            <p>
              My name is Tamunodiepriye Elisha. I am from Nigeria and I reside
              in Port Harcourt city in River State. My first experience as an
              artist was when I began tracing and making sketches at 5years old.
              My older brother loved drawing and I always watched him play
              around his pencils as it made me want to draw as well; He was my
              first influence.
              <br />
              Being among other kids who had the same burning desire and
              enthusiasm served as another form of inspiration but the best of
              them all was when I was on my way home in 2016, I saw a road side
              artist working on a realistic drawing. I had never seen a drawing
              as good and real as his and it was there I realise that I had to
              improve and expand my knowledge in Art.
              <br />
              I believe that being an artist something that one is born to do
              and then followed up with consistent training as I studied through
              practical experiences, learning through trial and error and
              studying the works of Kelvin Okafor and many other artists.it was
              here I further expanded my knowledge on graphite, and charcoal
              drawings.
              <br />
              <br />I have been drawing profressionally for 6 years and I have
              created a lot of art pieces and also made numerous commissioned
              drawings as well. I work primarily using graphite and charcoal
              pencils and I currently work from home. My biggest Achievement
              would be inspiring other artist, friends and children in learning
              how to draw and becoming good at it.
            </p>
          </div>
        </div>

        <nav class="about__nav">
          <div class="about__nav-links">
            <a
              href="https://twitter.com/elisha_tams"
              rel="noreferrer"
              target="_blank"
              class="interactable"
            >
              <BsTwitter /> Twitter
            </a>
            <a
              href="https://instagram.com/elisha_tamzy?igshid=YmMyMTA2M2Y="
              rel="noreferrer"
              target="_blank"
              class="interactable"
            >
              <BsInstagram /> Instagram
            </a>
            <a
              href="https://www.wa.me/+2348144792294/"
              rel="noreferrer"
              target="_blank"
              class="interactable"
            >
              <BsWhatsapp /> WhatsApp
            </a>
          </div>
          <p class="about__nav-copy">
            Designed & Developed by
            <a
              href="https://www.chizi.dev"
              rel="noreferrer"
              target="_blank"
              class="interactable link"
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
