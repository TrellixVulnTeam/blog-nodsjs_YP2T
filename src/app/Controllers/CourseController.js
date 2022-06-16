const Course = require("../models/Course");
const { mongooseToObject } = require("../../util/mongoose");

class CourseController {
  // [GET] /courses/:lug
  detail(req, res, next) {
    // trả json về cho client
    Course.findOne({ slug: req.params.slug })
      .then((course) => {
        res.render("courses/detail", { course: mongooseToObject(course) });
      })
      .catch((error) => next(error));
  }

  // [GET] /courses/create
  create(req, res, next) {
    res.render("courses/create");
  }

  // [POST] /courses/store
  // req.body lấy data từ form data phía client
  store(req, res, next) {
    req.body.image = `https://img.youtobe.com/vi/${req.body.videoId}/sddfault.jpg`;
    const course = new Course(req.body);
    course
      .save()
      .then(() => res.redirect("/me/stored/courses"))
      .catch(next);
  }

  // [GET] /courses/:id/edit
  edit(req, res, next) {
    Course.findById(req.params.id)
      .then((courses) =>
        res.render("courses/edit", {
          courses: mongooseToObject(courses),
        })
      )
      .catch(next);
  }

  // [PUT] /courses/:id
  update(req, res, next) {
    Course.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect("/me/stored/courses"))
      .catch(next);
  }

  // [DELETE] /courses/:id
  // xoá mềm
  // xoá nhưng database vẫn lưu
  delete(req, res, next) {
    Course.delete({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  }

  // [DELETE] /courses/:forceDelete
  // xoá vĩnh viễn
  forceDelete(req, res, next) {
    Course.deleteOne({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  }

  // [PATCH] /courses/:id
  restore(req, res, next) {
    Course.restore({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  }

  // [POST] /courses/handle-form-actions
  handleFormActions(req, res, next) {
    switch (req.body.action) {
      case "delete":
        // $in: req.body.courseIds xoá tất cả object có id trong mảng
        Course.delete({ _id: { $in: req.body.courseIds } })
          .then(() => res.redirect("back"))
          .catch(next);
        break;

      default:
        req.json({ msg: "Action is invalid! " });
    }
  }
}

module.exports = new CourseController();
