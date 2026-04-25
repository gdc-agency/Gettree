import React from "react";
import Image from "next/image";
export default function About() {
  return (
    <section className="flat-about-home2">
      <div className="container-fluid">
        <div className="row">
          <div className="image-about-home2">
            <Image
              alt="images"
              src="/images/home/close-up-planting-flowers-pot.jpg"
              width={645}
              height={739}
            />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div
                  className="themesflat-spacer clearfix"
                  data-desktop={148}
                  data-mobile={60}
                  data-smobile={60}
                />
                <div className="about-content-left themesflat-counter">
                  <h5 className="section-subtitle">ABOUT US</h5>
                  <h2 className="section-title">Nurture The environment</h2>
                  <p className="section-desc">
                    Lorem Ipsum is simply dummy text of free available market
                    typesetting industry has been the industry's standard dummy
                  </p>
                  <div className="about-history-box wow fadeInLeft">
                    <div className="icon-about">
                      <span className="tf-icon-about icon-admin-sys" />
                      <div className="about-count-year section-heading-jost-size20 fw-600">
                        25 YEARS
                      </div>
                    </div>
                    <p className="section-desc about-box-right">
                      Lorem Ipsum is simply dummy text of free available market
                      type setting industry
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-5">
                <div
                  className="themesflat-spacer clearfix"
                  data-desktop={121}
                  data-mobile={100}
                  data-smobile={80}
                />
                <div className="about-content-right wow fadeInRight">
                  <div className="about-right-list link-style3">
                    <div className="features-box">
                      <span className="icon-about-right" />
                      <div className="content-features">
                        <h3 className="section-heading-jost-size20 fw-600">
                          Ligula molestie
                        </h3>
                        <p className="section-desc white">
                          Dolor sit amet onsectetur adipisicing elit, sed do
                          eiusmod tempor incididunt
                        </p>
                      </div>
                    </div>
                    <div className="features-box box-2">
                      <span className="icon-about-right" />
                      <div className="content-features">
                        <h3 className="section-heading-jost-size20 fw-600">
                          Magna vivamus
                        </h3>
                        <p className="section-desc white">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod
                        </p>
                      </div>
                    </div>
                    <div className="features-box box-2">
                      <span className="icon-about-right" />
                      <div className="content-features">
                        <h3 className="section-heading-jost-size20 fw-600">
                          Efficitur velit
                        </h3>
                        <p className="section-desc white">
                          Consectetur adipisicing elised do eiusmod tempor
                          incididunt ut labore
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="themesflat-spacer clearfix"
                  data-desktop={0}
                  data-mobile={60}
                  data-smobile={60}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
