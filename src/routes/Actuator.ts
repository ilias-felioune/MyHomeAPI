import actuator from "@/controllers/Actuator";
import express from "express";
const router = express.Router();

/* actuator route section */
router.get("/",actuator.getAll);
router.get("/:id",actuator.get);
router.post("/",actuator.post);
router.patch("/:id",actuator.patch);
router.delete("/:id",actuator.delete);

export default router;