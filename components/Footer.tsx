export const Footer = () => {
  return (
    <footer id="Footer" className="clearfix">
      <div className="widgets_wrapper">
        <div className="container">
          {/* One Fourth (1/4) Column  */}
          <div className="column one-fourth">
            {/* Text Area  */}
            <aside className="widget widget_text">
              <h4>Lagos Office</h4>
              <div className="textwidget">
                <ul className="footer_links">
                  <li>
                    Plot 25, 68 Bisola Durosinmi Etti drive, Lekki Phase 1,
                    Lagos.
                  </li>
                  <li>Tel: 09060004203</li>
                  <li>
                    <a href="#" style={{ color: "black" }}>
                      Privacy notice
                    </a>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
          {/* One Fourth (1/4) Column */}
          <div className="column one-fourth">
            {/* Text Area */}
            <aside className="widget widget_text">
              <h4>Abuja Office</h4>
              <div className="textwidget">
                <ul className="footer_links">
                  <li>Plot 114 (House 1), Ebitu Ukiwe Street, Jabi, Abuja.</li>
                  <li>Tel: 0906000420</li>
                </ul>
              </div>
            </aside>
          </div>
          {/* One Fourth (1/4) Column  */}
          <div className="column one-fourth">
            {/* Text Area  */}
            <aside className="widget widget_text">
              <h4>Anambra Office</h4>
              <div className="textwidget">
                <ul className="footer_links">
                  <li>
                    50 Ifite Road, off Aroma Junction, Awka, Anambra State.
                  </li>
                  <li>Tel: 09060004205, 09060004206.</li>
                </ul>
              </div>
            </aside>
          </div>
          {/* One Fourth (1/4) Column  */}
          <div className="column one-fourth">
            {/* Text Area  */}
            <aside className="widget widget_text">
              <h4>Latest News</h4>
              <div className="textwidget">
                <ul className="footer_links">
                  <li>
                    <a href="#">
                      {" "}
                      <span style={{ display: "block", color: "#222" }}>
                        AMC SITE TOUR
                      </span>
                      January 7, 2021 - 7:56 am{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {" "}
                      <span style={{ display: "block", color: "#222" }}>
                        Igwe Alfred Nnaemeka Achebe (Agbogidi) Speaks On Awka
                        Millennium City.
                      </span>
                      December 30, 2020 - 7:57 am{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </div>

      {/* Footer copyright */}
      <div className="footer_copy">
        <div className="container">
          <div className="column one">
            <a
              id="back_to_top"
              className="button button_left button_js"
              href="#"
            >
              <span className="button_icon">
                <i className="icon-up-open-big"></i>
              </span>
            </a>
            <div className="copyright">
              &copy; 2021, Awka Millennium City
              {/* <a target="_blank" rel="nofollow" href="http://looptrace.com">
                Looptrace ltd
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
