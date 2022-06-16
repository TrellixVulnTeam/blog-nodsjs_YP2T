const newsRouter = require("./news");
const siteRouter = require("./site");
const courseRouter = require("./courses");
const meRouter = require("./me");

const route = (app) => {
  //route

  // đối số thứ nhất là tuyến đường path
  // đối số thứ hai là có nhiều tuyến đường con path
  // LƯU Ý:  PATH CHA LUÔN ĐỨNG SAU CÙNG PATH CON ĐỨNG TRƯỚC
  app.use("/news", newsRouter);
  app.use("/me", meRouter);
  app.use("/courses", courseRouter);
  app.use("/", siteRouter);
};

module.exports = route;
