const express = require("express");
const workQueue = require("./queue");

const app = express();
const port = 3000;

// Endpoint to trigger the background task
app.get("/sendOrderToSocket", async (req, res) => {
  try {
    // Add a job to the queue
    await workQueue.add({"order_id": "12345"});
    res.status(200).json({ message: "Success" });
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Add health check endpoint
app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
