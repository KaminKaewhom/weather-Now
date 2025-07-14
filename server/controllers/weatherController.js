const API_KEY = process.env.OPENWEATHER_API_KEY;

const axios = require("axios");

exports.getCurrentWeather = async (req, res) => {
  const { lat, lon } = req.query;
  if (!lat || !lon)
    return res.status(400).json({ error: "lat lon parameter is required" });
  try {
    const response = await axios.get(
      "https://api.openweathermap.org/data/2.5/weather",
      {
        params: {
          lat,
          lon,
          appid: API_KEY,
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching Weather data:", error);
    res.status(500).json({ error: "Failed to fetch Weather data" });
  }
};
