const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const path = require("path");
const app = express();
const route = require("./routes/index");
const port = 3000;

// lấy từ folder public đi vào
app.use(express.static(path.join(__dirname, "public")));
// tích hợp middleware để xử lý form
app.use(express.urlencoded({ extended: true }));
// định dạnh cho việc post từ code js lên
app.use(express.json());

//HTTP logger
app.use(morgan("combined"));
//Template engine
app.engine("hbs", handlebars.engine({ extname: ".hbs" }));
app.set("view engine", "hbs");
// __dirname là path thư mục đến resources/views
app.set("views", path.join(__dirname, "resources/views"));
console.log(path.join(__dirname, "resources/views"));

// run route init
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
