const express = require("express");
const router = express.Router();
const newsController = require("../app/Controllers/NewsController");

// cấu hình cho path new
// newsController.index lấy ra function controller
router.use("/:slug", newsController.detail);
router.use("/", newsController.news);

module.exports = router;
