import React from "react";
import Link from "next/link";
import Image from "next/image";
import BlogSidebar from "./BlogSidebar";
export default function BlogDetails() {
  return (
    <section className="flat-blog-detail">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div
              className="themesflat-spacer clearfix"
              data-desktop={166}
              data-mobile={0}
              data-smobile={0}
            />
          </div>
          <div className="col-md-8">
            <div className="post-wrap">
              <div className="content-blog-detail">
                <div className="image-box">
                  <div className="image">
                    <Image
                      alt="image"
                      src="/images/blog/young-workers-greenhouse-feed-flowers-concept-caring-plants.jpg"
                      width={770}
                      height={450}
                    />
                  </div>
                </div>
                <div className="content mg-top-15">
                  <span className="content-info">
                    <a href="#" className="user">
                      {" "}
                      BY ADMIN{" "}
                    </a>
                    <a href="#" className="date">
                      {" "}
                      28 JANUARY, 2020{" "}
                    </a>
                  </span>
                  <div className="heading-content-box">
                    <Link href={`/blog-detail`}>
                      Social media-driven trading frenzy for GameStop, AMC
                      Entertainment sparks calls for scrutiny
                    </Link>
                  </div>
                  <p className="desc-content-box text-decs">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                    ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                    nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                    ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                    nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam
                  </p>
                  <div className="content-note-author">
                    <p className="desc-content-box text-decs">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua.
                    </p>
                    <a href="#" className="author heading-16px-rubik">
                      Marilyn Gilbert
                    </a>
                  </div>
                  <p className="desc-content-box text-decs">
                    labore et dolore magna aliquyam erat, sed diam voluptua. At
                    vero eos et accusam et justo duo dolores et ea rebum. Stet
                    clita kasd gubergren, no sea takimata sanctus est Lorem
                    ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
                    sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                    labore et dolore magna aliquyam erat, sed diam voluptua. At
                    vero eos et accusam
                  </p>
                  <div className="image-box">
                    <div className="image-2">
                      <Image
                        alt="image"
                        src="/images/blog/young-woman-working-glass-greenhouse.jpg"
                        width={770}
                        height={450}
                      />
                    </div>
                  </div>
                  <div className="content-2 heading-content-box">
                    <Link href={`/blog-detail`}>
                      AMC Entertainment sparks calls for scrutiny
                    </Link>
                  </div>
                  <p className="desc-content-box text-decs">
                    labore et dolore magna aliquyam erat, sed diam voluptua. At
                    vero eos et accusam et justo duo dolores et ea rebum. Stet
                    clita kasd gubergren, no sea takimata sanctus est Lorem
                    ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
                    sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                    labore et dolore magna aliquyam erat, sed diam voluptua. At
                    vero eos et accusam
                  </p>
                  <ul className="nav-access-blog-detail">
                    <li>
                      <a href="#" className="tick">
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam
                      </a>
                    </li>
                    <li>
                      <a href="#" className="tick">
                        Stet clita kasd gubergren, no sea takimata sanctus
                      </a>
                    </li>
                    <li>
                      <a href="#" className="tick">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr
                      </a>
                    </li>
                  </ul>
                  <hr />
                  <div className="bottom-content">
                    <div className="related-tag">
                      <h3 className="title heading-16px-rubik">
                        Related Tags :
                      </h3>
                      <ul className="list-related">
                        <li>
                          <a href="#">Business.</a>
                        </li>
                        <li>
                          <a href="#">Corporate.</a>
                        </li>
                        <li>
                          <a href="#">Agency</a>
                        </li>
                      </ul>
                    </div>
                    <div className="social-share">
                      <h3 className="title2 heading-16px-rubik">Share :</h3>
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
                  <div className="widgets-comment">
                    <div className="widgets-title-comment">Comments</div>
                    <div className="widgets-comment-box">
                      <div className="box-1">
                        <div className="image-comment bd-radius-50-image">
                          <Image
                            alt="image"
                            src="/images/blog/avt1.jpg"
                            width={100}
                            height={100}
                          />
                        </div>
                        <div className="content-comment">
                          <div className="title">
                            <div className="heading">
                              <a href="#">Laurel Wallace</a>
                            </div>
                            <div className="date-comments">
                              <a href="#">May 18</a>
                            </div>
                          </div>
                          <p className="desc-content-box text-decs">
                            Proin ac quam et lectus vestibulum blandit. Nunc
                            maximus nibh at placerat tincidunt. Nam sem lacus,
                            ornare non ante sed, ultricies.
                          </p>
                          <div className="reply">
                            <a href="#">Reply</a>
                          </div>
                        </div>
                      </div>
                      <div className="box-2">
                        <div className="image-comment bd-radius-50-image">
                          <Image
                            alt="image"
                            src="/images//blog/avt2.jpg"
                            width={100}
                            height={100}
                          />
                        </div>
                        <div className="content-comment">
                          <div className="title">
                            <div className="heading">
                              <a href="#">Bobby Hawkins</a>
                            </div>
                            <div className="date-comments">
                              <a href="#">December 22</a>
                            </div>
                          </div>
                          <p className="desc-content-box text-decs">
                            Pellentesque habitant morbi tristique senectus et
                            netus et malesuada fames ac turpis egestas. Ut arcu
                            libero, pulvinar non.
                          </p>
                          <div className="reply">
                            <a href="#">Reply</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* comments */}
                  {/* input comment */}
                  <div className="widgets-post-comment">
                    <div className="widgets-title-comment">Leave a Reply</div>
                    <div className="widgets-input-box">
                      <span>
                        <input
                          className="tf-input input-yourname"
                          type="text"
                          placeholder="Your Name"
                        />
                      </span>
                      <span>
                        <input
                          className="tf-input input-youremail"
                          type="email"
                          placeholder="Your E-mail"
                        />
                      </span>
                      <span>
                        <textarea
                          className="tf-input input-yourmessage"
                          placeholder="Enter comment here"
                          name="message"
                          cols={30}
                          rows={10}
                          defaultValue={""}
                        />
                      </span>
                      <div className="tf-submit-input">
                        <a href="#" className="tf-button">
                          Post Comment
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /.post-wrap */}
          </div>
          {/* /.col-md-8 */}
          <div className="col-md-4">
            <div
              className="themesflat-spacer clearfix"
              data-desktop={0}
              data-mobile={60}
              data-smobile={60}
            />
            <BlogSidebar />
          </div>
          {/* /.col-md-4 */}
          <div className="col-md-12">
            <div
              className="themesflat-spacer clearfix"
              data-desktop={193}
              data-mobile={60}
              data-smobile={60}
            />
          </div>
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}
    </section>
  );
}
