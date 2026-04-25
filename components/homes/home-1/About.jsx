import React from "react";
import Link from "next/link";
import Image from "next/image";
import Counter from "@/components/common/Counter";
export default function About() {
  return (
    <section className="flat-about">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div
              className="themesflat-spacer clearfix"
              data-desktop={121}
              data-mobile={60}
              data-smobile={60}
            />
          </div>
          <div className="col-lg-6">
            <div className="about-post center bd-radius-50-image">
              <Image
                className="main-post-about"
                alt="images"
                src="/images/home/the-girl-in-the-glasses.jpg"
                width={1138}
                height={1138}
              />
              <Image
                className="circel-inside"
                alt="images"
                src="/images/home/circle-about.png"
                width={151}
                height={151}
              />
              <div className="about-count-box themesflat-counter">
                <div className="box">
                  <div className="inner-about-count-box">
                    <span className="number-count number">
                      <Counter max={20} />
                    </span>
                    <div className="caption-number-count">
                      Years Of experience
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-content">
              <div className="about-content-title wow fadeInUp">
                <div className="section-subtitle">ABOUT US</div>
                <div className="section-title">
                  The Best Choice For your Business.
                </div>
                <div className="section-desc">
                  Lorem Ipsum is simply dummy text of free available market
                  typesetting industry has been the industry's standard dummy
                  text ever. Lorem Ipsum is simply dummy text of free available
                </div>
              </div>
              <div id="about-box" className="about-desc-box">
                <div className="about-desc">
                  <div className="about-box-nd1 wow fadeInLeft">
                    <span className="tf-icon icon-Group-660" />
                    <div className="inner-box">
                      <Link href={`/services`}>
                        <h3 className="section-heading-jost-size20 item-1">
                          Best Ui Designer
                        </h3>
                      </Link>
                      <p className="section-desc">Lorem Ipsum is simply</p>
                    </div>
                  </div>
                  <div className="about-box-nd1 wow fadeInLeft">
                    <span className="tf-icon icon-Group-661" />
                    <div className="inner-box">
                      <Link href={`/services`}>
                        <h3 className="section-heading-jost-size20 item-2">
                          Counter In Work.
                        </h3>
                      </Link>
                      <p className="section-desc">Lorem Ipsum is simply</p>
                    </div>
                  </div>
                </div>
                <div className="image-desc">
                  <Image
                    className="image"
                    alt="images"
                    src="/images/home/box-flowers-green-garden.jpg"
                    width={200}
                    height={192}
                  />
                </div>
              </div>
              <div className="button hover-up">
                <Link href={`/contact`} className="btn2">
                  Get A Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
