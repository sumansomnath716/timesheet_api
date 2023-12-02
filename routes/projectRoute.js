const express = require("express");
const { projectAddEdit,getProject,deleteProject} = require("../controllers/ProjectController");

const router = express.Router();

router.post("/modify", projectAddEdit);
router.get("/", getProject);
router.get('/delete',deleteProject);

module.exports = {
  routes: router,
};
