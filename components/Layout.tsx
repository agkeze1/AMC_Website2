import Head from "next/head";
import { Footer } from "./Footer";
import { Header } from "./Header";
export const Layout = ({ children, title, bannerText }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      {/* Main Theme Wrapper */}
      <div id="Wrapper">
        {/* Header Wrapper */}
        <div id="Header_wrapper">
          <Header />
          {/* Subheader area - only for certain pages */}
          <div id="Subheader">
            <div>
              <img
                src="content/builder/images/top-banner2.png"
                className="banner-image"
              />
            </div>
            <div className="container">
              <div className="column one">
                <h1 className="title banner-title">{bannerText}</h1>
              </div>
            </div>
          </div>
        </div>
        {/* Content area */}
        <div id="children-container">{children}</div>
        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};
