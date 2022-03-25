import sensor from "@/controllers/Sensor";
import express from "express";
const router = express.Router();

/* capteur route section */
router.get("/",sensor.getAllSensor);
router.get("/:id",sensor.getSensor);
router.post("/",sensor.postSensor);
router.patch("/:id",sensor.patchSensor);
router.delete("/:id",sensor.deleteSensor);

export default router;