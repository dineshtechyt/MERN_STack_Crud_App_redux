import express from "express";
import { dbConnection } from "./db/dbConnection.js";
import dotenv from "dotenv";
import cors from "cors";
import { empRouter } from "./routes/employeeRoutes.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;


app.use(express.urlencoded());
app.use(express.json());
app.use(cors());
dbConnection();

app.use("/api/", empRouter);
app.listen(port, () => {
  console.log(`app listen on port ${port}`);
});
