import sensor from "@/controllers/Sensor";
import express from "express";
import Auth from "@/middleware/Authorize"
const router = express.Router();

/* capteur route section */
router.use(Auth.authorize)
router.get("/",sensor.getAllSensor);
router.get("/:id",sensor.getSensor);
router.post("/",sensor.postSensor);
router.patch("/:id",sensor.patchSensor);
router.delete("/:id",sensor.deleteSensor);

export default router;