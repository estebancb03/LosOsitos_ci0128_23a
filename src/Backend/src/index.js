import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import { getConnection } from "./config/db.js";
import countryRoutes from "./routes/countryRoutes.js";
import mailQRCodeRoute from "./routes/mailQRCodeRoute.js";
import servicePricesRoutes from "./routes/servicePricesRoutes.js";
import reservationRoutes from "./routes/reservationRoutes.js";
import personRoutes from "./routes/personRoutes.js";
import spotsRoutes from "./routes/spotsRoutes.js";
import ticketRoutes from "./routes/ticketRoutes.js";
import ticketReservationRoutes from "./routes/ticketReservationRoutes.js";
import campingRoutes from "./routes/campingRoutes.js";
import picnicRoutes from "./routes/picnicRoutes.js";
import vehicleRoutes from "./routes/vehicleRoutes.js";
import clientRoutes from "./routes/clientRoutes.js";
import serviceRoutes from "./routes/serviceRoutes.js";
import spotsCampingRoutes from "./routes/spotsCampingRoutes.js";
import serviceReservationRoutes from "./routes/serviceReservationRoutes.js";
import reportsRoutes from "./routes/reportsRoutes.js"
import spotPriceRoutes from "./routes/spotPriceRoutes.js";
import parkStatus from "./routes/parkStatus.js";
import settingCapacityRoutes from "./routes/settingCapacityRoutes.js";

const app = express();
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

const port = process.env.PORT || 3000;

app.use(express.json({ limit: '50mb' }));
dotenv.config();
getConnection();
const corsOptions = {};
const allowedDomains = ["http://localhost:5173/"];

app.use(express.json());
app.use(cors(corsOptions));

//Routes
app.use('/api', countryRoutes);
app.use('/api', servicePricesRoutes);
app.use('/api', mailQRCodeRoute);
app.use('/api', personRoutes);
app.use('/api', spotsRoutes);
app.use('/api', reservationRoutes);
app.use('/api', reportsRoutes)
app.use('/api', ticketRoutes);
app.use('/api', campingRoutes);
app.use('/api', picnicRoutes);
app.use('/api', ticketReservationRoutes);
app.use('/api', vehicleRoutes);
app.use('/api', clientRoutes);
app.use('/api', serviceRoutes);
app.use('/api', spotsCampingRoutes);
app.use('/api', spotPriceRoutes);
app.use('/api', serviceReservationRoutes);
app.use('/api', parkStatus);
app.use('/api', settingCapacityRoutes);

app.listen(port, () => {
  console.log(`[] LosOsitos Server running on port ${port}...`);
});