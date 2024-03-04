const express = require("express");
// Importing the middleware function for getting IP address and device type
const getIPAddressAndDeviceType = require("../middlewares/get_info");
const {
  getAllStudents,
  getStudentById,
  getCS548StudentsIds,
  getStudentsExcludeCS548,
} = require("../controllers/student");

const router = express.Router();

// Using the getIPAddressAndDeviceType middleware for all routes in this router
router.use(getIPAddressAndDeviceType);

// Route for getting all students
router.get("/students", getAllStudents);

// Route for getting a student by ID
router.post("/students/student-id", getStudentById);

// Route for getting students with CS548 course IDs
router.post("/students/cs548", getCS548StudentsIds);

// Route for getting students excluding those with CS548 course IDs
router.post("/students/exclude-cs548", getStudentsExcludeCS548);

module.exports = router;
