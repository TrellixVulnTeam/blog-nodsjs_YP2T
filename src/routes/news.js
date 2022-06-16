const express = require("express");
const router = express.Router();
const newsController = require("../app/controllers/NewsController");

// cấu hình cho path new
// newsController.index lấy ra function controller
// slug -> các path con
router.get("/:slug", newsController.detail);
router.get("/", newsController.news);

module.exports = router;
