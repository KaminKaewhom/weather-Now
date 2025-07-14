const express = require("express");
const app = express();
require("dotenv").config();
const geocodeRouter = require("./routes/geocodeRoutes");
const weatherRoutes = require("./routes/weatherRoutes");

const PORT = process.env.PORT || 3000;
app.use("/api/geocode", geocodeRouter);
app.use("/api/weather", weatherRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
