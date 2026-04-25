import React from "react";
import Link from "next/link";
export default function Services() {
  return (
    <section className="flat-services">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-title-box">
              <h4 className="section-subtitle">WHAT WE DO</h4>
              <h2 className="section-title">
                What You Can Do
                <br />
                with Gettree
              </h2>
            </div>
          </div>
          <div className="col-md-12">
            <div
              className="themesflat-spacer clearfix"
              data-desktop={67}
              data-mobile={60}
              data-smobile={60}
            />
          </div>
          <div className="item-four-column">
            <div className="our-services-box hover-up-style2 mg-bottom30 wow fadeInDown">
              <div className="our-services-overlay" />
              <span className="tf-icon icon-size icon-icon-farming-layer">
                <span className="path1" />
                <span className="path2" />
                <span className="path3" />
                <span className="path4" />
                <span className="path5" />
              </span>
              <div className="content-features">
                <Link href={`/service-details`}>
                  <h3 className="section-heading-jost-size22">Landscaping</h3>
                </Link>
                <p className="section-desc">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat,
                </p>
                <div className="link2 link-style2">
                  <Link href={`/service-details`} className="read-more">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="item-four-column">
            <div className="our-services-box mg-bottom30 wow fadeInUp">
              <div className="our-services-overlay active" />
              <span className="tf-icon icon-size3 icon-Group-7527">
                <span className="path1" />
                <span className="path2" />
                <span className="path3" />
              </span>
              <div className="content-features link-style3">
                <Link href={`/service-details`}>
                  <h3 className="section-heading-jost-size22">
                    Pruning plants
                  </h3>
                </Link>
                <p className="section-desc white">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat,
                </p>
                <div className="link2 link-style3">
                  <Link href={`/service-details`} className="read-more">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="item-four-column">
            <div className="our-services-box hover-up-style2 wow fadeInLeft">
              <div className="our-services-overlay" />
              <span className="tf-icon icon-size2 icon-Group-7526">
                <span className="path1" />
                <span className="path2" />
                <span className="path3" />
                <span className="path4" />
                <span className="path5" />
                <span className="path6" />
              </span>
              <div className="content-features">
                <Link href={`/service-details`}>
                  <h3 className="section-heading-jost-size22">
                    Irrigation &amp; Drainage
                  </h3>
                </Link>
                <p className="section-desc">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat,
                </p>
                <div className="link2 link-style2">
                  <Link href={`/service-details`} className="read-more">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="item-four-column">
            <div className="our-services-box hover-up-style2 wow fadeInRight">
              <div className="our-services-overlay" />
              <span className="tf-icon icon-size4 icon-Group-7528">
                <span className="path1" />
                <span className="path2" />
                <span className="path3" />
              </span>
              <div className="content-features">
                <Link href={`/service-details`}>
                  <h3 className="section-heading-jost-size22">
                    Garden Maintenance
                  </h3>
                </Link>
                <p className="section-desc">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat,
                </p>
                <div className="link2 link-style2">
                  <Link href={`/service-details`} className="read-more">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
