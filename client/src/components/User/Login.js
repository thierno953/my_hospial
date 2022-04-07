import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import styled from "styled-components";
import { login } from "../../redux/features/authSlice";
import { InnerLayout } from "../../Layouts";


const initialState = {
  email: "",
  password: "",
};

const Login = () => {
  const [formValue, setFormValue] = useState(initialState);
  const { loading, error } = useSelector((state) => ({ ...state.auth }));
  const { email, password } = formValue;
  const dispatch = useDispatch();
  const navigate = useNavigate();



  useEffect(() => {
    error && toast.error(error);
  }, [error]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      dispatch(login({ formValue, navigate, toast }));
    }
  };

  const onInputChange = (e) => {
    let { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };



  return (
    <SectionJobsStyled>
    <InnerLayout>
    <div className="right">
        <form onSubmit={handleSubmit} className="input-control">
          <h3>Login</h3>
          <div>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={email}
              onChange={onInputChange}
              required
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Mot de passe"
              value={password}
              onChange={onInputChange}
              required
            />
          </div>
          <div>
          <button
              type="submit"
              className="s-btn"
              disabled={loading ? true : false}
            >
              Login
            </button>
          </div>
        
          <div>
            <Link to="/register"  style={{ fontSize: "14px" }}>
              <p>You do not have an account? Register</p>
            </Link>
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
    input, textarea {
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

export default Login;
