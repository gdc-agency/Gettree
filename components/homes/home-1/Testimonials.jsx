"use client";
import { testimonials } from "@/data/testimonials";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
export default function Testimonials() {
  return (
    <section className="flat-testimonials">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div
              className="themesflat-spacer clearfix"
              data-desktop={119}
              data-mobile={60}
              data-smobile={0}
            />
            <div className="section-title-box">
              <h4 className="section-subtitle wow fadeInUp">
                CLIENT TESTIMONIALS
              </h4>
              <h2 className="section-title">What our clients say</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Swiper
              className="owl-carousel owl-theme wow fadeInUp"
              spaceBetween={30}
              breakpoints={{
                0: { slidesPerView: 1 },
                575: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                992: {
                  slidesPerView: 3,
                },
              }}
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide className="list-testimonials" key={index}>
                  <div className="box-item">
                    <div
                      className={`box-item-overlay ${
                        testimonial.overlayActive ? "active" : ""
                      }`}
                    />
                    <div className="staff-img">
                      <Image
                        alt="images"
                        src={testimonial.imgSrc}
                        width={testimonial.imgWidth}
                        height={testimonial.imgHeight}
                      />
                    </div>
                    <p className="section-desc mg-bottom-15">
                      {testimonial.desc}
                    </p>
                    <h4 className="section-desc-heading">{testimonial.name}</h4>
                    <p className="section-desc des-2">{testimonial.position}</p>
                    <div className="icon-box">
                      <a className="icon-inner-box" />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
