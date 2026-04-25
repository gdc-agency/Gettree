import React from "react";
import Image from "next/image";
export default function CaseStudyDetails() {
  return (
    <section className="flat-case-details">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h3 className="section-heading-jost-size46 fw-500 text-pri2-color center mg-bottom-50">
              Project title
            </h3>
            <p className="section-desc center mg-bottom-40">
              Lorem Ipsum is simply dummy text of free available in market
              printing typesetting industry has been industry's standard ever.
              Lorem Ipsum is simply dummy text of free available in market
              typesetting industry has been the industry's standard dummy text
              ever. Lorem Ipsum is simply dummy text of free available in market
              the printing and typesetting industry industry's standard dumm.
            </p>
            <div className="post-case-details">
              <Image
                alt=""
                src="/images/services/medium-shot-woman-plant-pot.jpg"
                width={1170}
                height={740}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="services-box mg-bottom-35 wow fadeInLeft">
              <div className="features-box">
                <span className="tf-icon icon-Group-660">
                  <span className="ripple" />
                </span>
                <div className="content-features">
                  <a href="#">
                    <h3 className="section-heading-jost-size28 mg-bottom-8">
                      Company Gather.
                    </h3>
                  </a>
                  <p className="section-desc">
                    Lorem Ipsum is simply dummy available typesetting industry
                    been the industry standard Lorem Ipsum
                  </p>
                </div>
              </div>
              <div className="post-inner-box">
                <Image
                  alt="images"
                  src="/images/services/close-up-planting-flowers-pot.jpg"
                  width={567}
                  height={438}
                />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="services-box mg-bottom-35 wow fadeInLeft">
              <div className="features-box">
                <span className="tf-icon icon-admin-sys">
                  <span className="ripple" />
                </span>
                <div className="content-features">
                  <a href="#">
                    <h3 className="section-heading-jost-size28 mg-bottom-8">
                      Company Details.
                    </h3>
                  </a>
                  <p className="section-desc">
                    Lorem Ipsum is simply dummy text free available typesetting
                    industry been the industry simply
                  </p>
                </div>
              </div>
              <div className="post-inner-box">
                <Image
                  alt="images"
                  src="/images/services/portrait-smiling-young-woman-holding-colorful-petunias-wooden-crate.jpg"
                  width={567}
                  height={438}
                />
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <p className="section-desc mg-bottom-22">
              Lorem Ipsum is simply dummy text of free available in market
              printing typesetting industry has been industry's standard ever.
              Lorem Ipsum is simply dummy text of free available in market
              typesetting industry has been the industry's standard dummy text
              ever. Lorem Ipsum is simply dummy text of free available in market
              the printing and typesetting industry industry's standard dumm
              dummy text ever. Lorem Ipsum is simply dummy.
            </p>
            <p className="section-desc">
              Lorem Ipsum is simply dummy text of free available in market
              printing typesetting industry has been industry's standard ever.
              Lorem Ipsum is simply dummy text of free available in market
              typesetting industry has been the industry's standard.
            </p>
            <div
              className="themesflat-spacer clearfix"
              data-desktop={75}
              data-mobile={30}
              data-smobile={30}
            />
          </div>
          <div className="col-md-3">
            <div className="author-post">
              <Image
                alt="images"
                src="/images/services/portrait-woman-gardening.jpg"
                width={304}
                height={296}
              />
            </div>
          </div>
          <div className="col-md-9">
            <div className="author-note bd-radius-8">
              <h4 className="author-name section-heading-rubik-size16 fw-500 text-pri2-color">
                D.JHON SHIKON
              </h4>
              <p className="author-desc">
                Lorem Ipsum is simply dummy text of free available in market the
                printing and typesetting industry has been the industry's
                standard dummy text ever.
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="post-tags-socials">
              <div className="post-tags">
                <span className="section-heading-rubik-size18 text-pri-color mg-right-15">
                  Tag:
                </span>
                <a className="section-heading-rubik-size12 fw-500" href="#">
                  design
                </a>
                <a className="section-heading-rubik-size12 fw-500" href="#">
                  ui/ux design
                </a>
                <a className="section-heading-rubik-size12 fw-500" href="#">
                  graphics
                </a>
                <a className="section-heading-rubik-size12 fw-500" href="#">
                  icon
                </a>
              </div>
              <div className="post-socials">
                <a href="#" className="skype">
                  <span className="fa fa-skype" />
                </a>
                <a href="#" className="facebook">
                  <span className="fa fa-facebook" />
                </a>
                <a href="#" className="instagram">
                  <span className="fa fa-instagram" />
                </a>
                <a href="#" className="twitter">
                  <span className="fa fa-twitter" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
