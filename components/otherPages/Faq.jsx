"use client";

import { faqs } from "@/data/faqs";
import { useState } from "react";

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="flat-faq">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="widgets-category">
              <ul className="list-category">
                <li>
                  <a className="active" href="#">
                    Payments
                  </a>
                </li>
                <li>
                  <a href="#">Booking</a>
                </li>
                <li>
                  <a href="#">Mattis urna sit </a>
                </li>
                <li>
                  <a href="#">Molestie vel augue </a>
                </li>
                <li>
                  <a href="#">Eros odio </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-8">
            <div
              className="themesflat-spacer clearfix"
              data-desktop={0}
              data-mobile={20}
              data-smobile={20}
            />
            <div className="flat-accordion">
              {faqs.map((item, index) => (
                <div key={index} className="flat-toggle text-pri2-color">
                  <h6
                    className={`toggle-title section-heading-rubik-size16 fw-500 ${
                      activeIndex === index ? "active" : ""
                    }`}
                    onClick={() => handleToggle(index)}
                  >
                    {item.question}
                  </h6>
                  <div
                    className="toggle-content section-desc"
                    style={{
                      display: activeIndex === index ? "block" : "none",
                    }}
                  >
                    <p>{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-12">
            <div
              className="themesflat-spacer clearfix"
              data-desktop={60}
              data-mobile={60}
              data-smobile={0}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
