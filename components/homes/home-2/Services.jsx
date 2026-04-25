import React from "react";
import Image from "next/image";
import Link from "next/link";
import { services2 } from "@/data/services";
export default function Services() {
  return (
    <section className="flat-why-choose-us">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div
              className="themesflat-spacer clearfix"
              data-desktop={232}
              data-mobile={200}
              data-smobile={300}
            />
            <div className="section-title-box">
              <h5 className="section-subtitle">WHY CHOOSE US</h5>
              <h2 className="section-title">Experts Trusted Us</h2>
            </div>
            <div
              className="themesflat-spacer clearfix"
              data-desktop={63}
              data-mobile={60}
              data-smobile={40}
            />
          </div>
        </div>
        <div className="row">
          {services2.map((service) => (
            <div
              className={`item-three-column mg-bottom-20 wow ${service.animation}`}
              key={service.id}
            >
              <article className="flat-WCU-box grow-up-hover">
                <div className="WCU-image">
                  <Image
                    className="grow-up-hover"
                    alt="images"
                    src={service.imageSrc}
                    width={370}
                    height={240}
                  />
                </div>
                <div className="features-box">
                  <span className={service.iconClass} />
                  <div className="content-features">
                    <Link href={`/service-details`}>
                      <h3 className="section-heading-rubik-size20">
                        {service.title}
                      </h3>
                    </Link>
                    <h6 className="section-desc">{service.description}</h6>
                  </div>
                </div>
                <div className="button-read-more link-style2">
                  <Link
                    href={`/service-details`}
                    className="read-more btn-read-more"
                  >
                    Read More
                  </Link>
                </div>
              </article>
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col-md-12">
            <div
              className="themesflat-spacer clearfix"
              data-desktop={128}
              data-mobile={60}
              data-smobile={60}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
