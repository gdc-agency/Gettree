import React from "react";
import Link from "next/link";
import { services3 } from "@/data/services";
export default function Services2() {
  return (
    <section className="flat-service-home2">
      <div className="service-home2-overlay" />
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div
              className="themesflat-spacer clearfix"
              data-desktop={142}
              data-mobile={60}
              data-smobile={60}
            />
            <div className="section-title-box center">
              <h5 className="section-subtitle white">WHAT WE DO</h5>
              <h2 className="section-title white">Services for You</h2>
            </div>
            <div
              className="themesflat-spacer clearfix"
              data-desktop={62}
              data-mobile={60}
              data-smobile={40}
            />
          </div>
        </div>
        <div className="row">
          {services3.map((service) => (
            <div className="item-four-column wow fadeInDown" key={service.id}>
              <article
                className={`service-box ${
                  service.id > 1 ? `service-box${service.id}` : ""
                } hover-up`}
              >
                <Link
                  href={`/service-details`}
                  className="section-heading-rubik-size20"
                >
                  {service.title}
                </Link>
                <h6 className="section-desc">{service.description}</h6>
                <hr
                  className={`service-line ${
                    service.id > 1 ? `line${service.id}` : ""
                  }`}
                />
                <span className={service.iconClass}>
                  {Array.from({ length: service.paths }, (_, index) => (
                    <span key={index} className={`path${index + 1}`} />
                  ))}
                </span>
              </article>
              <div
                className="themesflat-spacer clearfix"
                data-desktop={0}
                data-mobile={service.spacerMobile}
                data-smobile={service.spacerSmobile}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
