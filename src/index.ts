import express from "express";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";
import apiRoutes from "./routes";

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(helmet());
app.use(json());

app.use("/api/v1", apiRoutes);
app.use("/v1", apiRoutes);

app.get("/deyal", (req, res) => {
  res.json({
    name: "Deryal-store",
  });
});

const port = process.env.POT || 3030;
app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
