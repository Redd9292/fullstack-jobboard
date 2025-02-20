const express = require("express");
const {
  getCustomJobs,
  getAdzunaJobs,
  getAllJobs,
} = require("../controllers/jobController");
const router = express.Router();

router.get("/custom", getCustomJobs);
router.get("/adzuna", getAdzunaJobs);
router.get("/", getAllJobs);

module.exports = router;
