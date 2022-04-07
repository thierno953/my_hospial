import React from "react";
import styled from "styled-components";

function ServiceInfo({
  item: {
    id,
    image,
    description,
    title,

  },
}) {
  return (
    <JobCardStyled>
      <div className="card-con">
        <div className="card-top">
          <img src={image} alt={title} />
        </div>
        <p className="type">{title}</p>
        <p className="stack">{description}</p>
      </div>
    </JobCardStyled>
  );
}

const JobCardStyled = styled.div`
  background-color: var(--color-white);
  border-radius: 7px;
  transition: all 0.4s ease-in-out;
  box-shadow: 0px 1px 20px rgba(0, 0, 0, 0.01);
  &:hover {
    box-shadow: 0px 1px 20px rgba(0, 0, 0, 0.1);
    transform: translateY(-5px);
  }

  .card-con {
    padding: 1rem;
    .card-top {
      display: flex;
      align-items: center;
      padding-bottom: 1.2rem;
      .c-top-text {
        padding-left: 2rem;
        h5 {
          color: var(--color-dark);
          transition: all 0.4s ease-in-out;
          cursor: pointer;
          font-size: 1.2rem;
          &:hover {
            color: var(--color-primary);
          }
        }
        p {
          font-size: 1rem;
          padding-top: 0.3rem;
        }
      }

      img {
        object-fit: cover;
        justify-self: center;
        width: 80px;
        max-width: 100%;
        border-radius: 7px;
      }
    }
    .c-title {
      font-size: 1.6rem;
      color: var(--color-dark);
      cursor: pointer;
      transition: all 0.4s ease-in-out;
      padding-bottom: 1rem;
      &:hover {
        color: var(--color-primary);
      }
    }

    .type {
      padding-bottom: 1rem;
      font-weight: 800;
    }
    .stack {
      padding-bottom: 1.2rem;
      line-height: 2.2rem;
      font-size: 1rem;

    }

    .job-info {
      display: flex;
      align-items: center;
      justify-content: space-between;
      p {
        color: var(--color-primary);
        font-size: 0.9rem;
        span {
          color: #656565;
          font-size: 1rem;
        }
      }
    }
  }
`;

export default ServiceInfo;
