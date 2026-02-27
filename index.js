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

// simple root route to avoid `Cannot GET /` on deployments
app.get("/", (req, res) => res.status(200).json({ message: "LMS backend running" }));

// connect DB before handling requests
// connect DB before handling requests (start connection asynchronously)
dbConnect()
	.then(() => console.log("DB connected"))
	.catch((err) => console.error("DB connection error:", err));

export default app;
// also export a handler usable by serverless platforms (Express app is a valid handler)
export const handler = app;