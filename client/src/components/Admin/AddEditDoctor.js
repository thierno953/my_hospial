import React, { useState, useEffect } from "react";
import FileBase from "react-file-base64";
import styled from "styled-components";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createdoctor, updateDoctor } from "../../redux/features/doctorSlice";
import Spinner from "./Spinner";
import { InnerLayout } from "../../Layouts";
import Sidebar from "./Sidebar";
/*eslint-disable*/

const initialState = {
  email: "",
  address: "",
  phone: "",
  title: "",
  description: "",
};

const AddEditDoctor = () => {
  const [doctorData, setDoctorData] = useState(initialState);
  const { error, loading, userDoctors } = useSelector((state) => ({
    ...state.doctor,
  }));
  const { user } = useSelector((state) => ({
    ...state.auth,
  }));
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { email, address, phone, title, description } = doctorData;
  const { id } = useParams();

  // update
  useEffect(() => {
    if (id) {
      const singleDoctor = userDoctors.find((tour) => tour._id === id);

      setDoctorData({ ...singleDoctor });
    }
  }, [id]);

  useEffect(() => {
    error && toast.error(error);
  }, [error]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email && address && phone && title && description) {
      const updatedDoctorData = { ...doctorData, name: user?.result?.name };
      if (!id) {
        dispatch(createdoctor({ updatedDoctorData, navigate, toast }));
      } else {
        dispatch(updateDoctor({ id, updatedDoctorData, toast, navigate }));
      }
      handleClear();
    }
  };

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setDoctorData({ ...doctorData, [name]: value });
  };

  const handleClear = () => {
    setDoctorData({
      email: "",
      address: "",
      phone: "",
      title: "",
      description: "",
    });
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <SectionJobsStyled>
      <InnerLayout>
        <div className="add_flex">
          <Sidebar />
          <div className="right">
            <form onSubmit={handleSubmit} className="input-control">
              <h3>{id ? "Update Doctor" : "Add Doctor"}</h3>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={onInputChange}
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  value={address}
                  onChange={onInputChange}
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  value={phone}
                  onChange={onInputChange}
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Title"
                  name="title"
                  value={title}
                  onChange={onInputChange}
                  required
                />
              </div>
              <textarea
                name="description"
                value={description}
                onChange={onInputChange}
                placeholder="Message"
                cols="20"
                rows="6"
                style={{ width: "100%" }}
              ></textarea>
              <div>
                <FileBase
                  type="file"
                  placeholder="File"
                  value={title}
                  onDone={({ base64 }) =>
                    setDoctorData({ ...doctorData, imageFile: base64 })
                  }
                  required
                  style={{ width: "100%" }}
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="s-btn"
                  disabled={loading ? true : false}
                >
                   <h3>{id ? "Update Doctor" : "Add Doctor"}</h3>
                </button>
              </div>
            </form>
          </div>
        </div>
      </InnerLayout>
    </SectionJobsStyled>
  );
};

const SectionJobsStyled = styled.section`
.add_flex {
    display: grid;
    grid-template-columns: 300px 1fr;
    gap: 1.5rem;
    @media screen and (max-width: 720px) {
        grid-template-columns: 1fr;
      }
  .right {
    display: flex;
    align-items: center;

    .input-control {
      position: relative;
      font-weight: 500;
      width: 100%;
      h3 {
        text-align: center;
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
        background-color: var(--color-dark);
        padding: 1.1rem 1rem;
        cursor: pointer;
        border-radius: 7px;
        transition: all 0.4s ease-in-out;
        &:hover {
          background-color: var(--color-primary);
        }
      }
    }
  }
}
`;

export default AddEditDoctor;
