const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");
connectDB();


const app= express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const userRoutes = require("./routes/userRoutes");
app.use("/user",userRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
