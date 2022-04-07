import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./features/authSlice";
import PatientReducer from "./features/patientSlice";
import DoctorReducer from "./features/doctorSlice";

export default configureStore({
  reducer: {
    auth: AuthReducer,
    patient: PatientReducer,
    doctor: DoctorReducer
  },
});
 