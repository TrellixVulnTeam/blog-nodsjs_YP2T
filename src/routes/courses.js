const express = require("express");
const router = express.Router();
const courseController = require("../app/controllers/CourseController");

// cấu hình các method
// slug -> các path con
router.get("/create", courseController.create);
router.post("/store", courseController.store);
router.get("/:id/edit", courseController.edit);
router.post("/handle-form-actions", courseController.handleFormActions);
router.put("/:id", courseController.update);
router.patch("/:id/restore", courseController.restore);
router.delete("/:id", courseController.delete);
router.delete("/:id/force", courseController.forceDelete);
router.get("/:slug", courseController.detail);

module.exports = router;
