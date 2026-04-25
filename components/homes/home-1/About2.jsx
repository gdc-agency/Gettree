import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function About2() {
  return (
    <section className="flat-about-2nd">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <div className="row">
              <div className="content-left">
                <div className="tag-logo">
                  <Image
                    alt="images"
                    src="/icon/logo-dark.png"
                    width={174}
                    height={58}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="content-right link-style3">
              <h4 className="section-subtitle white wow fadeInUp">ABOUT US</h4>
              <h3 className="section-title white wow fadeInUp">
                We Have The Perfect soluion For You
              </h3>
              <p className="section-desc white wow fadeInUp">
                Lorem Ipsum is simply dummy text of free available in market the
                typesetting industry has been the industry's standard dummy text
                ever. Lorem Ipsum is simply dummy text of free available in
                market the printing
              </p>
              <div className="box">
                <div className="about-box wow fadeInLeft">
                  <div className="about-box01">
                    <div className="icon-box01">
                      <span className="section-heading-jost-size20 icon">
                        01
                      </span>
                    </div>
                    <div className="content-box01">
                      <Link
                        href={`/services`}
                        className="section-heading-jost-size20 fw-600"
                      >
                        Counter In Work.
                      </Link>
                      <p className="section-desc white">Lorem Ipsum is</p>
                    </div>
                  </div>
                  <div className="about-box-list">
                    <ul className="list-box">
                      <li>
                        <Link href={`/service-details`}>
                          available in market the printing
                        </Link>
                      </li>
                      <li>
                        <Link href={`/service-details`}>
                          Lorem Ipsum simply dummy
                        </Link>
                      </li>
                      <li>
                        <Link href={`/service-details`}>
                          market the printing
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="about-box wow fadeInRight">
                  <div className="about-box02">
                    <div className="icon-box02">
                      <span className="section-heading-jost-size20 icon">
                        02
                      </span>
                    </div>
                    <div className="content-box02">
                      <Link
                        href={`/services`}
                        className="section-heading-jost-size20 fw-600"
                      >
                        Counter In Work.
                      </Link>
                      <p className="section-desc white">Lorem Ipsum is</p>
                    </div>
                  </div>
                  <div className="about-box-list2">
                    <ul className="list-box">
                      <li>
                        <Link href={`/service-details`}>
                          market the printing typesetting
                        </Link>
                      </li>
                      <li>
                        <Link href={`/service-details`}>
                          available in market the printing
                        </Link>
                      </li>
                      <li>
                        <Link href={`/service-details`}>
                          Lorem Ipsum simply free
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* subcribe */}
      <div className="subcribe-about wow fadeInUp">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="subcribe-box">
                <div className="inner-subcribe-box">
                  <div className="col-md-5">
                    <h2 className="heading-subcribe">
                      Get notified about the event! Subscribe today
                    </h2>
                  </div>
                  <div className="col-md-7">
                    <form method="post" className="form-subcribe">
                      <input
                        type="email"
                        name="email"
                        className="input-subcribe"
                        placeholder="Email Address"
                        required
                      />
                      <button type="submit" className="btn-subcribe">
                        Subsrcibe
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-12">
        <div
          className="themesflat-spacer clearfix"
          data-desktop={0}
          data-mobile={60}
          data-smobile={60}
        />
      </div>
    </section>
  );
}
