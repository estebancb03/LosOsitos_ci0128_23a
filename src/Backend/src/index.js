import cors from "cors";
import dotenv from "dotenv";
import express from "express";

const app = express();
const port = process.env.PORT || 3000;

dotenv.config();
const corsOptions = {};
const allowedDomains = [process.env.FRONTEND_URL];

app.use(express.json());
app.use(cors(corsOptions));
//Routes
//app.use('/api/', exampleRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});