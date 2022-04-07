import mongoose from "mongoose";

const doctorSchema = mongoose.Schema({
  name: String,
  email: String,
  phone: Number,
  address: String,
  title: String,
  creator: String,
  description: String,
  imageFile: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const DoctorModal = mongoose.model("Doctor", doctorSchema);

export default DoctorModal;
