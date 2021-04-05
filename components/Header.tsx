export const Header = () => {
  return (
    <>
      <div id="Overlay">
        <nav id="overlay-menu" className="menu-main-menu-container">
          <ul id="menu-main-menu" className="overlay-menu">
            <li className="current_page_item">
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/project">Projects</a>
            </li>
            <li>
              <a href="content/builder/our-realizations.html">The Team</a>
            </li>
            <li>
              <a href="content/builder/offer.html">Own a Property</a>
            </li>
            <li>
              <a href="content/builder/offer.html">News</a>
            </li>
            <li>
              <a href="content/builder/offer.html">Site Update</a>
            </li>
            <li>
              <a href="content/builder/offer.html">Gallery</a>
            </li>
            <li>
              <a href="content/builder/contact-us.html">Contact</a>
            </li>
            <li>
              <a target="_blank" href="http://bit.ly/1M6lijQ">
                <span
                  style={{
                    padding: "0px",
                    color: "#22467e",
                  }}
                >
                  Buy now
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <a className="overlay-menu-toggle" href="#">
        <i className="open icon-menu"></i>
        <i className="close icon-cancel"></i>
      </a>

      {/* Logo */}
      <div
        id="logo-container"
        style={{
          backgroundColor: "transparent",
          width: "50px",
          position: "absolute",
          top: "20px",
          left: "30px",
          zIndex: 1,
        }}
      >
        <a href="/" title="BeBuilder - BeTheme">
          <img src="images/logo.png" style={{ width: "100%" }} />
        </a>
      </div>
    </>
  );
};
