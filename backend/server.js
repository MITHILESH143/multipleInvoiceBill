import express from "express";
import dotenv from "dotenv"
import connectionDB from "./config/dbConnection.js";
import getWareeDetailsRouter from "./routes/wareeRoute.js"
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
app.use("/api/getWareeDetails", upload.single('MIS'), getWareeDetailsRouter );

// server start
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});