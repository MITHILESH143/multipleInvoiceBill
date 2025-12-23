import {createCompany} from "../controller/companyController.js";
import express from "express";
const router = express.Router();

router.post('/', createCompany);
export default router;