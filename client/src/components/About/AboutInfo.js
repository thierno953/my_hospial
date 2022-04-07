import React from "react";

const AboutInfo = ({
  item: {
    id,
    image,
    title,
    description,
    logo1,
    logo2,
    logo3,
    logo4,
    some,
    project,
    volunteers,
    total,
  },
}) => {
  return (
      <div className="aboutInfo">
          <div className="info">
              <img src={image} alt={title} className="image" />
              <div className="info_2">
                  <h2>{title}</h2>
                  <p>{description}</p>
                  <div className="acount">
                      <div className="acount1">
                          <img src={logo1} alt={some} />
                          <h3>{some}</h3>
                      </div>
                      <div className="acount2">
                          <img src={logo2} alt={project} />
                          <h3>{project}</h3>
                      </div>
                      <div className="acount3">
                          <img src={logo3} alt={volunteers} />
                          <h3>{volunteers}</h3>
                      </div>
                      <div className="acount4">
                          <img src={logo4} alt={total} />
                          <h3>{total}</h3>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
};

export default AboutInfo;
