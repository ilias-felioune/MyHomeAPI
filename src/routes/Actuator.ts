import actuator from "@/controllers/Actuator";
import express from "express";
const router = express.Router();

/* actuator route section */
router.get("/",actuator.getAllActuator);
router.get("/:id",actuator.getActuator);
router.post("/",actuator.postActuator);
router.patch("/:id",actuator.patchActuator);
router.delete("/:id",actuator.deleteActuator);

export default router;