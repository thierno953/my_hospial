import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import BlogData from "../../api/BlogData";
import { InnerLayout } from "../../Layouts";
import EmptyFile from "./EmptyFile";
const BlogSingle = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    let item = BlogData.find((item) => item.id === parseInt(id));

    if (item) {
      setItem(item);
    }
  }, [id]);
  return (
    <BlogSection>
      <InnerLayout>
        <section>
          {item ? (
            <div className="container_image">
              <img className="image1" src={item.image} alt={item.title} />

              <div className="single_max">
                <h1 className="position">{item.title}</h1>
                <div className="profile">
                  <span>22/03/2022</span>
                  <span>Thierno</span>
                </div>

                <div className="info_blog">
                  <h2>{item.title1}</h2>
                  <p>{item.description1}</p>

                  <p>{item.description2}</p>

                  <p>{item.description3}</p>

                  <p>{item.description4}</p>
                </div>
              </div>
            </div>
          ) : (
            <EmptyFile />
          )}
        </section>
      </InnerLayout>
    </BlogSection>
  );
};

const BlogSection = styled.section`
  min-height: 20vh;
  color: var(--color-dark);
  .container_image {
    .image1 {
      width: 100%;
      height: 50vh;
      object-fit: cover;
      justify-self: center;
    }
    .single_max {
      max-width: 800px;
      margin: auto;
      .profile {
        display: flex;
        align-item: center;
        justify-content: space-between;
        flex-wrap: wrap;
        span {
          font-size: 14px;
        }
      }
      .position {
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 30px;
        font-weight: 700;
        color: #26a407;
      }
      h2 {
        font-size: 25px;
        color: #1a4483;
      }

      h3 {
        font-size: 14px;
        font-weight: 500;
        text-align: left;
        margin-top: 5px;
      }
      h4 {
        font-size: 14px;
        font-weight: 600;
        margin-top: 10px;
        span {
          font-size: 14px;
          font-weight: 400;
        }
      }
      p {
        margin-top: 10px;
        font-size: 14px;
      }
      .image_single {
        width: 100%;
        height: 30vh;
        object-fit: cover;
        justify-self: center;
      }
      .desc_flex {
        margin-top: 20px;
        display: flex;
        algin-item: center;
        justify-content: center;
        gap: 20px;
      }
    }
  }
`;

export default BlogSingle;
