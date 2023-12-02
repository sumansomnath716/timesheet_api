const express = require("express");
const { positionAddEdit,getPositions } = require("../controllers/PositionController");

const router = express.Router();

router.get("/", getPositions);
router.post("/modify", positionAddEdit);



module.exports = {
  routes: router,
};
