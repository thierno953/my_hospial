import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { InnerLayout } from "../../../Layouts";


/*eslint-disable*/
function SectionFooter() {
  return (
    <SectionFooterStyled>
      <InnerLayout>
        <div className="f-inner">
          <ul>
            <h4 className="f-title">Découvrez</h4>
            <li className="nav-item">
              <Link to="/register">Devenir prestataire</Link>
              <br />
              <Link to="/people">Demander un service</Link>
              <br />
            </li>
          </ul>

          <ul>
            <h4 className="f-title">À propos </h4>
            <li className="nav-item">
              <a href="#">Accueil</a>
            </li>

            <li className="nav-item">
              <Link to="/blog">Blog</Link>
            </li>
            <li className="nav-item">
              <Link to="/about">A propos</Link>
            </li>
            <li className="nav-item">
              <Link to="/service">Service</Link>
            </li>
          </ul>

          <ul>
            <h4 className="f-title">Besoin d’un service </h4>

            <li className="nav-item">
              <p>thiernobarry554@gmail.com</p>
              <br />
              <p>+32 466 240 103</p>
            </li>
          </ul>
          <ul>
            <h4 className="f-title">Infos</h4>
            <li className="nav-item">
              <p>
                Proposition établie par un Jobber <br />
                <br />
                en réponse à un Besoin d'un Posteur.
              </p>
            </li>
          </ul>
        </div>
      </InnerLayout>
      <p className="footer">
        © 2022 <span>THB</span> All Rights Reserved.
      </p>
    </SectionFooterStyled>
  );
}

const SectionFooterStyled = styled.footer`
  background-color: #272a33;
  p {
    color: #d8dadf;
  }
  .f-inner {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    padding-top: 2.5rem;

    @media screen and (max-width: 1242px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media screen and (max-width: 841px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 530px) {
      grid-template-columns: 1fr;
      .f-title {
        padding: 1rem 0;
        overflow: hidden;
      }
    }
    p {
      color: #d8dadf;
      line-height: 1rem;
      padding-top: 1rem;
    }

    .f-title {
      padding-top: 1rem;
      font-size: 1rem;
      cursor: default;
      color: var(--color-white);
    }

    li {
      a,
      p {
        transition: all 0.3s ease-in-out;
        color: #d8dadf;
        font-size: 14px;
        &:hover {
          color: var(--color-primary);
        }
      }
    }
  }

  .footer {
    width: 70%;
    margin: 0 auto;
    text-align: center;
    padding: 1rem 0;
    color: #d8dadf;
    border-top: 1px solid #cccccc1c;
    span {
      color: var(--color-primary);
    }
  }
`;
export default SectionFooter;
