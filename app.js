/*const express = require('express');
const app = express();
const PORT = 8801;

app.listen(PORT, () => {
  console.log("Server is running on port ${PORT}");
});
*/
import express from "express";
import{config} from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import { dbConnection } from "./database/dbConnection.js";

const app=express();
config ({path : "./config/config.env"});

app.use(cors({
  origin: [process.env.FRONTEND_URL, process.env.DASHBOARD_URL],
  method: ["GET", "POST", "DELETE", "PUT"],
  credentials: true,
})
);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  fileUpload({
    useTempFiles : true,
    tempFileDir : "/temp/"

  })
)

dbConnection();


export default app;


