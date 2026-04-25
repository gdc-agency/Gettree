import React from "react";

export default function Topbar() {
  return (
    <div className="top-header">
      <div className="container-fluid">
        <div className="row">
          <div className="col md-4">
            <div className="top-bar-left">
              <p className="top-location">2072 Pinnickinick Street, WA 98370</p>
            </div>
          </div>
          <div className="col md-8">
            <div className="top-bar-right link-style3">
              <a href="#" className="top-mail">
                info@website.com
              </a>
              <ul className="widgets-nav-social">
                <li>
                  <a href="#">
                    <i className="fa fa-facebook" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-twitter" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-google-plus" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-instagram" aria-hidden="true" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
