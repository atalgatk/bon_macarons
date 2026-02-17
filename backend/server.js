const express = require("express");
const cors = require("cors");
let orders = [];
require("dotenv").config();
const mongoose = require("mongoose");
const Order = require("./models/Order");


const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected 🚀"))
  .catch((err) => console.log(err));


app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


app.post("/create-order", async (req, res) => {
  try {
    const { name, phone, items, total } = req.body;

    const newOrder = new Order({
      name,
      phone,
      items,
      total,
    });

    await newOrder.save();

    res.json({
      message: "Order saved to database ✅",
      order: newOrder,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

app.get("/orders", async (req, res) => {
  const orders = await Order.find().sort({ createdAt: -1 });
  res.json(orders);
});

