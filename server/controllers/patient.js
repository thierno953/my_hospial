import PatientModal from "../models/patientModel.js";
import mongoose from "mongoose";

export const createPatient = async (req, res) => {
  const patient = req.body;
  const newPatient = new PatientModal({
    ...patient,
    creator: req.userId,
    createdAt: new Date().toISOString(),
  });

  try {
    await newPatient.save();
    res.status(201).json(newPatient);
  } catch (error) {
    res.status(404).json({ message: "Something went wrong" });
  }
};

// all && pagination
export const getPatients = async (req, res) => {
  const { page } = req.query;
  try {
    const limit = 6;
    const startIndex = (Number(page) - 1) * limit;
    const total = await PatientModal.countDocuments({});
    const patients = await PatientModal.find().limit(limit).skip(startIndex);
    res.json({
      data: patients,
      currentPage: Number(page),
      totalpatients: total,
      numberOfPages: Math.ceil(total / limit),
    });
  } catch (error) {
    res.status(404).json({ message: "Something went wrong" });
  }
};

export const getPatient = async (req, res) => {
  const { id } = req.params;
  try {
    const patient = await PatientModal.findById(id);
    res.status(200).json(patient);
  } catch (error) {
    res.status(404).json({ message: "Something went wrong" });
  }
};

export const getPatientsByUser = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: "User doesn't exist" });
  }
  const userpatients = await PatientModal.find({ creator: id });
  res.status(200).json(userpatients);
};

export const deletePatient = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res
        .status(404)
        .json({ message: `No patient exist with id: ${id}` });
    }
    await PatientModal.findByIdAndRemove(id);
    res.json({ message: "patient deleted successfully" });
  } catch (error) {
    res.status(404).json({ message: "Something went wrong" });
  }
};

export const updatePatient = async (req, res) => {
  const { id } = req.params;
  const { creator, name, email, address, phone, title, date, description } =
    req.body;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res
        .status(404)
        .json({ message: `No patient exist with id: ${id}` });
    }

    const updatedpatient = {
      creator,
      name,
      email,
      address,
      phone,
      title,
      date,
      description,
      _id: id,
    };
    await PatientModal.findByIdAndUpdate(id, updatedpatient, { new: true });
    res.json(updatedpatient);
  } catch (error) {
    res.status(404).json({ message: "Something went wrong" });
  }
};

export const getPatientsBySearch = async (req, res) => {
  const { searchQuery } = req.query;
  try {
    const title = new RegExp(searchQuery, "i");
    const patients = await PatientModal.find({ title });
    res.json(patients);
  } catch (error) {
    res.status(404).json({ message: "Something went wrong" });
  }
};
