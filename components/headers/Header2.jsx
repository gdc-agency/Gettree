"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import toggleSearch from "@/utlis/toggleSearch";
import Nav from "./Nav";
import MobileMenuToggle from "./MobileMenuToggle";
import MobileNav from "./MobileNav";
export default function Header2() {
  return (
    <header id="header" className="header header-style2 bg-color">
      <div className="container-fluid">
        <div className="row">
          <div className="header-wrap">
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
                {/* /#logo */}
                <MobileMenuToggle />
                {/* //mobile menu button */}
              </div>
            </div>
            {/* /.col-md-3 */}
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
          {/* /.header-wrap */}
        </div>
        {/* /.row */}
      </div>
      <MobileNav />
      {/* /.container */}
    </header>
  );
}
