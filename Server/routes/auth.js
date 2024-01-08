import express from "express";
import { auth } from "../Controllers/auth";

const router = express.Router();

router.get("/", auth)

export default router