import express from "express";
import dotenv from "dotenv"
import connectionDB from "./config/dbConnection.js";
import createWareeDetailsRouter from "./routes/wareeRoute.js";
import companyDetaislsRouter from "./routes/companyRoute.js";
import upload from "./config/uploadFile.js";
connectionDB();
dotenv.config();
const app = express();
const port =  process.env.PORT || 3000;

app.use(express.json());
app.use(express.static("../frontend"));
// test route
app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});
app.use("/api/createWareeDetails", upload.single('MIS'), createWareeDetailsRouter);
app.use("/api/companies", upload.single('companyLogo'), companyDetaislsRouter);

// server start
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});