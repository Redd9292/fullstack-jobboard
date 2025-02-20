const axios = require("axios");

const ADZUNA_API_ID = process.env.ADZUNA_API_ID;
const ADZUNA_API_KEY = process.env.ADZUNA_API_KEY;
const ADZUNA_BASE_URL = "https://api.adzuna.com/v1/api/jobs";

// Fetch jobs from Adzuna API
const fetchJobsFromAdzuna = async (params) => {
  try {
    const response = await axios.get(`${ADZUNA_BASE_URL}/search/1`, {
      params: {
        app_id: ADZUNA_API_ID,
        app_key: ADZUNA_API_KEY,
        ...params,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error fetching jobs from Adzuna:", error);
    throw error;
  }
};

module.exports = { fetchJobsFromAdzuna };
