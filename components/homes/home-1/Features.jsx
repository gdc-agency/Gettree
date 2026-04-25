import React from "react";
import Link from "next/link";
import { features } from "@/data/features";
export default function Features() {
  return (
    <section className="flat-features">
      <div className="container-fluid">
        <div className="row">
          {features.map((feature) => (
            <div className="item-four-column" key={feature.id}>
              <div
                className={`inner-features hover-up wow ${feature.animation}`}
              >
                <div className="features-box">
                  <span className={feature.iconClass} />
                  <div className="content-features">
                    <Link href={`/service-details`}>
                      <h3 className="section-heading-rubik-size20">
                        {feature.title}
                      </h3>
                    </Link>
                    <p className="section-desc">{feature.description}</p>
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
