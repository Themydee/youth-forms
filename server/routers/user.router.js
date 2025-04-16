import express from "express"

import {details, fetchedDetails} from "../controllers/user.controller.js"

const router = express.Router();

router.post("/details", details)

router.get("/available", fetchedDetails)

export default router