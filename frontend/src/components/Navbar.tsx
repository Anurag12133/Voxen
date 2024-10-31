import "../css/Navbar.css";

const Navbar = () => {
  return (
    <header className="s-header">
      <div className="header-mobile">
        <span className="mobile-home-link">
          <a href="index.html">Luther.</a>
        </span>
        <a className="mobile-menu-toggle" href="#0">
          <span>Menu</span>
        </a>
      </div>

      <div className="row wide main-nav-wrap">
        <nav className="column lg-12 main-nav">
          <ul>
            <li>
              <a href="index.html" className="home-link">
                Luther.
              </a>
            </li>
            <li className="current">
              <a href="#intro" className="smoothscroll">
                Intro
              </a>
            </li>
            <li className="">
              <a href="#about" className="smoothscroll">
                About
              </a>
            </li>
            <li className="">
              <a href="#works" className="smoothscroll">
                Works
              </a>
            </li>
            <li className="">
              <a href="#contact" className="smoothscroll">
                Say Hello
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
