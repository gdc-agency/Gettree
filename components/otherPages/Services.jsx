import React from "react";
import Link from "next/link";
import Image from "next/image";
import { serviceItems } from "@/data/services";
export default function Services() {
  return (
    <section className="flat-why-choose-us">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div
              className="themesflat-spacer clearfix"
              data-desktop={120}
              data-mobile={60}
              data-smobile={60}
            />
          </div>
        </div>
        <div className="row">
          {serviceItems.map((item) => (
            <div
              key={item.id}
              className={`item-three-column mg-bottom-60 wow ${item.animation}`}
            >
              <article className="flat-WCU-box grow-up-hover">
                <div className="WCU-image">
                  <Image
                    className="grow-up-hover"
                    alt="images"
                    src={item.imageSrc}
                    width={370}
                    height={240}
                  />
                </div>
                <div className="features-box">
                  <span className={item.icon} />
                  <div className="content-features">
                    {/* Hardcoded link */}
                    <Link href="/service-details">
                      <h3 className="section-heading-rubik-size20">
                        {item.title}
                      </h3>
                    </Link>
                    <h6 className="section-desc">{item.description}</h6>
                  </div>
                </div>
                <div className="button-read-more link-style2">
                  {/* Hardcoded link */}
                  <Link
                    href="/service-details"
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
              data-desktop={120}
              data-mobile={100}
              data-smobile={100}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
