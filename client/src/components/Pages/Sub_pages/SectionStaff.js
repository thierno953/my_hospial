import React from "react";
import styled from "styled-components";
import StaffCard from "./StaffCard";
import Title from "./Title";
import avatar1 from "../../../assets/blog1.webp";
import avatar2 from "../../../assets/blog2.jpg";
import avatar3 from "../../../assets/blog3.jpeg";
import avatar4 from "../../../assets/blog4.jpg";
import avatar5 from "../../../assets/blog5.jpg";
import avatar6 from "../../../assets/blog6.jpg";
import { InnerLayout } from "../../../Layouts";

function SectionStaff() {
  return (
    <SectionStaffStyled>
      <InnerLayout>
        <div className="title-con">
          <Title
            name={"Ours Offered Services "}
            para={
              "Autant de personnalités différentes, mais un noyau soudé avec une chose en commun."
            }
          />
        </div>
        <div className="staff-cards">
          <StaffCard
            img={avatar2}
            name={"Gustavo Mikalia"}
            tit={"Sylvain"}
            stack={"Co-fondateur"}
          />
          <StaffCard
            img={avatar4}
            name={"Sunil Patel"}
            tit={"Axel"}
            stack={"Marketing Manager"}
          />
          <StaffCard
            img={avatar1}
            name={"Huan Nguyen"}
            tit={"Marion"}
            stack={"Operations Manager"}
          />
          <StaffCard
            img={avatar3}
            name={"Gustavo Mikalia"}
            tit={"Ludo"}
            stack={"Senior Back-end Developer"}
          />
             <StaffCard
            img={avatar5}
            name={"Gustavo Mikalia"}
            tit={"Ludo"}
            stack={"Senior Back-end Developer"}
          />
             <StaffCard
            img={avatar6}
            name={"Gustavo Mikalia"}
            tit={"Ludo"}
            stack={"Senior Back-end Developer"}
          />
        </div>
      </InnerLayout>
    </SectionStaffStyled>
  );
}

const SectionStaffStyled = styled.section`
  .staff-cards {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 1rem;
    padding-top: 3.5rem;
  }
`;

export default SectionStaff;
