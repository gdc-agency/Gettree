import React from "react";
import Image from "next/image";
import { teamMembers } from "@/data/team";

export default function Team() {
  return (
    <section className="flat-team">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-title-box">
              <h4 className="section-subtitle white wow fadeInUp">
                MEET OUR TEAM
              </h4>
              <h2 className="section-title white wow fadeInUp">
                Our Creative Team
              </h2>
            </div>
            <div
              className="themesflat-spacer clearfix"
              data-desktop={0}
              data-mobile={60}
              data-smobile={60}
            />
          </div>
        </div>
      </div>
      {/* list team */}
      <div className="container">
        <div className="row">
          <div className="list-team">
            {teamMembers.map((member) => (
              <div className="item-three-column" key={member.id}>
                <div className="team-box wow fadeInUp">
                  <div className="image-staff">
                    <div className="backround-overlay" />
                    <div className="list-icon-hidden">
                      <ul className="widgets-nav-social link-style3">
                        <li>
                          <a href="#">
                            <i className="fa fa-pinterest" aria-hidden="true" />
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
                      </ul>
                    </div>
                    <Image
                      alt="images"
                      src={member.imageSrc}
                      width={300}
                      height={340}
                    />
                  </div>
                  <div className="info-staff link-style4">
                    <h3 className="section-heading-rubik-size20">
                      {member.name}
                    </h3>
                    <p className="section-desc-2 white">{member.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
