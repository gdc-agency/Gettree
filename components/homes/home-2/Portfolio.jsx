import React from "react";
import Link from "next/link";
import Image from "next/image";
export default function Portfolio() {
  return (
    <section className="flat-profolio-home2">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div
              className="themesflat-spacer clearfix"
              data-desktop={120}
              data-mobile={60}
              data-smobile={60}
            />
          </div>
          <div className="item-three-column wow fadeInLeft">
            <div className="list-box-profolio mg-bottom30 wow fadeInUp">
              <div className="image-profolio">
                <Image
                  alt="images"
                  src="/images/profolio/profolio-image-1.jpg"
                  width={570}
                  height={350}
                />
                <div className="profolio-show">
                  <div className="profolio-info">
                    <div className="info">
                      <Link href={`/case-details`}>
                        <h3 className="section-heading-jost-size20">
                          Finished Work
                        </h3>
                      </Link>
                      <p className="desc-box">Dummy text of free available</p>
                    </div>
                    <div className="button-next">
                      <Link className="profolio-btn" href={`/case-details`} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="list-box-profolio mg-bottom30 wow fadeInUp">
              <div className="image-profolio">
                <Image
                  alt="images"
                  src="/images/profolio/profolio-image-2.jpg"
                  width={570}
                  height={350}
                />
                <div className="profolio-show">
                  <div className="profolio-info">
                    <div className="info">
                      <Link href={`/case-details`}>
                        <h3 className="section-heading-jost-size20">
                          Finished Work
                        </h3>
                      </Link>
                      <p className="desc-box">Dummy text of free available</p>
                    </div>
                    <div className="button-next">
                      <Link className="profolio-btn" href={`/case-details`} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item-three-column wow fadeInUp">
            <div className="list-box-profolio wow fadeInUp">
              <div className="image-profolio">
                <Image
                  alt="images"
                  src="/images/profolio/profolio-image-3.jpg"
                  width={570}
                  height={730}
                />
                <div className="profolio-show active">
                  <div className="profolio-info">
                    <div className="info">
                      <Link href={`/case-details`}>
                        <h3 className="section-heading-jost-size20">
                          Finished Work
                        </h3>
                      </Link>
                      <p className="desc-box">Dummy text of free available</p>
                    </div>
                    <div className="button-next">
                      <Link className="profolio-btn" href={`/case-details`} />
                    </div>
                  </div>
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
          <div className="item-three-column item-flex-100 wow fadeInRight">
            <div className="list-box-profolio mg-bottom30 wow fadeInUp">
              <div className="image-profolio">
                <Image
                  alt="images"
                  src="/images/profolio/profolio-image-4.jpg"
                  width={570}
                  height={350}
                />
                <div className="profolio-show">
                  <div className="profolio-info">
                    <div className="info">
                      <Link href={`/case-details`}>
                        <h3 className="section-heading-jost-size20">
                          Finished Work
                        </h3>
                      </Link>
                      <p className="desc-box">Dummy text of free available</p>
                    </div>
                    <div className="button-next">
                      <Link className="profolio-btn" href={`/case-details`} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="list-box-profolio wow fadeInUp">
              <div className="image-profolio">
                <Image
                  alt="images"
                  src="/images/profolio/profolio-image-5.jpg"
                  width={570}
                  height={350}
                />
                <div className="profolio-show">
                  <div className="profolio-info">
                    <div className="info">
                      <Link href={`/case-details`}>
                        <h3 className="section-heading-jost-size20">
                          Finished Work
                        </h3>
                      </Link>
                      <p className="desc-box">Dummy text of free available</p>
                    </div>
                    <div className="button-next">
                      <Link className="profolio-btn" href={`/case-details`} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div
              className="themesflat-spacer clearfix"
              data-desktop={90}
              data-mobile={60}
              data-smobile={60}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
