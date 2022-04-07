import React, { useState } from "react";
import styled from "styled-components";
import ServiceData from "../../api/ServiceData";
import { InnerLayout } from "../../Layouts";
import Title from "../Pages/Sub_pages/Title";
import ServiceInfo from "./ServiceInfo";


function Service() {
  const [items, setItems] = useState(ServiceData);

  return (
    <SectionJobsStyled>
      <InnerLayout>
        <div className="title-con">
          <Title
            name={"Our Recent Services"}
            para={
              "On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions."
            }
          />
        </div>
        <div className="cards-con">
          {items.map((item) => {
            return <ServiceInfo key={item.id} item={item} setItems={setItems} />;
          })}
        </div>
      </InnerLayout>
    </SectionJobsStyled>
  );
}

const SectionJobsStyled = styled.section`
  background-color: var(--color-neutral-3);
  .cards-con {
    padding-top: 3.5rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    grid-gap: 2rem;
    @media screen and (max-width: 720px) {
      grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    }
  }
`;
export default Service;
