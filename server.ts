import dotenv from "dotenv";
dotenv.config();

import express from "express";

import chapterOneCompletions from "./chapters/1";

const app = express();
const PORT = process.env.PORT;

app.get("/", async (req, res) => {
  const responses = await chapterOneCompletions();

  res.status(201).send(responses);
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
