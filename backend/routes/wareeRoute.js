import express from "express";
import getWareeDetails from "../controller/wareeController.js"
const Router = express.Router();
Router.post('/', getWareeDetails);

export default Router;