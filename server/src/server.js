const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Health check
app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "JobOS API is running",
  });
});

// Jobs
app.get("/api/jobs", (req, res) => {
  const jobs = [
    {
      id: 1,
      title: "Junior Full-Stack Developer",
      company: "Example Technologies",
      location: "Johannesburg, Gauteng",
      type: "Full-time",
      skills: ["React", "JavaScript", "Node.js"],
    },
    {
      id: 2,
      title: "Junior Software Developer",
      company: "Digital Solutions",
      location: "Sandton, Gauteng",
      type: "Full-time",
      skills: ["JavaScript", "React", "MongoDB"],
    },
    {
      id: 3,
      title: "Junior Cloud Developer",
      company: "Cloud Systems",
      location: "Remote",
      type: "Contract",
      skills: ["Azure", "JavaScript", "Node.js"],
    },
  ];

  res.json({
    success: true,
    count: jobs.length,
    jobs,
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`JobOS API running on http://localhost:${PORT}`);
});