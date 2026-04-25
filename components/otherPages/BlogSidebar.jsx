import { blogThumbnails } from "@/data/blogs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function BlogSidebar() {
  return (
    <div className="side-bar">
      <div className="widgets-search">
        <h3 className="widgets-side-bar-title">Search</h3>
        <div className="widgets-input">
          <form method="get" role="search" className="search-form">
            <input
              type="search"
              className="search-field"
              placeholder="Search here"
              defaultValue=""
              name="s"
              title="Search for"
            />
            <button className="search-submit" type="submit" title="Search" />
          </form>
        </div>
      </div>
      <div className="widgets-category">
        <h3 className="widgets-side-bar-title">Category</h3>
        <ul className="list-category">
          <li>
            <a href="#">Tempor lorem interdum</a>
          </li>
          <li>
            <a href="#">Auctor mattis lacus </a>
          </li>
          <li>
            <a href="#">Dolor proin </a>
          </li>
          <li>
            <a href="#">Pharetra amet </a>
          </li>
          <li>
            <a href="#">Nullam dolor gravida </a>
          </li>
        </ul>
      </div>
      <div className="widget widget_lastest">
        <h2 className="widgets-side-bar-title">
          <span>Recent News</span>
        </h2>
        <ul className="lastest-posts data-effect clearfix">
          {blogThumbnails.map((item) => (
            <li key={item.id} className="clearfix">
              <div className="thumb data-effect-item has-effect-icon">
                <Image alt="Image" src={item.imageSrc} width={75} height={70} />
              </div>
              <div className="text">
                <h3>
                  {/* Hardcoded link */}
                  <Link href="/blog-detail" className="title-thumb">
                    {item.title}
                  </Link>
                </h3>
                <a href="#" className="date">
                  {item.date}
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {/* /.widget_lastest */}
      <div className="widgets-contact-info">
        <div className="contact-info-img">
          <Image
            alt="image"
            src="/images/blog/young-beautiful-florist-watering-flowers.jpg"
            width={370}
            height={320}
          />
        </div>
        <div className="contact-info-box">
          <div className="contact-info-content">
            <div className="call-us">
              <div className="icon-call-us" />
              <div className="content-call-us">
                <h4 className="heading-16px-rubik">Call Us</h4>
                <h4 className="heading-16px-rubik">360-779-22289</h4>
              </div>
            </div>
            <div className="our-mail">
              <div className="icon-our-mail" />
              <div className="content-our-mail">
                <h4 className="heading-16px-rubik">Our Mail</h4>
                <h4 className="heading-16px-rubik">yourname@mail.com</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
