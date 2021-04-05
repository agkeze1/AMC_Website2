import { Layout } from "../../components/Layout";
import { TitleSm } from "../../components/TitleSm";

export default function Project() {
  return (
    <Layout title="Home" bannerText="Projects">
      <div id="Content">
        <div className="content_wrapper clearfix">
          <div className="sections_group">
            <div className="entry-content">
              <div className="section sections_style_0">
                <div className="section_wrapper clearfix">
                  {/* Master Plan */}
                  <div className="items_group clearfix box-shadow2 p-50 br-10 mb-10">
                    <div className="column one">
                      <TitleSm title="Master Plan" />
                    </div>
                    {/* One Second (1/2) Column */}
                    <div className="column one-second column_column">
                      <div className="column_attr">
                        <img src="content/builder/images/projects/master-plan.jpg" />
                      </div>
                    </div>
                    {/* One Second (1/2) Column */}
                    <div className="column one-second column_column">
                      <div className="column_attr">
                        <p className="p-text">
                          The Awka Millennium City (AMC) is strategically
                          located in the Awka municipality within the environ of
                          the new Government State House and Secretariat Complex
                          .This fully equipped Millennium city is thoughtfully
                          designed with an array of amenities ranging from a
                          proper drainage system to pedestrian friendly
                          sidewalks. It has a commercial area, located within
                          walking distance of the homes.
                        </p>
                        <h4 className="title-text">
                          AMC is an iconic residential neighborhood offering:
                        </h4>
                        <div className="textwidget">
                          <ul className="footer_links txt-16">
                            <li>Gated and secure community</li>
                            <li>Estate management services</li>
                            <li>Constant power and water supply</li>
                            <li>
                              Modern access control and surveillance cameras
                            </li>
                            <li>Road and drainage networks</li>
                            <li>Recreational amenities and parks</li>
                            <li>Commercial areas</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Residential Plots */}
                  <div className="items_group clearfix box-shadow2 p-50 br-10 mb-10">
                    <div className="column one">
                      <TitleSm title="Residential Plots" />
                    </div>
                    {/* One Second (1/2) Column */}
                    <div className="column one-second column_column">
                      <div
                        className="column_attr"
                        style={{ padding: "50px 8% 10px" }}
                      >
                        <img src="content/builder/images/projects/residential-plot.png" />
                      </div>
                    </div>
                    {/* One Second (1/2) Column */}
                    <div className="column one-second column_column">
                      <div className="column_attr">
                        <h4 className="title-text">Residential Plots</h4>
                        <div className="textwidget">
                          <ul className="footer_links txt-16">
                            <li>Low density residential area</li>
                            <li>Medium density residential area</li>
                            <li>High density residential area</li>
                          </ul>
                        </div>
                        <h4 className="title-text">
                          Low Density Residential Area
                        </h4>
                        <p className="p-text">
                          The residential plots available in the low density
                          residential area of the community constitutes premium
                          1000sqm plots. These plots will be allocated solely
                          for the purpose of accommodating single family homes.
                          This plots will also be referred to as Villa Plots.
                        </p>
                        <h4 className="title-text">
                          Medium Density Residential Area
                        </h4>
                        <p className="p-text">
                          This area of the residential community boasts of
                          500sqm plots which are solely for accommodating single
                          family homes. These plots are referred to as Standard
                          Plots.
                        </p>
                        <h4 className="title-text">
                          High Density Residential Area
                        </h4>
                        <p className="p-text">
                          This area of the residential community will consist of
                          various size plots designed to accommodate various
                          kinds of multiple family homes such as apartment
                          buildings, terrace buildings etc.
                        </p>
                        <h4 className="title-text">Exclusive Enclave</h4>
                        <p className="p-text">
                          This is an exclusive enclave within AMC which will sit
                          plots of 2000sqm and above collocated amongst each
                          other. This area will boast its own ”central park”,
                          and also have its dedicated access control for people
                          the live within the enclave. It is limited to about 40
                          plots.
                        </p>
                      </div>
                    </div>
                    <div className="column one">
                      <img
                        src="content/builder/images/projects/res-plots-img.jpg"
                        alt=""
                        style={{
                          width: "100%",
                          border: "15px solid #ffba0040",
                          borderRadius: "20px",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
