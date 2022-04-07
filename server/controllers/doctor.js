import mongoose from "mongoose";
import DoctorModal from "../models/doctorModel.js";

export const createdoctor = async (req, res) => {
  const doctor = req.body;
  const newDoctor = new DoctorModal({
    ...doctor,
    creator: req.userId,
    createdAt: new Date().toISOString(),
  });

  try {
    await newDoctor.save();
    res.status(201).json(newDoctor);
  } catch (error) {
    res.status(404).json({ message: "Something went wrong" });
  }
};

// export const getdoctors = async (req, res) => {
//   try {
//     const tours = await DoctorModal.find();
//     res.status(200).json(tours);
//   } catch (error) {
//     res.status(404).json({ message: "Something went wrong" });
//   }
// };

// all && pagination
export const getDoctors = async (req, res) => {
  const { page } = req.query;
  try {
    // const tours = await DoctorModal.find();
    // res.status(200).json(tours);

    const limit = 6;
    const startIndex = (Number(page) - 1) * limit;
    const total = await DoctorModal.countDocuments({});
    const doctors = await DoctorModal.find().limit(limit).skip(startIndex);
    res.json({
      data: doctors,
      currentPage: Number(page),
      totalDoctors: total,
      numberOfPages: Math.ceil(total / limit),
    });
  } catch (error) {
    res.status(404).json({ message: "Something went wrong" });
  }
};

export const getDoctor = async (req, res) => {
  const { id } = req.params;
  try {
    const doctor = await DoctorModal.findById(id);
    res.status(200).json(doctor);
  } catch (error) {
    res.status(404).json({ message: "Something went wrong" });
  }
};

export const getDoctorsByUser = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: "User doesn't exist" });
  }
  const userDoctors = await DoctorModal.find({ creator: id });
  res.status(200).json(userDoctors);
};

export const deleteDoctor = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res
        .status(404)
        .json({ message: `No Doctor exist with id: ${id}` });
    }
    await DoctorModal.findByIdAndRemove(id);
    res.json({ message: "Doctor deleted successfully" });
  } catch (error) {
    res.status(404).json({ message: "Something went wrong" });
  }
};

export const updateDoctor = async (req, res) => {
  const { id } = req.params;
  const {
    creator,
    name,
    email,
    address,
    phone,
    title,
    description,
    imageFile,
  } = req.body;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res
        .status(404)
        .json({ message: `No Doctor exist with id: ${id}` });
    }

    const updatedDoctor = {
      creator,
      name,
      email,
      address,
      phone,
      title,
      description,
      imageFile,
      _id: id,
    };
    await DoctorModal.findByIdAndUpdate(id, updatedDoctor, { new: true });
    res.json(updatedDoctor);
  } catch (error) {
    res.status(404).json({ message: "Something went wrong" });
  }
};

export const getDoctorsBySearch = async (req, res) => {
  const { searchQuery } = req.query;
  try {
    const title = new RegExp(searchQuery, "i");
    const doctors = await DoctorModal.find({ title });
    res.json(doctors);
  } catch (error) {
    res.status(404).json({ message: "Something went wrong" });
  }
};
