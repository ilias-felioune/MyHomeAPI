import user from "@/controllers/User";
import express from "express";
const router = express.Router();

/* user route section */
router.get("/", user.getAllUser);
router.get("/:id", user.getUser);
router.post("/",user.postUser);
router.patch("/:id",user.patchUser);
router.delete("/:id",user.deleteUser);

export default router;