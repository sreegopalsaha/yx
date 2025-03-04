import express from "express";
const app = express();
import cors from "cors";
import geminiRouter from "./routes/gemini.routes.js";
import globalErrorHandler from "./middlewares/globalErrorHandler.js";

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));
app.use(express.json({}))
app.use(express.urlencoded({extended: true,}));


app.get("/", (req, res) => {
  res.send("Hello from the backend server!");
});

app.use((req, res, next) => {
  console.log("Request received on: ", req.originalUrl);
  next();
});

app.use("/gemini", geminiRouter);
app.use(globalErrorHandler);

export {app};