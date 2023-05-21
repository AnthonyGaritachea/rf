import express from "express";
import cors from "cors";
import allRoutes from "./routes";

const PORT = process.env.PORT || 8080;
const app = express();
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:1234"]
  })
);
app.use(express.json());
app.use("/", allRoutes);

app.get("/", (req, res) => {
  res.sendStatus(200);
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));
