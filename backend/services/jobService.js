const Job = require("../models/Job");

// Save a custom job posting
const saveJob = async (jobData) => {
  try {
    const job = new Job(jobData);
    await job.save();
    return job;
  } catch (error) {
    console.error("Error saving job:", error);
    throw error;
  }
};

// Fetch custom jobs from the database
const getCustomJobs = async () => {
  try {
    const jobs = await Job.find();
    return jobs;
  } catch (error) {
    console.error("Error fetching custom jobs:", error);
    throw error;
  }
};

module.exports = { saveJob, getCustomJobs };
