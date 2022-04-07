import React from "react";
import styled from "styled-components";

function Title({ name, para }) {
  return (
    <TitleStyled>
      <h3>{name}</h3>
      <p>{para}</p>
    </TitleStyled>
  );
}

const TitleStyled = styled.div`
  h3 {
    color: var(--color-dark);
    font-size: 2rem;
    font-weight: 700;
  }
  p {
    padding: 1rem 0;
    font-size: 14px;
  }
`;

export default Title;
