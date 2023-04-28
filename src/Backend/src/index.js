import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { getConnection } from "./config/db.js";
import countryRoutes from "./routes/countryRoutes.js";

const app = express();
const port = process.env.PORT || 3000;

dotenv.config();
getConnection();
const corsOptions = {};
console.log(process.env.FRONTEND_URL)
const allowedDomains = [process.env.FRONTEND_URL];

app.use(express.json());
app.use(cors(corsOptions));

//Routes
app.use('/api/country', countryRoutes);

console.log(process.env.DB_USER);
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});