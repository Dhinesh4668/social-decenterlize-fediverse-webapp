import  express  from "express";
import { feedPost } from "../Controllers/feedPost";

const router = express.Router();

router.get("/", feedPost)