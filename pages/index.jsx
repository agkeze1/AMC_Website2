import { useEffect } from "react";
import { HomeLayout } from "../components/HomeLayout";

export default function Home() {
  let slideIndex = 1;
  useEffect(() => {
    showSlides(slideIndex);
  }, []);

  // Next/previous controls
  function plusSlides(n) {
    showSlides((slideIndex += n));
  }

  // Thumbnail image controls
  function currentSlide(n) {
    showSlides((slideIndex = n));
  }

  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
      slideIndex = 1;
    } else if (n < 1) {
      slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i]?.className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  }

  const sliderImages = [
    "content/builder/images/slider1.png",
    "content/builder/images/slider2.png",
    "content/builder/images/slider3.png",
    "content/builder/images/slider4.png",
    "content/builder/images/slider5.png",
    "content/builder/images/slider6.png",
    "content/builder/images/slider7.png",
    "content/builder/images/slider8.png",
    "content/builder/images/slider9.png",
    "content/builder/images/slider10.png",
    "content/builder/images/slider11.png",
    "content/builder/images/slider12.png",
    "content/builder/images/slider13.png",
    "content/builder/images/slider14.png",
    "content/builder/images/slider15.png",
    "content/builder/images/slider16.png",
    "content/builder/images/slider17.png",
  ];
  return (
    <HomeLayout title="Home">
      {/* Main Content  */}
      <div id="Content">
        <div className="content_wrapper clearfix">
          <div className="sections_group">
            <div className="entry-content">
              {/* About the Project */}
              <div
                className="section about"
                style={{
                  paddingBottom: "50px",
                  backgroundColor: "#fcfcfc",
                }}
              >
                <div className="section_wrapper clearfix">
                  <div className="items_group clearfix">
                    {/* One Sixth (1/6) Column */}
                    <div className="column one-sixth column_placeholder">
                      <div className="placeholder">&nbsp;</div>
                    </div>
                    {/* One Fourth (1/4) Column */}
                    <div className="column one-fourth column_column">
                      <div className="column_attr">
                        <h2>
                          About
                          <br />
                          Awka Millennium City
                        </h2>
                        <br />
                        <hr
                          style={{
                            width: "60px",
                            height: "8px",
                            background: "#ffba00",
                            float: "left",
                          }}
                        />
                      </div>
                    </div>
                    {/* One Second (1/2) Column */}
                    <div className="column one-second column_column">
                      <div className="column_attr">
                        <p
                          style={{
                            fontWeight: 500,
                            fontSize: "16px",
                            color: "#444",
                            lineHeight: "2",
                            textAlign: "justify",
                          }}
                        >
                          AMC is a Premium multi-nucleic real estate development
                          that is slated to redefine the concept of urban living
                          within Awka, Anambra state. The developer (M-P
                          Infrastructure Ltd) envisions a new residential layout
                          whose development will boost economic activity while
                          increasing the quality of housing in the state capital
                          territory. The commercial avenue, cascaded to include
                          developments such as worship centres, recreational
                          establishments, offices, malls, restaurants etc.
                          enables AMC facilitate the concept of Live, work &
                          play as a one stop destination. AMC will be
                          underpinned by quality municipal infrastructure,
                          seamlessly integrated via the adoption of technology,
                          that will guarantee seamless provision of requisite
                          amenities needed to sustain a good quality lifestyle.
                          Owing to its adoption of technology in various
                          components of the development, AMC is poised to become
                          the first smart city in the South East upon
                          completion.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* The City Plan */}
              <div className="section equal-height full-width sections_style_0">
                <div className="section_wrapper clearfix">
                  <div className="items_group clearfix">
                    {/* One Fourth (1/4) Column */}
                    <div className="column one-fourth column_column">
                      <div
                        className="column_attr"
                        style={{ backgroundColor: "#efefef" }}
                      >
                        <div style={{ padding: "30px" }}>
                          <h2>
                            The City
                            <br />
                            Plan
                          </h2>
                          <br />
                          <hr
                            style={{
                              width: "60px",
                              height: "8px",
                              background: "#ffba00",
                              float: "left",
                            }}
                          />
                          <hr className="no_line hrmargin_b_30" />
                          <p className="big">
                            The project will be a large-scale residential
                            neighborhood with residential, commercial and
                            recreational uses and amenities, such as parks and
                            playgrounds.
                          </p>
                          <p>
                            The entire development sits on approximately 100
                            hectares of Land.
                          </p>
                          <hr className="no_line hrmargin_b_30" />
                          <a
                            href="content/builder/our-realizations.html"
                            style={{ fontSize: "140%", color: "#071323" }}
                          >
                            View City Plan
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* Three Fourth (3/4) Column */}
                    <div className="column three-fourth column_image">
                      <div className="image_frame image_item no_link scale-with-grid aligncenter no_border">
                        <div className="slideshow-container">
                          {sliderImages?.map((path, idx) => (
                            <div key={idx} className="mySlides fade">
                              <div
                                className="numbertext"
                                style={{ marginTop: "10px" }}
                              >
                                {idx + 1} / {sliderImages?.length}
                              </div>
                              <img src={path} style={{ width: "100%" }} />
                            </div>
                          ))}

                          {/* Next and Previous */}
                          <a
                            className="prev"
                            onClick={() => {
                              plusSlides(-1);
                            }}
                          >
                            &#10094;
                          </a>
                          <a
                            className="next"
                            onClick={() => {
                              plusSlides(1);
                            }}
                          >
                            &#10095;
                          </a>
                        </div>
                        <br />

                        {/* The dots/circles */}
                        <div style={{ textAlign: "center", marginTop: "20px" }}>
                          {sliderImages?.map((_, idx) => (
                            <span
                              key={idx}
                              className="dot"
                              onClick={() => {
                                currentSlide(idx + 1);
                              }}
                            ></span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* The Infrastructure */}
              <div
                className="section"
                style={{ paddingTop: "50px", paddingBottom: "50px" }}
              >
                <div className="section_wrapper clearfix">
                  <div className="items_group clearfix">
                    {/* One full width row */}
                    <div className="column one column_column">
                      <div className="column_attr align_center">
                        <h2>The Infrastructure</h2>
                        <h5>
                          AMC is rich with a lot of Infrastructures which brings
                          you all the comfort you need.
                        </h5>
                      </div>
                    </div>
                    {/* One Third (1/3) Column */}
                    <div className="column one-third column_list infrastructure">
                      <div className="list_item lists_2 clearfix">
                        <div style={{ textAlign: "center" }}>
                          <img
                            src="content/builder/images/road.png"
                            className="scale-with-grid"
                            width="90"
                            height="90"
                          />
                        </div>
                        <div style={{ padding: "5px", textAlign: "center" }}>
                          <h4>Paved Road Networks</h4>
                          <div
                            className="desc"
                            style={{ textAlign: "justify" }}
                          >
                            You have your dual lane drive way to allow for ease
                            of entry and exit in and out of the city.
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* One third (1/3) Column */}
                    <div className="column one-third column_list infrastructure">
                      <div className="list_item lists_2 clearfix">
                        <div style={{ textAlign: "center" }}>
                          <img
                            src="content/builder/images/water.png"
                            className="scale-with-grid"
                            width="90"
                            height="90"
                          />
                        </div>
                        <div style={{ padding: "5px", textAlign: "center" }}>
                          <h4>Treated Water Supply</h4>
                          <div
                            className="desc"
                            style={{ textAlign: "justify" }}
                          >
                            The City provides running water which comes from a
                            central treatment source.
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* One third (1/3) Column */}
                    <div className="column one-third column_list infrastructure">
                      <div className="list_item lists_2 clearfix">
                        <div style={{ textAlign: "center" }}>
                          <img
                            src="content/builder/images/drainage.png"
                            className="scale-with-grid"
                            width="90"
                            height="90"
                          />
                        </div>
                        <div style={{ padding: "5px", textAlign: "center" }}>
                          <h4>Storm Water Drainage System</h4>
                          <div
                            className="desc"
                            style={{ textAlign: "justify" }}
                          >
                            The City's properly planned drainage system keeps it
                            completely flood free.
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* One third (1/3) Column */}
                    <div className="column one-third column_list infrastructure">
                      <div className="list_item lists_2 clearfix">
                        <div style={{ textAlign: "center" }}>
                          <img
                            src="content/builder/images/street-light.png"
                            className="scale-with-grid"
                            width="90"
                            height="90"
                          />
                        </div>
                        <div style={{ padding: "5px", textAlign: "center" }}>
                          <h4>Street Light</h4>
                          <div
                            className="desc"
                            style={{ textAlign: "justify" }}
                          >
                            Drive way is fully illuminated at night with lasting
                            solar-powered street lights
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* One third (1/3) Column */}
                    <div className="column one-third column_list infrastructure">
                      <div className="list_item lists_2 clearfix">
                        <div style={{ textAlign: "center" }}>
                          <img
                            src="content/builder/images/access-control.png"
                            className="scale-with-grid"
                            width="90"
                            height="90"
                          />
                        </div>
                        <div style={{ padding: "5px", textAlign: "center" }}>
                          <h4>Automated Access Control</h4>
                          <div
                            className="desc"
                            style={{ textAlign: "justify" }}
                          >
                            All door-based accesses to the City buildings are
                            secured with biometric technologies.
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* One third (1/3) Column */}
                    <div className="column one-third column_list infrastructure">
                      <div className="list_item lists_2 clearfix">
                        <div style={{ textAlign: "center" }}>
                          <img
                            src="content/builder/images/fibre-optic.png"
                            className="scale-with-grid"
                            width="90"
                            height="90"
                          />
                        </div>
                        <div style={{ padding: "5px", textAlign: "center" }}>
                          <h4>Fibre Optics Infrastructure</h4>
                          <div
                            className="desc"
                            style={{ textAlign: "justify" }}
                          >
                            Strengthened high-frequency internet access made
                            possible the City's Fibre optics cable
                            installations.
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* One third (1/3) Column */}
                    {/* <div className="column one-third column_list infrastructure">
                      <div className="list_item lists_2 clearfix">
                        <div style={{ textAlign: "center" }}>
                          <img
                            src="content/builder/images/fence.png"
                            className="scale-with-grid"
                            width="90"
                            height="90"
                          />
                        </div>
                        <div style={{ padding: "5px", textAlign: "center" }}>
                          <h4>Perimeter Fence</h4>
                          <div
                            className="desc"
                            style={{ textAlign: "justify" }}
                          >
                            Fully fenced with electric barbed wires
                          </div>
                        </div>
                      </div>
                    </div> */}

                    {/* One third (1/3) Column */}
                    <div className="column one-third column_list infrastructure">
                      <div className="list_item lists_2 clearfix">
                        <div style={{ textAlign: "center" }}>
                          <img
                            src="content/builder/images/surveillance.png"
                            className="scale-with-grid"
                            width="90"
                            height="90"
                          />
                        </div>
                        <div style={{ padding: "5px", textAlign: "center" }}>
                          <h4>24/7 CCTV Surveillance</h4>
                          <div
                            className="desc"
                            style={{ textAlign: "justify" }}
                          >
                            Security cameras for surveillance of the City
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* One third (1/3) Column */}
                    <div className="column one-third column_list infrastructure">
                      <div className="list_item lists_2 clearfix">
                        <div style={{ textAlign: "center" }}>
                          <img
                            src="content/builder/images/power.png"
                            className="scale-with-grid"
                            width="90"
                            height="90"
                          />
                        </div>
                        <div style={{ padding: "5px", textAlign: "center" }}>
                          <h4>Constant Power Supply</h4>
                          <div
                            className="desc"
                            style={{ textAlign: "justify" }}
                          >
                            24/7 power supply
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* One third (1/3) Column */}
                    <div className="column one-third column_list infrastructure">
                      <div className="list_item lists_2 clearfix">
                        <div style={{ textAlign: "center" }}>
                          <img
                            src="content/builder/images/park.png"
                            className="scale-with-grid"
                            width="90"
                            height="90"
                          />
                        </div>
                        <div style={{ padding: "5px", textAlign: "center" }}>
                          <h4>Recreational Parks and Amenities</h4>
                          <div
                            className="desc"
                            style={{ textAlign: "justify" }}
                          >
                            Beautiful recreational Park for both adults and
                            children.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Site Progress */}
              <div className="section equal-height full-width sections_style_0 city-progress">
                <div className="section_wrapper clearfix">
                  <div className="items_group clearfix">
                    {/* One full width row */}
                    <div className="column one column_column">
                      <div
                        className="column_attr align_center"
                        style={{ marginBottom: "10vh" }}
                      >
                        <h2>The City Progress</h2>
                        <h5 style={{ color: "#444" }}>
                          The entire development sits on approximately 100
                          hectares of Land.
                        </h5>
                      </div>
                    </div>

                    {/* One Fourth (1/4) Column */}
                    <div
                      className="column one-third column_zoom_box box-shadow"
                      style={{ borderRadius: "20px", overflow: "hidden" }}
                    >
                      <div className="zoom_box">
                        <a href="content/builder/offer.html">
                          <div className="photo">
                            <img
                              className="scale-with-grid"
                              src="content/builder/images/news-update.png"
                              width="448"
                              height="546"
                            />
                          </div>
                          <div
                            className="desc"
                            style={{ backgroundColor: " rgba(7, 19, 35, 0.8)" }}
                          >
                            <div className="desc_wrap">
                              <div className="desc_img">
                                <img
                                  className="scale-with-grid"
                                  src="content/builder/images/home_builder_offer1.png"
                                />
                              </div>
                              <div className="desc_txt">Mauris ultricies</div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>

                    {/* One Fourth (1/4) Column */}
                    <div
                      className="column one-third column_zoom_box box-shadow"
                      style={{ borderRadius: "20px", overflow: "hidden" }}
                    >
                      <div className="zoom_box">
                        <a href="content/builder/offer.html">
                          <div className="photo">
                            <img
                              className="scale-with-grid"
                              src="content/builder/images/site-update.png"
                              width="448"
                              height="546"
                            />
                          </div>
                          <div
                            className="desc"
                            style={{ backgroundColor: "rgba(7, 19, 35, 0.8)" }}
                          >
                            <div className="desc_wrap">
                              <div className="desc_img">
                                <img
                                  className="scale-with-grid"
                                  src="content/builder/images/home_builder_offer3.png"
                                />
                              </div>
                              <div className="desc_txt">Donec vulputate</div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>

                    {/* One Fourth (1/4) Column */}
                    <div
                      className="column one-third column_zoom_box box-shadow"
                      style={{ borderRadius: "20px", overflow: "hidden" }}
                    >
                      <div className="zoom_box">
                        <a href="content/builder/offer.html">
                          <div className="photo">
                            <img
                              className="scale-with-grid"
                              src="content/builder/images/gallery.png"
                              width="448"
                              height="546"
                            />
                          </div>
                          <div
                            className="desc"
                            style={{ backgroundColor: "rgba(7, 19, 35, 0.8)" }}
                          >
                            <div className="desc_wrap">
                              <div className="desc_img">
                                <img
                                  className="scale-with-grid"
                                  src="content/builder/images/home_builder_offer3.png"
                                />
                              </div>
                              <div className="desc_txt">Donec vulputate</div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Video */}
              <div
                className="section"
                style={{ paddingTop: "60px", paddingBottom: "50px" }}
              >
                <div className="section_wrapper clearfix">
                  <div className="items_group clearfix">
                    {/* One full width row */}
                    <div className="column one column_column">
                      <div
                        className="column_attr align_center"
                        style={{
                          border: "15px solid #ffba004b",
                          borderRadius: "20px",
                          boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
                          overflow: "hidden",
                        }}
                      >
                        <iframe
                          id="video-frame"
                          src="https://www.youtube.com/embed/tgbNymZ7vqY"
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Our Partners */}
              <div
                className="section"
                style={{ paddingTop: "50px", paddingBottom: "0" }}
              >
                <div className="section_wrapper clearfix">
                  <div className="items_group clearfix">
                    {/* One full width row */}
                    <div className="column one column_column">
                      <div className="column_attr align_center">
                        <h2>Our Partners</h2>
                        <hr className="no_line hrmargin_b_30" />
                        <div className="image_frame image_item no_link scale-with-grid alignnone no_border">
                          <div className="image_wrapper">
                            <img
                              className="scale-with-grid"
                              src="content/builder/images/home_builder_sep.png"
                              width="41"
                              height="7"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* One Fourth (1/4) Column */}
                    <div className="column one-fourth column_column">
                      <div className="column_attr align_center">
                        <div className="image_frame image_item no_link scale-with-grid alignnone no_border">
                          <img
                            className="scale-with-grid"
                            src="content/builder/images/partner-1.png"
                          />
                        </div>
                      </div>
                    </div>
                    {/* One Fourth (1/4) Column */}
                    <div className="column one-fourth column_column">
                      <div className="column_attr align_center">
                        <div className="image_frame image_item no_link scale-with-grid alignnone no_border">
                          <img
                            className="scale-with-grid"
                            src="content/builder/images/partner-2.png"
                          />
                        </div>
                      </div>
                    </div>
                    {/* One Fourth (1/4) Column */}
                    <div className="column one-fourth column_column">
                      <div className="column_attr align_center">
                        <div className="image_frame image_item no_link scale-with-grid alignnone no_border">
                          <img
                            className="scale-with-grid"
                            src="content/builder/images/partner-3.png"
                          />
                        </div>
                      </div>
                    </div>
                    {/* One Fourth (1/4) Column */}
                    <div className="column one-fourth column_column">
                      <div className="column_attr align_center">
                        <div className="image_frame image_item no_link scale-with-grid alignnone no_border">
                          <img
                            className="scale-with-grid"
                            src="content/builder/images/partner-4.png"
                          />
                        </div>
                      </div>
                    </div>
                    {/* One Fourth (1/4) Column */}
                    <div className="column one-fourth column_column">
                      <div className="column_attr align_center">
                        <div className="image_frame image_item no_link scale-with-grid alignnone no_border">
                          <img
                            className="scale-with-grid"
                            src="content/builder/images/partner-5.png"
                          />
                        </div>
                      </div>
                    </div>
                    {/* One Fourth (1/4) Column */}
                    <div className="column one-fourth column_column">
                      <div className="column_attr align_center">
                        <div className="image_frame image_item no_link scale-with-grid alignnone no_border">
                          <img
                            className="scale-with-grid"
                            src="content/builder/images/partner-6.png"
                          />
                        </div>
                      </div>
                    </div>
                    {/* One Fourth (1/4) Column */}
                    <div className="column one-fourth column_column">
                      <div className="column_attr align_center">
                        <div className="image_frame image_item no_link scale-with-grid alignnone no_border">
                          <img
                            className="scale-with-grid"
                            src="content/builder/images/partner-7.png"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
}
