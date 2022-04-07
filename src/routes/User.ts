import user from "@/controllers/User";
import express from "express";
import Auth from "@/middleware/Authorize"
const router = express.Router();

/* user route section */

router.get("/",Auth.authorize,user.getAllUser);
router.get("/:id",Auth.authorize, user.getUser);
router.post("/",user.postUser);
router.post("/login",user.userLogin)
router.patch("/:id",Auth.authorize,user.patchUser);
router.delete("/:id",Auth.authorize,user.deleteUser);

export default router;