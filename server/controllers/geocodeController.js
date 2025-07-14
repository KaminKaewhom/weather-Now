const API_KEY = process.env.OPENWEATHER_API_KEY;

const axios = require("axios");

exports.autocompleteCities = async (req, res) => {
  const { q } = req.query;

  if (!q) {
    return res.status(400).json({ error: "Query parameter is required" });
  }

  try {
    const response = await axios.get(
      `https://api.openweathermap.org/geo/1.0/direct`,
      {
        params: {
          q,
          limit: 5,
          appid: API_KEY,
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching autocomplete data:", error);
    res.status(500).json({ error: "Failed to fetch autocomplete data" });
  }
};
