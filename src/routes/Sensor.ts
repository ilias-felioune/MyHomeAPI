import sensor from "@/controllers/Sensor";
import express from "express";
import Auth from "@/middleware/Authorize"
const router = express.Router();

/* capteur route section */
router.get("/",Auth.authorize,sensor.getAllSensor);
router.get("/:id",Auth.authorize,sensor.getSensor);
router.post("/",Auth.authorize,sensor.postSensor);
router.patch("/:id",Auth.authorize,sensor.patchSensor);
router.delete("/:id",Auth.authorize,sensor.deleteSensor);

export default router;