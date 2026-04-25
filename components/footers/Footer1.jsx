"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import axios from "axios";
export default function Footer1() {
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
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="top-footer wow fadeInDown">
              <div className="top-footer-left">
                <div className="logo-footer">
                  <Link href={`/`}>
                    <Image
                      alt="images"
                      src="/icon/logo-light.png"
                      width={174}
                      height={60}
                    />
                  </Link>
                </div>
              </div>
              <div className="top-footer-right">
                <div className="footer-contact-info">
                  <div className="footer-info-item">
                    <div className="location">
                      <div className="icon-location" />
                      <div className="content-location">
                        <div className="heading-16px-rubik">
                          66 broklyant, new York India 3269 road.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="footer-info-item">
                    <div className="phone-call">
                      <div className="icon-phone-call" />
                      <div className="content-phone-call">
                        <div className="heading-16px-rubik">
                          012 345 678 9101
                        </div>
                        <div className="heading-16px-rubik">
                          012 345 678 9101
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="footer-info-items">
                    <div className="email">
                      <div className="icon-email" />
                      <div className="content-email">
                        <div className="heading-16px-rubik">
                          yourmail.@gmail.com
                        </div>
                        <div className="heading-16px-rubik">
                          yourgmail.@gmail.com
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="list-footer wow fadeInUp">
              <div className="footer-item">
                <div className="widgets-about padding-top-listfooter">
                  <p className="heading-jost-20px">About Us</p>
                  <p className="text-decs">
                    Lorem Ipsum simply dummy text available in market the
                    printing text, MORE...
                  </p>
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
              <div className="footer-item">
                <div className="widgets-menu-1 padding-top-listfooter">
                  <p className="heading-jost-20px">Explore</p>
                  <ul className="list-menu-1 text-decs link-style4">
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
                  <p className="heading-jost-20px">Recent Post</p>
                  <ul className="list-menu-2 text-decs link-style4">
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
              <div className="footer-item padding-top-listfooter">
                <div className="widgets-subcribes">
                  <p className="heading-jost-20px">Newslatter</p>
                  <p className="text-decs">
                    Lorem Ipsum is simply dummy text of in market the printing
                    typesetting.
                  </p>
                  <div
                    className={`tfSubscribeMsg  footer-sub-element ${
                      showMessage ? "active" : ""
                    }`}
                  >
                    {success ? (
                      <p style={{ color: "rgb(52, 168, 83)" }}>
                        You have successfully subscribed.
                      </p>
                    ) : (
                      <p style={{ color: "red" }}>Something went wrong</p>
                    )}
                  </div>
                  <div className="widgets-input-subcribes">
                    <form onSubmit={sendEmail} className="form-subcribe">
                      <input
                        type="email"
                        name="email"
                        className="widgets-text-input"
                        placeholder="Email Address"
                        required
                      />
                      <button type="submit" className="fa fa-envelope" />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="copyright link-style4">
                <p className="copyright-text">
                  copyright {new Date().getFullYear()} by <a href="https://www.globaldigitalcare.pk/" target="_blank" rel="noopener noreferrer">
      Global Digital Care
    </a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
