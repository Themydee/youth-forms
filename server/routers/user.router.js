import express from "express"

import {details, getDetails} from "../controllers/user.controller.js"

const router = express.Router();

router.post("/details", details)

router.get("/available/:id", getDetails)

export default router