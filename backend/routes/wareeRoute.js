import express from "express";
import createWareeDetails from "../controller/wareeController.js"
const Router = express.Router();
Router.post('/', createWareeDetails);

export default Router;