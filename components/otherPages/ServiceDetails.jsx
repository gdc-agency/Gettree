import React from "react";
import Image from "next/image";
export default function ServiceDetails() {
  return (
    <section className="flat-service-details">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div
              className="themesflat-spacer clearfix"
              data-desktop={117}
              data-mobile={60}
              data-smobile={60}
            />
          </div>
          <div className="col-md-4">
            <div className="side-bar-services-details mg-bottom30">
              <div className="widget-nav-tab">
                <ul className="tab-service link-style5">
                  <li>
                    <a className="active" href="#">
                      Graphics Design
                    </a>
                  </li>
                  <li>
                    <a href="#">ui/ux brand design</a>
                  </li>
                  <li>
                    <a href="#">web devolopment</a>
                  </li>
                  <li>
                    <a href="#">branding design</a>
                  </li>
                  <li>
                    <a href="#">ui/ux brand design</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="widget-contact-services-details mg-bottom-25">
              <div className="sidebar-title mg-bottom-25">
                <h2 className="section-heading-jost-size28 text-pri2-color">
                  Contact us
                </h2>
              </div>
              <ul className="widget-sidebar-contact-us text-pri2-color section-heading-rubik-size16">
                <li>
                  <span className="icon-author">Ceo:</span>
                  <span className="info-contact-us">Linko Bunt</span>
                </li>
                <li>
                  <span className="icon-telephone">Tel:</span>
                  <span className="info-contact-us">012 345 678 9101</span>
                </li>
                <li>
                  <span className="icon-location">Location:</span>
                  <span className="info-contact-us">US,street </span>
                </li>
                <li>
                  <span className="icon-email">Email:</span>
                  <span className="info-contact-us">yourmail@gmail.com</span>
                </li>
              </ul>
            </div>
            <div className="services-details-case-studio bd-radius-8">
              <h3 className="subtitle-case-studio section-heading-rubik-size16">
                CASE STUDIO
              </h3>
              <h2 className="title-case-studio section-heading-jost-size28 text-pri2-color">
                2021 Brochure
              </h2>
              <p className="section-desc mg-bottom-43">
                Lorem market standard dummy available market industry Lorem
                simply dummy text of free available market
              </p>
              <span>
                <a className="button-services btn-left" href="#">
                  DOWNLOAD
                </a>
              </span>
              <span>
                <a className="button-services btn-right" href="#">
                  DISCOVER
                </a>
              </span>
            </div>
            <div
              className="themesflat-spacer clearfix"
              data-desktop={0}
              data-mobile={30}
              data-smobile={30}
            />
          </div>
          <div className="col-md-8">
            <article className="content-service-details">
              <div className="post-service-details bd-radius-8-image mg-bottom-45">
                <Image
                  alt="imagess"
                  src="/images/services/smiley-colleagues-having-meeting-office.jpg"
                  width={770}
                  height={500}
                />
              </div>
              <h2 className="section-heading-jost-size34 text-pri2-color mg-bottom30">
                The gardening that matters.
              </h2>
              <p className="section-desc mg-bottom-20">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores
                et ea
              </p>
              <p className="section-desc mg-bottom-40">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem
              </p>
              <div className="services-item d-flex mg-bottom30">
                <div className="services-item-left mg-right-15">
                  <div className="services-box d-flex wow fadeInLeft mg-bottom-45">
                    <span className="icon-services icon-Group-660 bd-radius-8" />
                    <div className="inner-box">
                      <a href="#">
                        <h3 className="section-heading-jost-size20 item-1">
                          Design brand
                        </h3>
                      </a>
                      <p className="section-desc">
                        Lorem available market standard industry Lorem Ipsum
                        dummy.
                      </p>
                    </div>
                  </div>
                  <div className="post-inner-box">
                    <Image
                      alt="images"
                      src="/images/services/medium-shot-woman-holding-plant-pot.jpg"
                      width={370}
                      height={343}
                    />
                  </div>
                </div>
                <div className="services-item-right mg-left-15">
                  <div className="services-box d-flex wow fadeInLeft mg-bottom-45">
                    <span className="icon-services icon-tele-sale bd-radius-8" />
                    <div className="inner-box">
                      <a href="#">
                        <h3 className="section-heading-jost-size20 item-1">
                          Web develop
                        </h3>
                      </a>
                      <p className="section-desc">
                        Lorem available market standard industry Lorem Ipsum
                        dummy.
                      </p>
                    </div>
                  </div>
                  <div className="post-inner-box">
                    <Image
                      alt="images"
                      src="/images/services/box-flowers-green-garden.jpg"
                      width={370}
                      height={343}
                    />
                  </div>
                </div>
              </div>
              <div className="create-by-author center bd-radius-8">
                <h3 className="name-author section-heading-rubik-size20 mg-bottom-20">
                  D. JHON SHIKON MILON
                </h3>
                <h4 className="content-author">
                  Lorem Ipsum simply dummy text free available market the
                  typesetting industry.available standard text available market
                  industry
                </h4>
              </div>
            </article>
          </div>
          <div className="col-md-12">
            <div
              className="themesflat-spacer clearfix"
              data-desktop={172}
              data-mobile={100}
              data-smobile={60}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
