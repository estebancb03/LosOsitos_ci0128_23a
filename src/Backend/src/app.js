import express, { json } from "express";
import config from "./config";

const app = express()

// Settings
app.set("port", config.port)

// Middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))

export default app