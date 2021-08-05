import express from "express";

const app = express();
const PORT = 4000;

app.get("/", (req, res) => {
  res.send(`Node & Express server running on port ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
