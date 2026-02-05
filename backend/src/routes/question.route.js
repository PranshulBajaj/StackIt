import {Router} from "express"
import { getAllQuestions, post } from "../controllers/question.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router =  Router();

router.route("/post").post(verifyJWT ,post);
router.route("/getQuestions").get(getAllQuestions)

export default router;