import express from "express";

export const app = express();

// install middleware
app.use(express.json())