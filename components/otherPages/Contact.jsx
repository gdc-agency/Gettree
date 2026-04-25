import React from "react";

export default function Contact() {
  return (
    <section className="flat-contact-page">
      <div className="container">
        <div className="row">
          <div className="col-md-5 wow fadeInUp">
            <div className="contact-left">
              <h3 className="section-subtitle mg-bottom-22">GET IN TOUCH</h3>
              <h2 className="section-title mg-bottom-15">
                We want to share our locationto find us easily.
              </h2>
              <p className="section-desc mg-bottom-60">
                Lorem ipsum dolor sit amet, conset etur sadipscing elitr, sed
                diam noket numy eirmod tempor
              </p>
              <div className="address-box mg-bottom30">
                <div className="contact-location icon-map" />
                <div className="info text-pri2-color">
                  <h3 className="section-heading-jost-size20">Our Address</h3>
                  <p className="desc-box text-pri2-color">
                    2 St, Loskia sripur, amukara.
                  </p>
                </div>
              </div>
              <div className="address-box mg-bottom30">
                <div className="contact-phone icon-phone" />
                <div className="info text-pri2-color">
                  <h3 className="section-heading-jost-size20">Our Phone</h3>
                  <p className="desc-box text-pri2-color">000 2324 39493</p>
                </div>
              </div>
              <div className="address-box">
                <div className="contact-mail icon-mail" />
                <div className="info text-pri2-color">
                  <h3 className="section-heading-jost-size20">Our Email</h3>
                  <p className="desc-box text-pri2-color">name@website.com</p>
                </div>
              </div>
            </div>
            <div
              className="themesflat-spacer clearfix"
              data-desktop={0}
              data-mobile={30}
              data-smobile={30}
            />
          </div>
          <div className="col-md-7 wow fadeInUp">
            <div className="contact-right">
              <form
                method="post"
                className="form-contact-right"
                id="contactform"
                action="./contact/contact-process.php"
                acceptCharset="utf-8"
                noValidate="novalidate"
              >
                <div className="input-row">
                  <div className="input-name">
                    <label htmlFor="name" className="heading-features">
                      Name (required)
                    </label>
                    <input
                      id="name"
                      name="name"
                      className="input-contact"
                      type="text"
                      placeholder="Full Name"
                      required
                    />
                  </div>
                  <div className="input-phone">
                    <label htmlFor="phone" className="heading-features">
                      Phone (optional)
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      className="input-contact"
                      type="text"
                      placeholder="Phone Number"
                      required
                    />
                  </div>
                </div>
                <div className="input-row">
                  <div className="input-email">
                    <label id="email" className="heading-features">
                      Email address (required)
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="input-contact"
                      placeholder="Email Address"
                      required
                    />
                  </div>
                  <div className="input-services">
                    <label htmlFor="services" className="heading-features">
                      Services (required)
                    </label>
                    <select
                      className="input-contact input-select"
                      name="services"
                      id="services"
                    >
                      <option value={0}>Choose services</option>
                      <option value={1}>Gettree</option>
                      <option value={2}>Gettree</option>
                      <option value={3}>Gettree</option>
                    </select>
                  </div>
                </div>
                <div className="input-message">
                  <label htmlFor="message" className="heading-features">
                    Your message*
                  </label>
                  <textarea
                    name="message"
                    className="input-contact-message"
                    id="message"
                    placeholder="Your Message"
                    defaultValue={""}
                  />
                </div>
                <div className="button">
                  <button type="submit" className="btn btn-left">
                    Send message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
