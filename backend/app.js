const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/connectDb");
const cors = require("cors");
const app = express();

dotenv.config();
Port = process.env.PORT;

const products = require("./routes/product");
const order = require("./routes/order");

app.use(express.json()); 
app.use(cors())
app.use("/api/v1/", products);
app.use("/api/v1/", order);

connectDB();

app.listen(Port, () => {
  console.log(`Server is listening ${process.env.NODE_ENV}`);
});
