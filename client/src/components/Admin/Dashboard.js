import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  getPatients,
  getPatientsByUser,
} from "../../redux/features/patientSlice";
import { InnerLayout } from "../../Layouts";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";
import Sidebar from "./Sidebar";
import { getDoctors } from "../../redux/features/doctorSlice";

const Dashboard = () => {
  const { user } = useSelector((state) => ({ ...state.auth }));
  const { userPatients, loading } = useSelector((state) => ({
    ...state.patient,
  }));
  const { patients } = useSelector((state) => ({ ...state.patient }));
  const { doctors } = useSelector((state) => ({ ...state.doctor }));

  const userId = user?.result?._id;
  const dispatch = useDispatch();

  useEffect(() => {
    if (userId) {
      dispatch(getPatientsByUser(userId));
    }
    dispatch(getPatients());
    dispatch(getDoctors());
  }, [dispatch, userId]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <SectionJobsStyled>
      <InnerLayout>
        {userPatients.length === 0 && (
          <h3 style={{ fontSize: "18px", textAlign: "center" }}>
            Bienvenue: {user?.result?.name}
          </h3>
        )}

        {userPatients.length > 0 && (
          <>
            <h4 className="text-center" style={{ textAlign: "center" }}>
              Dashboard: {user?.result?.name}
            </h4>
          </>
        )}
        <div className="dash_flex">
          <Sidebar />
          <div className="cards-con">
            <JobCardStyled>
              <div className="card-con">
                <Link to="/patients/search">
                <div className="doctors">
                  <p>Patients</p>
                  <p>({patients && patients.length})</p>
                  </div>
                </Link>

                <Link to="/doctors">
                  <div className="doctors">
                  <p>Doctors</p>
                  <p> ({doctors && doctors.length})</p>
                  </div>
                </Link>
              </div>
            </JobCardStyled>
          </div>
        </div>
      </InnerLayout>
    </SectionJobsStyled>
  );
};

const SectionJobsStyled = styled.section`
  background-color: var(--color-neutral-3);
  min-height: 60vh;
  .dash_flex {
    display: grid;
    grid-template-columns: 300px 1fr;
    gap: 1.5rem;
    .cards-con {
      padding-top: 3.5rem;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      grid-gap: 2rem;
      @media screen and (max-width: 720px) {
        grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
      }
    }
    @media screen and (max-width: 720px) {
      grid-template-columns: 1fr;
    }
  }
`;

const JobCardStyled = styled.div`


  .card-con {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    a {
      .doctors {
      background: var(--color-primary-dark);
      border-radius: 7px;
      padding: 5px 20px;
      p{
        font-weight: 600;
        color:  var(--color-white);
        text-align: center;
      }
     }
    }
  }
`;

export default Dashboard;
