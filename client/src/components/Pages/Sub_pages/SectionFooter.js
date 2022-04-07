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
            <h4 className="f-title">Discover</h4>
            <li className="nav-item">
              <a href="#">Html</a>
            </li>
            <li className="nav-item">
              <a href="#">Css</a>
            </li>
            <li className="nav-item">
              <a href="#">React</a>
            </li>

            <li className="nav-item">
              <a href="#">Redux</a>
            </li>
            <li className="nav-item">
              <a href="#">ExpressJS</a>
            </li>
          </ul>

          <ul>
            <h4 className="f-title">Blogs </h4>
            <li className="nav-item">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link to="/blog">Blog</Link>
            </li>

            <li className="nav-item">
              <Link to="/service">Service</Link>
            </li>
            <li className="nav-item">
              <Link to="/staff">Doctors</Link>
            </li>
          </ul>

          <ul>
            <h4 className="f-title">Need a Service</h4>
        
            <li className="nav-item">
              <a href="#">thiernobarry554@gmail.com</a>
            </li>
            <li>
            <a href="#">+32 466 240 103</a>
            </li>
          </ul>
          <ul>
            <h4 className="f-title">Info</h4>
            <li className="nav-item">
              <a href="#">I like to code things from scratch, and enjoy bringing ideas to life in the browser.</a>
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
