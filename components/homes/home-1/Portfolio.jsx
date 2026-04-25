import React from "react";
import Link from "next/link";
import Image from "next/image";
import { portfolioItems } from "@/data/portfolio";
export default function Portfolio() {
  return (
    <section className="flat-profolio">
      <div className="container-fluid">
        <div className="row">
          {portfolioItems.map((item) => (
            <div className="item-four-column" key={item.id}>
              <div className={`list-box-profolio wow ${item.animation}`}>
                <div className="image-profolio bd-radius-8-image">
                  <Image
                    alt="images"
                    src={item.imageSrc}
                    width={420}
                    height={480}
                  />
                  <div
                    className={`profolio-show ${item.active ? "active" : ""}`}
                  >
                    <div className="profolio-info">
                      <div className="info">
                        <Link href={`/case-details`}>
                          <h3 className="section-heading-jost-size20">
                            {item.title}
                          </h3>
                        </Link>
                        <p className="desc-box">{item.description}</p>
                      </div>
                      <div className="button-next">
                        <Link className="profolio-btn" href={`/case-details`} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
