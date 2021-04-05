import Head from "next/head";
import { Footer } from "./Footer";
import { Header } from "./Header";
export const HomeLayout = ({ children, title }) => {
  const banners = [
    "content/builder/images/banner1.png",
    "content/builder/images/banner2.png",
    "content/builder/images/banner3.png",
    "content/builder/images/banner4.png",
    "content/builder/images/banner5.png",
    "content/builder/images/banner6.png",
  ];
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      {/* Main Theme Wrapper */}
      <div id="Wrapper">
        {/* Header Wrapper */}
        <div id="Header_wrapper">
          {/* Header */}
          <header id="Header">
            <Header />
            {/* Revolution slider area */}
            <div className="mfn-main-slider" id="mfn-rev-slider">
              <div
                id="rev_slider_1_2_wrapper"
                className="rev_slider_wrapper fullwidthbanner-container sections_style_1"
              >
                <div
                  id="rev_slider_1_2"
                  className="rev_slider fullwidthabanner tp-overflow-hidden"
                  data-version="5.0.4.1"
                >
                  <ul>
                    {banners.map((path, idx) => (
                      <li
                        key={idx}
                        data-index="rs-1"
                        data-transition="random"
                        data-slotamount="7"
                        data-easein="default"
                        data-easeout="default"
                        data-masterspeed="300"
                        data-rotate="5"
                        data-saveperformance="off"
                        data-title="Slide"
                        data-description=""
                      >
                        <img
                          src={path}
                          width="1920"
                          height="870"
                          data-bgposition="center top"
                          data-bgfit="cover"
                          data-bgrepeat="no-repeat"
                          data-bgparallax="off"
                          className="rev-slidebg"
                        />
                      </li>
                    ))}
                  </ul>
                  <div className="tp-bannertimer tp-bottom flv_viz_hid"></div>
                </div>
              </div>
            </div>
          </header>
        </div>
        {/* Content area */}
        <div>{children}</div>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};
