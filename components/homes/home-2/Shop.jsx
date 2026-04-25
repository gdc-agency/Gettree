import React from "react";
import Image from "next/image";
import { shopItems } from "@/data/shoop";
export default function Shop() {
  return (
    <section className="flat-shop">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-title-box center">
              <h5 className="section-subtitle">OUR GARDEN STORE</h5>
              <h2 className="section-title">Features Product</h2>
            </div>
            <div
              className="themesflat-spacer clearfix"
              data-desktop={65}
              data-mobile={60}
              data-smobile={40}
            />
          </div>
          <div className="col-md-12">
            <ul className="tf-shop-item wow fadeInDown">
              {shopItems.map((item) => (
                <li key={item.id}>
                  <div className="shop-item-box">
                    <div className="image-item">
                      <Image
                        alt="images"
                        src={item.imageSrc}
                        width={270}
                        height={279}
                      />
                      <div className="list-icon-hidden">
                        <ul className={`widgets-icon-item ${item.activeClass}`}>
                          <li>
                            <a
                              href="#"
                              className={`item-add-to-cart ${item.cartActiveClass}`}
                            />
                          </li>
                          <li>
                            <a href="#" className="item-add-to-wishlist" />
                          </li>
                          <li>
                            <a href="#" className="item-compare" />
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="content-item">
                      <a href="#" className="section-heading-jost-size20">
                        {item.name}
                      </a>
                      <div className="price-item">{item.price}</div>
                    </div>
                  </div>
                  <div
                    className="themesflat-spacer clearfix"
                    data-desktop={0}
                    data-mobile={25}
                    data-smobile={15}
                  />
                </li>
              ))}
            </ul>
          </div>
          <div className="col-md-12">
            <div
              className="themesflat-spacer clearfix"
              data-desktop={118}
              data-mobile={0}
              data-smobile={0}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
