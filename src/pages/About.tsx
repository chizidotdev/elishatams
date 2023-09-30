import { BsInstagram, BsTwitter, BsWhatsapp } from 'solid-icons/bs';
import { imageKitURI } from '../lib/constants';
import IntroLoader from '../components/IntroLoader';
import { createSignal } from 'solid-js';

const About = () => {
  const [overflowShow, setOverflowShow] = createSignal(false);

  const handleReadMore = () => {
    setOverflowShow(!overflowShow());
  };

  return (
    <>
      <IntroLoader title="About." />
      <div class="about">
        <header class="about__header">
          <h1 class="about__header-title">About</h1>
        </header>

        <div class="about__content">
          <div class="about__content-intro">
            <div class="about__content-intro--img">
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
              Tamunodiepriye Elisha, hailing from Nigeria and residing in Port
              Harcourt city, Rivers State, experienced his initial foray into the
              world of art at the age of five. His elder brother's passion for
              drawing served as a profound influence during his formative years.
              Observing his brother's artistic pursuits with pencils ignited a
              similar desire within him, making it an early and influential
              catalyst in his artistic journey.
              <span class={`overflow-text${overflowShow() ? ' show' : ''}`}>
                <br />
                <br />
                Surrounded by peers who shared his burning enthusiasm for art,
                Tamunodiepriye found an additional wellspring of inspiration
                among them. However, a pivotal moment occurred during a 2016
                journey homeward when he encountered a roadside artist engrossed
                in crafting a hyper-realistic drawing. The sheer excellence of
                this artwork left an indelible impression on Tamunodiepriye,
                leading to a profound realization of the need for continuous
                improvement and an expanded understanding of the art form.
                <br />
                In his belief, being an artist is an innate calling, one that
                requires consistent training and dedication. Tamunodiepriye
                pursued practical experiences, learned through trial and error,
                and delved into the works of accomplished artists, including
                Kelvin Okafor. These endeavors further enriched his knowledge of
                graphite and charcoal drawings.
                <br />
                <br />
                With six years of professional artistic experience under his
                belt, Tamunodiepriye has amassed an impressive portfolio
                comprising various art pieces and numerous commissioned
                drawings. His preferred mediums are graphite and charcoal
                pencils, and he currently operates from the comfort of his home
                studio. Yet, among his many accomplishments, he takes the
                greatest pride in inspiring fellow artists, friends, and
                children to embark on their artistic journeys, guiding them
                toward mastery in the art of drawing.
              </span>
            </p>
            <button class="read-more interactable" onclick={handleReadMore}>
              {overflowShow() ? 'Show Less' : 'Show More'}
            </button>
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
