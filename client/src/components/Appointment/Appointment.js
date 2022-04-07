import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { InnerLayout } from "../../Layouts";
import Spinner from "../Admin/Spinner";
import {
  createPatient,
  updatePatient,
} from "../../redux/features/patientSlice";
/*eslint-disable*/

const initialState = {
  name: "",
  email: "",
  address: "",
  phone: "",
  title: "",
  date: "",
  description: "",
};

const Appointment = () => {
  const [patientData, setPatientData] = useState(initialState);
  const { error, loading, userPatients } = useSelector((state) => ({
    ...state.patient,
  }));
  const { user } = useSelector((state) => ({
    ...state.auth,
  }));
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { name, email, address, phone, description, title, date } = patientData;

  const titles = [
    "Kinésitherapie",
    "Logopédie",
    "Medecine interne",
    "Neurologie",
    "Neuropsychologie",
    "Orthopédie",
  ];

  const { id } = useParams();

  // update
  useEffect(() => {
    if (id) {
      const singlePatient = userPatients.find((tour) => tour._id === id);
      setPatientData({ ...singlePatient });
    }
  }, [id]);

  useEffect(() => {
    error && toast.error(error);
  }, [error]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && email && address && phone && title && description && date) {
      const updatedPatientData = { ...patientData, name: user?.result?.name };
      if (!id) {
        dispatch(createPatient({ updatedPatientData, navigate, toast }));
      } else {
        dispatch(updatePatient({ id, updatedPatientData, toast, navigate }));
      }
      handleClear();
    }
  };

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setPatientData({ ...patientData, [name]: value });
  };

  const handleClear = () => {
    setPatientData({
      name: "",
      email: "",
      address: "",
      phone: "",
      title: "",
      date: "",
      description: "",
    });
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <SectionJobsStyled>
      <InnerLayout>
        <div className="flex">
          <div className="info">
            <h3>
              <i className="fa-brands fa-ioxhost">Hospice</i>
            </h3>
            <h4>Servicing Hours</h4>
            <p>On sait depuis longtemps que travailler avec du texte lisible</p>
            <div className="info_flex">
              <div className="info_padd">
                <p>Monday-Friday</p>
                <p>Saturday</p>
                <p>Sunday</p>
              </div>
              <div className="info_padd">
                <p>08 00 am - 10 00 pm</p>
                <p>08 00 am - 10 00 pm</p>
                <p>08 00 am - 10 00 pm</p>
              </div>
            </div>
          </div>
          <div className="right">
            <form className="input-control" onSubmit={handleSubmit}>
              <h3>Book an Appointment</h3>
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Patient Name"
                  required
                  value={name}
                  onChange={onInputChange}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="email"
                  placeholder="Patient Email"
                  required
                  value={email}
                  onChange={onInputChange}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="address"
                  placeholder="Patient Address"
                  required
                  value={address}
                  onChange={onInputChange}
                />
              </div>
              <div>
                <input
                  type="number"
                  name="phone"
                  placeholder="Patient Phone"
                  required
                  value={phone}
                  onChange={onInputChange}
                />
              </div>

              <div>
                <select name="title" onChange={onInputChange}>
                  <option value={title}>Disease Type</option>
                  {titles.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <input
                  type="date"
                  name="date"
                  placeholder="Patient date"
                  required
                  value={date}
                  onChange={onInputChange}
                />
              </div>
              <div>
                <textarea
                  rows="4"
                  name="description"
                  placeholder="Message"
                  value={description}
                  onChange={onInputChange}
                ></textarea>
              </div>
              <div>
                <button type="submit" className="s-btn">
                  Confirm Booking
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
  .flex {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    @media screen and (max-width: 600px) {
      grid-template-columns: 1fr;
    }
    .right {
      display: flex;
      align-items: center;
      max-width: 600px;
      margin: auto;
      .input-control {
        position: relative;
        font-weight: 500;
        width: 100%;
        h3 {
          text-align: center;
        }
        input,
        textarea,
        select,
        DatePicker {
          width: 100%;
          font-family: inherit;
          font-size: 14px;
          padding: 0.5rem 1.5rem;
          margin: 5px;
          border: 1px solid var(--color-primary);
          border-radius: 7px;
        }
        .s-btn {
          color: var(--color-white);
          font-size: 14px;
          background-color: #1a4483;
          padding: 0.5rem 1rem;
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
    .info {
      display: flex;
      flex-direction: column;

      .info_flex {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .info_padd {
          p {
            padding: 10px;
            font-weight: 700;
          }
        }
      }
    }
  }
`;

export default Appointment;
