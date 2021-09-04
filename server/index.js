const express = require("express");
const cors = require("cors");
const server = express();

const { purchasesRouter, salesRouter, supplyRouter } = require("./routes");

// Server Config
server.use(express.json());
server.use(cors());

// Routes
server.use("/v1", salesRouter);
server.use("/v1", purchasesRouter);
server.use("/v1", supplyRouter);

server.listen(3000, () => {
  console.log(`BSYS Server App running on port 3000`);
});
