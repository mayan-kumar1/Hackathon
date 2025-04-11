const express = require("express");
const path = require("path"); // Import path module
const app = express();
const port = 8080;

// Serve static files from the "static" folder
app.use(express.static(path.join(__dirname, "static")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "static", "index.html")); // Corrected path
});

app.get("/patientRegistration", (req, res) => {
  res.sendFile(path.join(__dirname, "static", "patientRegistration.html")); // Corrected path
});

app.get("/doctorRegistration", (req, res) => {
  res.sendFile(path.join(__dirname, "static", "doctorRegistration.html")); // Corrected path
});

app.get("/patientDashboard", (req, res) => {
  res.sendFile(path.join(__dirname, "static", "patientDashboard.html")); // Corrected path
});

app.get("/doctorDashboard", (req, res) => {
  res.sendFile(path.join(__dirname, "static", "doctorDashboard.html")); // Corrected path
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
