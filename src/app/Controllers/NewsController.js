class NewsController {
  // [GET] /news
  news(req, res) {
    res.render("news");
  }

  // [GET] /news/slug -> nhiều con dynamic
  detail(req, res) {
    res.send("NEW DETAIL!!!");
  }
}

module.exports = new NewsController();

//đến bài 20
