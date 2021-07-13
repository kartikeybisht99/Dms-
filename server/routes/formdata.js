import express from "express";
const router = express.Router();

import { formoneonetwo,formoneonethree } from "../controllers/formdata.js";

router.post("/1.1.2", formoneonetwo);
router.post('/1.1.3',formoneonethree)

export default router;