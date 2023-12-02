const express = require("express");
const { technologyAddEdit,getTechnology,deleteTechnology} = require("../controllers/technologyController");

const router = express.Router();

router.post("/modify", technologyAddEdit);
router.get("/", getTechnology);
router.get('/delete',deleteTechnology);

module.exports = {
  routes: router,
};