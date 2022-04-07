import express from "express";
import {
  createPatient,
  deletePatient,
  getPatient,
  getPatients,
  getPatientsBySearch,
  getPatientsByUser,
  updatePatient,
} from "../controllers/patient.js";
import auth from "../middleware/auth.js";
const router = express.Router();

router.get("/search", getPatientsBySearch);
router.get("/", getPatients);
router.get("/:id", getPatient);
router.post("/", createPatient);
router.delete("/:id", auth, deletePatient);
router.patch("/:id", auth, updatePatient);
router.get("/userPatients/:id", auth, getPatientsByUser);

export default router;
