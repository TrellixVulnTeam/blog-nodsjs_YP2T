const express = require("express");
const router = express.Router();
const siteController = require("../app/Controllers/SiteController");

// cấu hình cho path new
// siteController.index lấy ra function controller
router.use("/search", siteController.search);
router.use("/", siteController.home);

module.exports = router;
