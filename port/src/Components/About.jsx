import React from "react";
import "./allstyle.css";
import {
  FaInstagramSquare,
  FaLinkedin,
  FaFacebookSquare,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const About = () => {
  const team = [
    {
      name: "Bruce",
      src: require("../images/poco.jpg"),
      desc: "MERN full Stack Developer",
    },
    {
      name: "Duke",
      src: require("../images/poco.jpg"),
      desc: "MERN full Stack Developer",
    },
    {
      name: "Shopee",
      src: require("../images/poco.jpg"),
      desc: "Team Leader",
    },
    {
      name: "John",
      src: require("../images/poco.jpg"),
      desc: "Content Writer",
    },
    {
      name: "Sam",
      src: require("../images/poco.jpg"),
      desc: "Content Writer",
    },
  ];
  return (
    <>
      <section className="about-section">
        <div className="about-inner">
          <div className="text-center pt-5 flex flex-col items-center ">
            <h2
              className="text-2xl font-semibold font-inter text-black "
              style={{
                color: "#000000",
                fontSize: "1.5rem",
                lineHeight: "2rem",
                fontWeight: "600",
              }}
            >
              Our Purpose
            </h2>
            <p className="about-text">
              Our purpose is to bring all the NGOs on single platform to enhance
              communication between the NGO and the doner. there are many people
              living in scarcity of resources food, clothes, books, electronics
              etc. so, it is an approach with socialistic ideals to help who are
              needy by those who have resources in excess. In our households we
              have multiple items and gadgets which is of no use for us neither
              has good resale value like old used smartphone, or Telivision
              because you have shifted to LED or Smart TV. But these could be
              useful for others who are rebuilding thier home after any
              environmental disaster.
            </p>
          </div>
          <div>
            <img
              src="https://s35422.pcdn.co/wp-content/uploads/2021/05/7.5.21_WhyAmIHere-1024x683-1.jpg"
              alt="Our Purpose"
              className="p-2 purpose "
            />
          </div>
        </div>
      </section>
      <section className="w-full">
        <div className="journey">
          <div className="journey-img">
            <img
              src="https://blog.ipleaders.in/wp-content/uploads/2020/07/4_these-are-the-voyages_journey_adventure_team_have-your-back-100771134-large.jpg"
              alt="Our Journey"
              style={{ height: "100%", borderRadius: "15px" ,padding:"5px"}}
            />
          </div>
          <div className="journey-content">
            <h2
              style={{
                color: " #000000",
                fontSize: "1.5rem",
                lineHeight: "2rem",
                fontWeight: "600",
              }}
            >
              Our Journey
            </h2>

            <p className="journey-detail ">
              The idea for ABHIDAN is born. You or someone in your team realizes
              the need for a platform that can connect people who want to donate
              to NGOs and organizations that need help. You conduct extensive
              research on the needs of various NGOs, the donation process, and
              the legal requirements for starting a donation platform. You
              develop a plan for ABHIDAN, including the mission, vision, and
              values of the organization. You also decide on the type of NGO
              partnerships you want to establish and the features you want to
              include in your website.
              <br />
              Overall, the journey of ABHIDAN is one of constant learning,
              growth, and impact. It is a project that has the potential to make
              a real difference in the lives of people in need, and I wish you
              all the best in your efforts to achieve your mission.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white pt-2 mb-2">
        <div className="team">
          <h2
            style={{
              color: "#000000",
              fontSize: "1.5rem",
              lineHeight: "2rem",
              fontWeight: "600",
            }}
          >
            Our Team
          </h2>
        </div>
        <div className="team-des ">
          {team.map((member, index) => (
            <div key={index} className="team-img">
              <img
                src={member.src}
                alt=""
                style={{
                  borderRadius: "9999px",
                  width: "150px",
                  height: "150px",
                }}
              />
              <h1 style={{ fontSize: " 1.25rem", lineHeight: "1.75rem" }}>
                {member.name}
              </h1>
              <p>{member.desc}</p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  columnGap: "1.25rem",
                }}
              >
                <Link to={"#"}>
                  <FaFacebookSquare size={32} className="media" />
                </Link>
                <Link to={"#"}>
                  <FaInstagramSquare size={32} className="media" />
                </Link>
                <Link to={"#"}>
                  <FaLinkedin size={32} className="media" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default About;
