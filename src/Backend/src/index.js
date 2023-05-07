import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { getConnection } from "./config/db.js";
import countryRoutes from "./routes/countryRoutes.js";
import ticketPricesRoutes from "./routes/ticketPricesRoutes.js";
import servicePricesRoutes from "./routes/servicePricesRoutes.js";
import reservationListRoutes from "./routes/reservationListRoutes.js";
import spotsRoutes from "./routes/spotsRoutes.js";

const app = express();
const port = process.env.PORT || 3000;

dotenv.config();
getConnection();
const corsOptions = {};
const allowedDomains = ["http://localhost:5173/"];

app.use(express.json());
app.use(cors(corsOptions));

//Routes
app.use('/api', countryRoutes);
app.use('/api', ticketPricesRoutes);
app.use('/api', servicePricesRoutes);
app.use('/api', spotsRoutes);
app.use('/api/reservation-list', reservationListRoutes);

app.listen(port, () => {
  console.log(`LosOsitos Server running on port ${port}`);
});