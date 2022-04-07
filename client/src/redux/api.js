import axios from "axios";

const devEnv = process.env.NODE_ENV !== "production";

const { REACT_APP_DEV_API, REACT_APP_PROD_API } = process.env;

const API = axios.create({
  baseURL: `${devEnv ? REACT_APP_DEV_API : REACT_APP_PROD_API}`,
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

export const signIn = (formData) => API.post("/users/signin", formData);
export const signUp = (formData) => API.post("/users/signup", formData);
export const googleSignIn = (result) => API.post("/users/googleSignIn", result);

// patients
export const createPatient = (patientData) => API.post("/patient", patientData);
export const getPatients = (page) => API.get(`/patient?page=${page}`);
export const getPatient = (id) => API.get(`/patient/${id}`);
export const deletePatient = (id) => API.delete(`/patient/${id}`);
export const updatePatient = (updatedPatientData, id) =>
  API.patch(`/patient/${id}`, updatedPatientData);
export const getPatientsByUser = (userId) =>
  API.get(`/patient/userPatients/${userId}`);

export const getPatientsBySearch = (searchQuery) =>
  API.get(`/patient/search?searchQuery=${searchQuery}`);

// doctors
export const createdoctor = (doctorData) => API.post("/doctor", doctorData);
export const getDoctors = (page) => API.get(`/doctor?page=${page}`);
export const getDoctor = (id) => API.get(`/doctor/${id}`);
export const deleteDoctor = (id) => API.delete(`/doctor/${id}`);
export const updateDoctor = (updatedDoctorData, id) =>
  API.patch(`/doctor/${id}`, updatedDoctorData);
export const getDoctorsByUser = (userId) =>
  API.get(`/doctor/userDoctors/${userId}`);

export const getDoctorsBySearch = (searchQuery) =>
  API.get(`/doctor/search?searchQuery=${searchQuery}`);
