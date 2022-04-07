import express from "express";
import {
  createdoctor,
  deleteDoctor,
  getDoctor,
  getDoctors,
  getDoctorsBySearch,
  getDoctorsByUser,
  updateDoctor,
} from "../controllers/doctor.js";
const router = express.Router();
import auth from "../middleware/auth.js";

router.get("/search", getDoctorsBySearch);
router.get("/", getDoctors);
router.get("/:id", getDoctor);
router.post("/", auth, createdoctor);
router.delete("/:id", auth, deleteDoctor);
router.patch("/:id", auth, updateDoctor);
router.get("/userDoctors/:id", auth, getDoctorsByUser);

export default router;
