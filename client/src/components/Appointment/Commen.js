import React from 'react';
import styled from "styled-components";
import { InnerLayout } from '../../Layouts';

const Commen = () => {
  return (
    <SectionJobsStyled>
    <InnerLayout>
      <div className="flex">
      <i class="fa-solid fa-hands-clapping"></i>
         <h1>Your appointment has been sent!</h1>
      </div>
    </InnerLayout>
  </SectionJobsStyled>
  )
}

const SectionJobsStyled = styled.section` 
   .flex {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    min-height: 50vh; 
    padding-bottom: 40px;
    i {
        font-size: 50px;
        margin-bottom: 10px;
        color: #f1f51a;
    }
    h1{
        text-align: center;
        font-weight: 400;
        font-size: 20px;
    }
   }

`;

export default Commen