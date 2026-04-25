import React from "react";
import Link from "next/link";
import Image from "next/image";
import { portfolioItems2 } from "@/data/portfolio";
export default function CaseStudy() {
  return (
    <section className="flat-case-study">
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
          {portfolioItems2.map((item, i) => (
            <div key={item.id} className="col-md-6">
              <div
                className={`list-box-profolio wow ${i == 0 ? "active" : ""} ${
                  item.animation
                }`}
              >
                <div className="image-profolio">
                  <Image
                    alt="images"
                    src={item.imageSrc}
                    width={570}
                    height={600}
                  />
                  <div className={`profolio-show  ${i == 0 ? "active" : ""} `}>
                    <div className="profolio-info">
                      <div className="info">
                        {/* Hardcoded link */}
                        <Link href="/case-details">
                          <h3 className="section-heading-jost-size20">
                            {item.title}
                          </h3>
                        </Link>
                        <p className="desc-box">{item.description}</p>
                      </div>
                      <div className="button-next">
                        {/* Hardcoded link */}
                        <Link className="profolio-btn" href="/case-details" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="themesflat-spacer clearfix"
                data-desktop={30}
                data-mobile={30}
                data-smobile={30}
              />
            </div>
          ))}
          <div className="col-md-12">
            <div
              className="themesflat-spacer clearfix"
              data-desktop={145}
              data-mobile={60}
              data-smobile={60}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
