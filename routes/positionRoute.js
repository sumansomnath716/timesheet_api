const express = require("express");
const { positionAddEdit,getPositions } = require("../controllers/PositionController");

const router = express.Router();

router.post("/position_add_edit", positionAddEdit);
router.get("/position", getPositions);


module.exports = {
  routes: router,
};
