import React from "react";
import Image from "next/image";
import { teamMembers2 } from "@/data/team";
export default function Team() {
  return (
    <section className="flat-team flat-team-page">
      {/* list team */}
      <div className="container">
        <div className="row">
          <div className="list-team">
            {teamMembers2.map((member) => (
              <div key={member.id} className="item-three-column mg-bottom30">
                <div className="team-box hover-up-style2 wow fadeInUp">
                  <div className="image-staff">
                    <div className="backround-overlay" />
                    <div className="list-icon-hidden">
                      <ul className="widgets-nav-social link-style3">
                        {member.socialLinks.map((social, index) => (
                          <li key={index}>
                            <a href={social.url}>
                              <i className={social.icon} aria-hidden="true" />
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Image
                      alt="images"
                      src={member.imageSrc}
                      width={300}
                      height={340}
                    />
                    <a className="icon-top" href="#" />
                  </div>
                  <div className="info-staff">
                    <h3 className="section-heading-rubik-size20 text-pri2-color">
                      {member.name}
                    </h3>
                    <p className="section-desc-2">{member.role}</p>
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
