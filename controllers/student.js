const student_data = require("../data/students.json"); // Importing student data from a JSON file

const getAllStudents = (req, res) => {
  // Extracting info from the getIPAddressAndDeviceType middleware
  const info = req.info;
  const students = student_data;

  res.status(200).json({
    students,
    ...info,
  });
};

const getStudentById = (req, res) => {
  const { student_id } = req.body;
  const students = student_data;

  const student = students.filter((student) => {
    return student?.student_id === student_id;
  });

  // Extracting info from the getIPAddressAndDeviceType middleware
  const info = req.info;

  res.status(200).json({
    student: student[0],
    ...info,
  });
};

const getCS548StudentsIds = (req, res) => {
  const students = student_data;
  const student_ids = [];

  students.forEach((student) => {
    student?.courses.forEach((course) => {
      if (course?.course_id === "CS548") {
        if (student?.student_id) {
          student_ids.push(student.student_id);
        }
      }
    });
  });

  // Extracting info from the getIPAddressAndDeviceType middleware
  const info = req.info;

  res.status(200).json({
    student_ids,
    ...info,
  });
};

const getStudentsExcludeCS548 = (req, res) => {
  const { student_id } = req.body;
  const students = student_data;
  const student_courses = [];

  students.map((student) => {
    if (student.student_id === student_id) {
      student.courses.map((course) => {
        if (course.course_id !== "CS548") {
          student_courses.push(course.course_id);
        }
      });
    }
  });

  const students_filter = students.filter((student) => {
    return student.courses.some((course) => {
      return student_courses.includes(course.course_id);
    });
  });

  // Extracting info from the getIPAddressAndDeviceType middleware
  const info = req.info;

  res.status(200).json({
    students: students_filter,
    ...info,
  });
};

module.exports = {
  getAllStudents,
  getStudentById,
  getCS548StudentsIds,
  getStudentsExcludeCS548,
};
