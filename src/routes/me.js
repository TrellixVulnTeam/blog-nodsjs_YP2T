const express = require("express");
const router = express.Router();
const meController = require("../app/controllers/MeController");

// cấu hình cho path new
// meController.index lấy ra function controller
// slug -> các path con
router.get("/stored/courses", meController.storedCourses);
router.get("/trash/courses", meController.trashCourses);

module.exports = router;
