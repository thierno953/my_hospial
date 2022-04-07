import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../../Layouts";
import emailjs from "emailjs-com";
import { useState } from "react";
import { useRef } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_cvsbdtv",
        "template_8781v0b",
        formRef.current,
        "user_k8XMgvWkZThzIO7dKBfKI"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    clear();
  };
  const clear = () => {
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <SectionJobsStyled>
      <InnerLayout>
        <div className="right">
          <form className="input-control" ref={formRef} onSubmit={handleSubmit}>
            <h3>Contact</h3>
            <p>{done && "Thank you !"}</p>
            <div>
              <input
                type="text"
                required
                placeholder="NAME"
                name="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
            <div>
              <input
                type="email"
                required
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
            <div>
              <textarea
                rows="4"
                required
                name="message"
                placeholder="MESSAGE"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              ></textarea>
            </div>
            <div>
              <button type="submit" className="s-btn">
                SEND
              </button>
            </div>
          </form>
        </div>
      </InnerLayout>
    </SectionJobsStyled>
  );
};

const SectionJobsStyled = styled.section`
  .right {
    display: flex;
    align-items: center;
    max-width: 600px;
    margin: auto;
    min-height: 60vh;
    .input-control {
      position: relative;
      font-weight: 500;
      width: 100%;
      h3 {
        text-align: center;
      }
      p {
          text-align: center;
          font-size: 14px;
      }
      input,
      textarea {
        width: 100%;
        font-family: inherit;
        font-size: 14px;
        padding: 1.4rem 2rem;
        margin: 5px;
        border: 1px solid var(--color-primary);
        border-radius: 7px;
      }
      .s-btn {
        color: var(--color-white);
        font-size: 14px;
        background-color: #1a4483;
        padding: 1.1rem 1rem;
        cursor: pointer;
        border-radius: 7px;
        width: 100%;
        margin: 5px;
        transition: all 0.4s ease-in-out;
        &:hover {
          background-color: var(--color-primary-dark);
        }
      }
    }
  }
`;

export default Contact;
