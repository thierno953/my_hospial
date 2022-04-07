import mongoose from "mongoose";

const patientSchema = mongoose.Schema({
  name: String,
  email: String,
  phone: Number,
  address: String,
  title: String,
  creator: String,
  description: String,
  date: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const PatientModal = mongoose.model("Patient", patientSchema);

export default PatientModal;
