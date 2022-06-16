const express = require("express");
const router = express.Router();
const siteController = require("../app/controllers/SiteController");

// cấu hình cho path new
// siteController.index lấy ra function controller
// slug -> các path con
router.get("/search", siteController.search);
router.get("/", siteController.home);

module.exports = router;
