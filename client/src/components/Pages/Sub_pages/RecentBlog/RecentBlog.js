import React, { useState } from "react";
import styled from "styled-components";
import BlogData from "../../api/BlogData";
import { InnerLayout } from "../../Layouts";
import Title from "../Pages/Sub_pages/Title";
import BlogInfo from "./BlogInfo";


function RecentBlog() {
  const [items, setItems] = useState(BlogData);

  return (
    <SectionJobsStyled>
      <InnerLayout>
        <div className="title-con">
          <Title
            name={"Our Recent Blogs"}
            para={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            }
          />
        </div>
        <div className="cards-con">
          {items.map((item) => {
            return <BlogInfo key={item.id} item={item} setItems={setItems} />;
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
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 2rem;
    @media screen and (max-width: 720px) {
      grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    }
  }
`;
export default RecentBlog;
