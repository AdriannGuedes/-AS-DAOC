import express from "express";
import cors from "cors";
import carsRoutes from "./routes/carsRoutes.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", carsRoutes);

app.listen(8800, () => {
    console.log("Rodando");
});