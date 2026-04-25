"use client";

import { blogData } from "@/data/blogs";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
export default function Blogs() {
  return (
    <section className="flat-blog-home01">
      <div className="container">
        <div className="row">
          <div className="section-title-box">
            <h4 className="section-subtitle wow fadeInUp">LATEST NEWS</h4>
            <h2 className="section-title wow fadeInUp">
              Our Insights &amp; Articles
            </h2>
          </div>
          <div className="col-md-12">
            <div className="slide-blog-content">
              <Swiper
                className="owl-carousel owl-theme"
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
                {blogData.map((item, i) => (
                  <SwiperSlide className="item wow fadeInUp" key={i}>
                    <div
                      className={`blog-item ${item.backgroundClass} hover-up-style2`}
                    >
                      <div className="item-overlay" />
                      <div className={`item-box ${item.boxClass}`}>
                        <div className="content-info">
                          <Link href={`/blog`} className={item.folderClass}>
                            {item.folderText}
                          </Link>
                        </div>
                        <div className="link-style6">
                          <div className="content-info margin-top">
                            <Link href={`/blog-detail`} className="user">
                              By Admin
                            </Link>
                          </div>
                          <Link
                            href={`/blog-detail`}
                            className="section-heading-jost-size20"
                          >
                            {item.title}
                          </Link>
                        </div>
                        <hr className="line-blog-item" />
                        <h4 className="sub-title">{item.date}</h4>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div className="col-md-12">
            <div
              className="themesflat-spacer clearfix"
              data-desktop={0}
              data-mobile={60}
              data-smobile={0}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
