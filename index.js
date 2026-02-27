import dotenv from "dotenv";
dotenv.config();

import express from "express";
import dbConnect from "./config/db.js";
import userRouter from "./routers/userRoute.js";
import cors from "cors";


const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/users", userRouter);

// connect DB before handling requests
// connect DB before handling requests (start connection asynchronously)
dbConnect()
	.then(() => console.log("DB connected"))
	.catch((err) => console.error("DB connection error:", err));

export default app;