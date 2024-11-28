import express from "express";
import { addCar, deleteCar, getCars, updateCar, getCar } from "../controllers/carController.js";

const router = express.Router();

router.get("/cars", getCars);
router.get("/car/:id", getCar);
router.post("/car", addCar);
router.put("/car/:id", updateCar);
router.delete("/car/:id", deleteCar);



export default router;