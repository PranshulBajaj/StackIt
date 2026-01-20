import {Router} from "express"
import { post } from "../controllers/question.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router =  Router();

router.route("/post").post(verifyJWT ,post);

export default router;