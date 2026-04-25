import Link from "next/link";
import React from "react";

export default function Pagetitle({ pageName = "About Us" }) {
  return (
    <div className="page-title">
      <div className="container-fluid">
        <div className="row">
          <div className="inner-title">
            <div className="overlay-image" />
            <div className="banner-title">
              <div className="page-title-heading">{pageName}</div>
              <div className="page-title-content link-style6">
                <span>
                  <Link className="home" href={`/`}>
                    Home
                  </Link>
                </span>
                <span className="page-title-content-inner">{pageName}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
