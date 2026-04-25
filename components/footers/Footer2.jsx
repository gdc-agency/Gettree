"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import axios from "axios";
export default function Footer2() {
  const [success, setSuccess] = useState(true);
  const [showMessage, setShowMessage] = useState(false);

  const handleShowMessage = () => {
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  };

  const sendEmail = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    const email = e.target.email.value;

    try {
      const response = await axios.post(
        "https://express-brevomail.vercel.app/api/contacts",
        {
          email,
        }
      );

      if ([200, 201].includes(response.status)) {
        e.target.reset(); // Reset the form
        setSuccess(true); // Set success state
        handleShowMessage();
      } else {
        setSuccess(false); // Handle unexpected responses
        handleShowMessage();
      }
    } catch (error) {
      console.error("Error:", error.response?.data || "An error occurred");
      setSuccess(false); // Set error state
      handleShowMessage();
      e.target.reset(); // Reset the form
    }
  };
  return (
    <footer className="footer footer-style-2">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-12">
                <div className="top-footer-style2 mg-top-30">
                  <div className="col-md-6 col-sm-6 wow fadeInLeft">
                    <div className="logo-footer-style2">
                      <Image
                        alt="images"
                        src="/icon/logo-dark.png"
                        width={174}
                        height={58}
                      />
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6 wow fadeInRight">
                    <div className="widgets-about f-right">
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
                            <i className="fa fa-instagram" aria-hidden="true" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i
                              className="fa fa-linkedin-square"
                              aria-hidden="true"
                            />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div
                  className="themesflat-spacer clearfix"
                  data-desktop={0}
                  data-mobile={0}
                  data-smobile={60}
                />
              </div>
              <div className="col-md-12">
                <div className="list-footer wow fadeInUp wow fadeInDown">
                  <div className="footer-item">
                    <div className="widgets-about padding-top-listfooter">
                      <h3 className="title-section-footer section-heading-jost-size20 fw-600 text-pri2-color">
                        Contact Us
                      </h3>
                      <div className="list-contact-footer2">
                        <div className="location d-flex">
                          <div className="icon-location mg-top-25" />
                          <div className="content-location">
                            <div className="heading-16px-rubik text-pri2-color">
                              66 broklyant, new York India 3269 road.
                            </div>
                          </div>
                        </div>
                        <div className="phone-call">
                          <div className="icon-phone-call mg-top-30" />
                          <div className="content-phone-call">
                            <div className="heading-16px-rubik text-pri2-color">
                              012 345 678 9101
                            </div>
                          </div>
                        </div>
                        <div className="email">
                          <div className="icon-email mg-top-25" />
                          <div className="content-email">
                            <div className="heading-16px-rubik text-pri2-color mg-top-20">
                              yourgmail@gmail.com
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="footer-item">
                    <div className="widgets-menu-1 padding-top-listfooter">
                      <h3 className="title-section-footer section-heading-jost-size20 fw-600 text-pri2-color">
                        Explore
                      </h3>
                      <ul className="list-menu-1 text-decs">
                        <li>
                          <Link href={`/services`}>Brangding Design</Link>
                        </li>
                        <li>
                          <Link href={`/services`}>Ui/ux Designing</Link>
                        </li>
                        <li>
                          <Link href={`/services`}>Maek Elements</Link>
                        </li>
                        <li>
                          <Link href={`/services`}>Graphics Design</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="footer-item padding-top-listfooter">
                    <div className="widgets-menu-2">
                      <h3 className="title-section-footer section-heading-jost-size20 fw-600 text-pri2-color">
                        Recent Post
                      </h3>
                      <ul className="list-menu-2 text-decs">
                        <li>
                          <h3 className="heading-menu2">
                            <Link href={`/blog-detail`}>
                              Bigg Ideas Of Business branding Info.
                            </Link>
                          </h3>
                          <span className="post-date">
                            <span className="entry-date">December 7, 2021</span>
                          </span>
                        </li>
                        <li>
                          <h3 className="heading-menu2">
                            <Link href={`/blog-detail`}>
                              Bigg Ideas Business branding Info.
                            </Link>
                          </h3>
                          <span className="post-date">
                            <span className="entry-date">December 7, 2021</span>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="footer-form-home2 wow fadeInUp">
              <div className="contact-right">
                <h3 className="section-heading-jost-size29">Newslatter</h3>
                <p className="section-heading-rubik-size16 fw-300">
                  sign up for newslatter &amp; get lattest news.
                </p>
                <div
                  className={`tfSubscribeMsg  footer-sub-element ${
                    showMessage ? "active" : ""
                  }`}
                >
                  {success ? (
                    <p style={{ color: "#fff" }}>
                      You have successfully subscribed.
                    </p>
                  ) : (
                    <p style={{ color: "red" }}>Something went wrong</p>
                  )}
                </div>
                <form
                  className="form-contact-right"
                  id="contactform"
                  onSubmit={sendEmail}
                >
                  <div className="input-name">
                    <input
                      id="name"
                      className="input-contact"
                      placeholder="Enter Your Name"
                      name="name"
                      type="text"
                      required
                    />
                  </div>
                  <div className="input-phone">
                    <input
                      id="email"
                      className="input-contact"
                      type="email"
                      placeholder="Enter Your Email"
                      name="email"
                      required
                    />
                  </div>
                  <div className="button">
                    <button type="submit" className="btn btn-left">
                      SUBSCRIBE
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="copyright">
                <div className="copyright-text">
                  copyright {new Date().getFullYear()} by <a href="https://www.globaldigitalcare.pk/" target="_blank" rel="noopener noreferrer">
      Global Digital Care
    </a>.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
