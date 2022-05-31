const newsRouter = require("./news");
const siteRouter = require("./site");

const route = (app) => {
  //route

  // đối số thứ nhất là tuyến đường path
  // đối số thứ hai là có nhiều tuyến đường con path
  // LƯU Ý:  PATH CHA LUÔN ĐỨNG SAU CÙNG PATH CON ĐỨNG TRƯỚC
  app.use("/news", newsRouter);
  app.use("/", siteRouter);
  // app.get("/search", (req, res) => {
  //   console.log(req.query);
  //   res.render("search");
  // });

  // app.post("/search", (req, res) => {
  //   // mặt định req.body chưa tích hợp middleware
  //   console.log(req.body);
  //   res.send("");
  // });
};

module.exports = route;
