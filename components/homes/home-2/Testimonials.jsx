"use client";
import { testimonialData } from "@/data/testimonials";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
export default function Testimonials() {
  return (
    <section className="flat-testimonials-home2">
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <div
              className="themesflat-spacer clearfix"
              data-desktop={30}
              data-mobile={0}
              data-smobile={0}
            />
            <div className="testimonials-content-left">
              <div className="section-title-box">
                <h5 className="section-subtitle">CLIENT TESTIMONIALS</h5>
                <h2 className="section-title">What our clients say</h2>
              </div>
              <p className="section-desc mg-top-25">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
              </p>
            </div>
            <div
              className="themesflat-spacer clearfix"
              data-desktop={0}
              data-mobile={30}
              data-smobile={30}
            />
          </div>
          <div className="col-md-7">
            <div className="testimonials-content-right wow fadeInRight">
              <Image
                alt="images"
                src="/images/testimonials/young-beautiful-florist-watering-flowers.jpg"
                width={601}
                height={623}
              />
            </div>
          </div>
          <div className="col-md-8">
            <div className="row">
              <div
                className="owl-carousel-2 owl-theme author-carousel wow fadeInUp"
                style={{
                  maxWidth: "100%",
                  overflow: "hidden",
                }}
              >
                <Swiper
                  style={{
                    position: "relative",
                    maxWidth: "100%",
                    overflow: "hidden",
                  }}
                  spaceBetween={4}
                  slidesPerView={2}
                  breakpoints={{
                    0: { slidesPerView: 1 },
                    575: {
                      slidesPerView: 1,
                    },
                    768: {
                      slidesPerView: 2,
                    },
                  }}
                >
                  {testimonialData.map((item) => (
                    <SwiperSlide className="item" key={item.id}>
                      <div
                        className={`testimonials-author-box ${item.boxClass} bd-radius-8`}
                      >
                        <div className="testimonials-author">
                          <div className="testimonials-author-img">
                            <Image
                              className="bd-radius-50"
                              alt="images"
                              src={item.imageSrc}
                              width={item.imageWidth}
                              height={item.imageHeight}
                            />
                          </div>
                          <div className="testimonials-author-text">
                            <h4 className="section-desc-heading">
                              {item.authorName}
                            </h4>
                            <p className="section-desc">{item.authorRole}</p>
                          </div>
                        </div>
                        <div className="testimonials-text section-desc mg-top-25">
                          <p>{item.testimonialText}</p>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div
              className="themesflat-spacer clearfix"
              data-desktop={119}
              data-mobile={0}
              data-smobile={0}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
