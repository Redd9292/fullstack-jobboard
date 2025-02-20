const {
  getCustomJobs: getCustomJobsService,
} = require("../services/jobService");
const { fetchJobsFromAdzuna } = require("../services/adzunaService");

// Fetch custom jobs from the database
const getCustomJobs = async (req, res) => {
  try {
    const jobs = await getCustomJobsService();
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: "Error fetching custom jobs", error });
  }
};

// Fetch jobs from Adzuna API
const getAdzunaJobs = async (req, res) => {
  try {
    const { location, title } = req.query;
    const jobs = await fetchJobsFromAdzuna({ location, title });
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: "Error fetching Adzuna jobs", error });
  }
};

// Combine custom jobs and Adzuna jobs
const getAllJobs = async (req, res) => {
  try {
    const customJobs = await getCustomJobsService();
    const adzunaJobs = await fetchJobsFromAdzuna(req.query);
    res.json([...customJobs, ...adzunaJobs]);
  } catch (error) {
    res.status(500).json({ message: "Error fetching all jobs", error });
  }
};

module.exports = { getCustomJobs, getAdzunaJobs, getAllJobs };
