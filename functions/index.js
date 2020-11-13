const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51Hme46A6CjnMXja2j3vma9lrMFa5phNciWolFT6cQBn3kUAHPZMgTdDRCs4rynlLnqUHdrSMBK1t3mlXls4KPuC500kBgc6e1o"
);

// API

// App Config
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// API routes
app.get("/", (req, res) => res.send("hello world"));

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;

  console.log(total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "inr",
  });

  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen command
exports.api = functions.https.onRequest(app);

// http://localhost:5001/clone-c9d80/us-central1/api
