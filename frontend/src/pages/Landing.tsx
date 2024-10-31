import "../css/Landing.css";
import "../css/Common.css";
import { BACKEND_URL, FRONTEND_URL } from "../config";
const Landing = () => {
  return (
    <>
      <script src="js/plugins.js"></script>
      <script src="js/main.js"></script>
      <div className="s-pagewrap">
        <div className="circles">
          <span style={{ opacity: 0.1 }}></span>
          <span style={{ opacity: 0.1 }}></span>
          <span style={{ opacity: 0.1 }}></span>
          <span style={{ opacity: 0.1 }}></span>
          <span style={{ opacity: 0.1 }}></span>
        </div>
        <header
          className="s-header"
          style={{ transform: "translateY(0px)", opacity: 1 }}
        >
          <div className="header-mobile">
            <a className="mobile-menu-toggle" href="#0">
              <span>Menu</span>
            </a>
          </div>

          <div className="row wide main-nav-wrap">
            <nav className="column lg-12 main-nav">
              <ul>
                <li className="">
                  <a href="#intro" className="smoothscroll">
                    Intro
                  </a>
                </li>
                <li className="current">
                  <a href="#about" className="smoothscroll">
                    About
                  </a>
                </li>
                <li className="">
                  <a href="#expertise" className="smoothscroll">
                    Expertise
                  </a>
                </li>
                <li className="">
                  <a
                    href="#signup"
                    className="smoothscroll"
                    onClick={() =>
                      (window.location.href = `${FRONTEND_URL}/signup`)
                    }
                  >
                    Signup
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <main className="s-content">
          <section id="intro" className="s-intro target-section">
            <div className="row intro-content wide">
              <div className="column">
                <div
                  className="text-pretitle with-line"
                  style={{ transform: "translateX(0px)", opacity: 1 }}
                >
                  Introducing Voxen
                </div>

                <h1
                  className="text-huge-title"
                  style={{ transform: "translateX(0px)", opacity: 1 }}
                >
                  "Where Every Story Matters"
                  <br />
                  Share your voice, connect with readers, and join a world of
                  ideas. <br />
                </h1>
              </div>
            </div>
            <a
              href="#about"
              className="intro-scrolldown smoothscroll"
              style={{ transform: "translateY(0px)", opacity: 1 }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill-rule="evenodd"
                clip-rule="evenodd"
              >
                <path d="M11 21.883l-6.235-7.527-.765.644 7.521 9 7.479-9-.764-.645-6.236 7.529v-21.884h-1v21.883z"></path>
              </svg>
            </a>
          </section>

          <section id="about" className="s-about target-section">
            <div
              className="row about-info wide ss-animated"
              data-animate-block=""
            >
              <div className="column lg-6 md-12 about-info__pic-block">
                <img
                  src="public/landing.avif"
                  alt=""
                  className="about-info__pic"
                  data-animate-el=""
                  style={{
                    opacity: 1,
                    transform: "translateY(0px)",
                    width: "630px",
                    borderRadius: "10px",
                  }}
                />
              </div>

              <div className="column lg-6 md-12">
                <div className="about-info__text">
                  <h2
                    className="text-pretitle with-line"
                    data-animate-el=""
                    style={{ opacity: 1, transform: "translateY(0px)" }}
                  >
                    About
                  </h2>
                  <p
                    className="attention-getter"
                    data-animate-el=""
                    style={{ opacity: 1, transform: "translateY(0px)" }}
                  >
                    Welcome to Voxen – a space where ideas flow, stories
                    inspire, and voices are heard. We believe that everyone has
                    a story to share and a unique perspective that deserves a
                    platform. Our mission is simple: to empower writers of all
                    backgrounds to share their insights and experiences with a
                    global audience, and to give readers a place to discover,
                    learn, and engage with fresh ideas and diverse viewpoints.
                  </p>
                  <a
                    href="#0"
                    className="btn btn--medium u-fullwidth"
                    data-animate-el=""
                    style={{ opacity: 1, transform: "translateY(0px)" }}
                    onClick={() =>
                      (window.location.href = `${FRONTEND_URL}/signup`)
                    }
                  >
                    Click Here to share Your Knowledge
                  </a>
                </div>
              </div>
            </div>
            <div
              className="row about-expertise ss-animated"
              data-animate-block=""
            >
              <div className="column lg-12">
                <h2
                  className="text-pretitle"
                  data-animate-el=""
                  style={{ opacity: 1, transform: "translateY(0px)" }}
                >
                  Expertise
                </h2>

                <ul
                  className="skills-list h1"
                  data-animate-el=""
                  style={{ opacity: 1, transform: "translateY(0px)" }}
                >
                  <li>Seamless Writing Experience</li>
                  <li>Audience Reach & Engagement</li>
                  <li>Content Curation & Quality Control</li>
                  Educational Resources for Writers
                </ul>
              </div>
            </div>
            <div
              className="row about-timelines ss-animated"
              data-animate-block=""
            >
              <div className="column lg-6 tab-12">
                <div
                  className="timeline"
                  data-animate-el=""
                  style={{ opacity: 1, transform: "translateY(0px)" }}
                >
                  <div className="timeline__block">
                    <div className="timeline__bullet"></div>
                    <div className="timeline__header">
                      <h4 className="timeline__title">
                        Where Every Voice Finds Its Audience
                      </h4>
                    </div>
                    <div className="timeline__desc">
                      <p>
                        We believe that every story deserves to be heard.
                        Whether you’re a seasoned storyteller or just beginning
                        your journey, this is your place to share experiences,
                        insights, and perspectives with readers eager to
                        connect. Here, your voice finds its true audience.
                      </p>
                    </div>
                  </div>
                  <div className="timeline__block">
                    <div className="timeline__bullet"></div>
                    <div className="timeline__header">
                      <h4 className="timeline__title">
                        Explore Ideas That Inspire and Challenge
                      </h4>
                    </div>
                    <div className="timeline__desc">
                      <p>
                        Dive into a world of ideas. From bold opinions to
                        nuanced discussions, Voxen brings together diverse
                        content to challenge the ordinary and inspire new ways
                        of thinking. Discover stories that resonate, provoke
                        thought, and spark curiosity — every single day.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="column lg-6 tab-12">
                <div
                  className="timeline"
                  data-animate-el=""
                  style={{ opacity: 1, transform: "translateY(0px)" }}
                >
                  <div className="timeline__block">
                    <div className="timeline__bullet"></div>
                    <div className="timeline__header">
                      <h4 className="timeline__title">
                        Write Without Boundaries
                      </h4>
                    </div>
                    <div className="timeline__desc">
                      <p>
                        Unleash your creativity with a writing experience
                        designed to empower. Our intuitive editor is built for
                        flow, giving you a distraction-free space to capture
                        your voice in its purest form. Here, you’re free to
                        create without limits — just bring your passion and
                        ideas.
                      </p>
                    </div>
                  </div>

                  <div className="timeline__block">
                    <div className="timeline__bullet"></div>
                    <div className="timeline__header">
                      <h4 className="timeline__title">
                        For Readers, Writers, and Dreamers Alike
                      </h4>
                    </div>
                    <div className="timeline__desc">
                      <p>
                        Voxen is more than just a platform; it’s a community. We
                        celebrate curiosity, creativity, and the drive to learn
                        and grow. Whether you’re here to read, to write, or to
                        dream, you belong here with us.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default Landing;
