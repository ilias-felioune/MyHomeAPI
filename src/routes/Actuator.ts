import actuator from "@/controllers/Actuator";
import express from "express";
import Auth from "@/middleware/Authorize"
const router = express.Router();

/* actuator route section */
router.get("/",Auth.authorize,actuator.getAllActuator);
router.get("/:id",Auth.authorize,actuator.getActuator);
router.post("/",Auth.authorize,actuator.postActuator);
router.patch("/:id",Auth.authorize,actuator.patchActuator);
router.delete("/:id",Auth.authorize,actuator.deleteActuator);

export default router;