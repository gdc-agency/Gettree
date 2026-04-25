import React from "react";
import Image from "next/image";
import { stats } from "@/data/facts";
import Counter from "@/components/common/Counter";
export default function Facts() {
  return (
    <section className="flat-counter">
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
          <div className="col-md-9">
            <div className="counter-content-left wow fadeInLeft">
              <Image
                className="background-counter"
                alt="images"
                src="/images/Counter/the-man-working-tree.jpg"
                width={870}
                height={540}
              />
              <div className="content-left-box">
                <h2 className="title-main">
                  We are nice people with a lot of experience.
                </h2>
                <p className="section-desc">
                  Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz,
                  vex nymphs. Waltz, bad nymph
                </p>
              </div>
            </div>
            <div
              className="themesflat-spacer clearfix"
              data-desktop={0}
              data-mobile={30}
              data-smobile={30}
            />
          </div>
          <div className="col-md-3">
            <div className="counter-content-right themesflat-counter wow fadeInRight">
              {stats.map((item, index) => (
                <div
                  key={index}
                  className={`content-right-box ${item.className} ${
                    index !== 2 ? "mg-bottom30" : ""
                  } `}
                >
                  <span className="title-main white number">
                    <Counter max={item.to} />
                  </span>
                  <span className="title-main white">{item.symbol}</span>
                  <h3
                    className={`section-heading-jost-size20 ${
                      index === 2 ? "mg-top-5" : ""
                    } fw-600`}
                  >
                    {item.text}
                  </h3>
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-12">
            <div
              className="themesflat-spacer clearfix"
              data-desktop={120}
              data-mobile={60}
              data-smobile={60}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
