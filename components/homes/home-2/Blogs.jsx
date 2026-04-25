"use client";
import { newsData } from "@/data/blogs";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
export default function Blogs() {
  return (
    <section className="flat-news-home2">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-sm-6">
            <div className="section-title-box">
              <h5 className="section-subtitle">LATEST NEWS</h5>
              <h2 className="section-title">Our Insights &amp; Articles</h2>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="button-news mg-top-20">
              <Link href={`/blog`} className="button-style-2 btn-2 f-right">
                See all
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div
              className="themesflat-spacer clearfix"
              data-desktop={55}
              data-mobile={50}
              data-smobile={30}
            />
            <Swiper
              className="owl-carousel owl-theme author-carousel wow fadeInUp"
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
              {newsData.map((item, i) => (
                <SwiperSlide className="item" key={i}>
                  <article className="flat-news-box grow-up-hover">
                    <div className="news-image bd-radius-8">
                      <Image
                        className="grow-up-hover"
                        alt="images"
                        src={item.imageSrc}
                        width={item.imageWidth}
                        height={item.imageHeight}
                      />
                    </div>
                    <div className="news-content-box bd-radius-8">
                      <div className="news-date link-style2">
                        <Link
                          href={`/blog`}
                          className="section-heading-rubik-size14"
                        >
                          {item.date}
                        </Link>
                      </div>
                      <ul className="mg-top-15 mg-bottom5 d-flex">
                        <li>
                          <Link
                            href={`/blog-detail`}
                            className="user section-heading-rubik-size12"
                          >
                            {item.author}
                          </Link>
                        </li>
                        <li>
                          <Link
                            href={`/blog`}
                            className="folder section-heading-rubik-size12"
                          >
                            {item.category}
                          </Link>
                        </li>
                      </ul>
                      <Link
                        href={`/blog-detail`}
                        className="section-heading-rubik-size20 fw-500"
                      >
                        {item.title}
                      </Link>
                      <div className="news-read-more link-style2 mg-top-15">
                        <Link
                          href={`/blog-detail`}
                          className="news-rm section-heading-rubik-size16"
                        >
                          READ MORE
                        </Link>
                      </div>
                    </div>
                  </article>
                </SwiperSlide>
              ))}
            </Swiper>
            <div
              className="themesflat-spacer clearfix"
              data-desktop={127}
              data-mobile={60}
              data-smobile={60}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
