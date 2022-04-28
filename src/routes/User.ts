import user from "@/controllers/User";
import express from "express";
import Auth from "@/middleware/Authorize"
const router = express.Router();

/* user route section */
router.post("/",user.postUser);
router.post("/login",user.userLogin)
router.use(Auth.authorize)
router.get("/",user.getAllUser);
router.get("/:id", user.getUser);
router.patch("/:id",user.patchUser);
router.delete("/:id",user.deleteUser);

export default router;