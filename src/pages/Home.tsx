import ImageSrc from '../components/ImageSrc';
import { AiFillCaretRight } from 'solid-icons/ai';
import { A } from '@solidjs/router';
import IntroLoader from '../components/IntroLoader';

const Home = () => {
  return (
    <>
      <IntroLoader title="Elisha Tams." />
      <div class="home">
        <div class="home__heading">
          <A href="">
            <div class="logo">Elisha Tams.</div>
          </A>

          <p class="header__title">
            elisha tams <br /> artist
          </p>
        </div>

        <section class="wrapper">
          <div class="portrait">
            <section class="portrait__section top">
              <div class="img-container">
                <ImageSrc path="/images/self-4.jpg" />
              </div>
            </section>

            <section class="portrait__section bottom">
              <div>
                <div class="portrait__heading">
                  <h1 class="portrait__heading--title">Elisha Tams</h1>
                  <h1 class="portrait__heading--title">Artist</h1>
                  <h1 class="portrait__heading--title">Portfolio</h1>
                </div>
                <A href="/gallery">
                  <h1 class="portrait__heading--title link">
                    Gallery <AiFillCaretRight />
                  </h1>
                </A>
              </div>

              <div class="portrait__section--body">
                <div class="img-container">
                  <ImageSrc path="/images/self-1.jpg" />
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
