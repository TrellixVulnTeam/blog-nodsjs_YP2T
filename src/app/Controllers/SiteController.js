const Course = require("../models/Course");
const {
  multipleMongooseToObject,
  mongooseToObject,
} = require("../../util/mongoose");

class SiteController {
  // [GET] /
  /**
   * đối số thứ nhất trả yêu cầu của người dùng request
   * đối số thứ hai trả về data từ database cho client
   * đối số thứ ba là 1 dạng middleware nơi tập trung lỗii
   */
  home(req, res, next) {
    // trả json về cho client
    // Course.find({}, function (err, courses) {
    //   if (!err) {
    //     res.json(courses);
    //   } else {
    //     next(err);
    //   }
    // });

    // dạng promises tương tự như hàm trên
    Course.find({})
      .then((courses) => {
        // vì lỗi bảo mật nên chuyển của handlebar nên chuyển lại object thường
        res.render("home", { courses: multipleMongooseToObject(courses) });
      })
      .catch((error) => next(error));
  }

  // [GET] /search
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();

//đến bài 20
