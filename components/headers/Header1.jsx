"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import toggleSearch from "@/utlis/toggleSearch";
import Nav from "./Nav";
import MobileMenuToggle from "./MobileMenuToggle";
import MobileNav from "./MobileNav";
export default function Header1() {
  return (
    <div className="flat-header-box">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="container">
              <div className="row">
                <div className="top-header1">
                  <div className="top-header-inner">
                    <div className="top-bar-left">
                      <span className="top-location">
                        2072 Pinnickinick Street, WA 98370
                      </span>
                      <span className="top-mail">info@website.com</span>
                    </div>
                    <div className="top-bar-right">
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
                            <i
                              className="fa fa-google-plus"
                              aria-hidden="true"
                            />
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
            {/* header */}
            <header id="header" className="header bg-color">
              <div className="container">
                <div className="row">
                  <div className="header-wrap-home1">
                    <div className="col-md-3">
                      <div className="inner-header">
                        <div className="logo-header">
                          <Link href={`/`} title="">
                            <Image
                              alt="images"
                              src="/icon/logo-dark.png"
                              width={174}
                              height={58}
                            />
                          </Link>
                        </div>
                        {/* /logo */}
                        <MobileMenuToggle />
                        {/* /mobile menu button */}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="nav-wrap">
                        <nav id="mainnav" className="mainnav">
                          <ul className="menu">
                            <Nav />
                          </ul>
                        </nav>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="site-header-right">
                        <div className="header-inner">
                          <div className="search flat-show-search">
                            <div className="show-search" onClick={toggleSearch}>
                              <a href="#">
                                <i className="fa fa-search" />
                              </a>
                            </div>
                            <div className="top-search widgets-input">
                              <form
                                action="get"
                                id="searchform-all"
                                className="header-search search-form"
                              >
                                <div className="input-group">
                                  <input
                                    type="search"
                                    id="s"
                                    className="search-field"
                                    placeholder="Search here"
                                    aria-label="Search"
                                  />
                                  <button
                                    className="search-submit"
                                    type="submit"
                                    title="Search"
                                  />
                                </div>
                              </form>
                            </div>
                          </div>
                          <div className="cart">
                            <a href="#" className="cart-btn">
                              <i className="fa fa-shopping-cart" />
                            </a>
                          </div>
                          <div className="button">
                            <Link href={`/contact`} className="btn">
                              Get A Quote
                            </Link>
                          </div>
                        </div>
                      </div>
                      {/* header right */}
                    </div>
                  </div>
                </div>
              </div>
              <MobileNav />
            </header>
          </div>
        </div>
      </div>
    </div>
  );
}
