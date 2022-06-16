const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const path = require("path");
const app = express();
const route = require("./routes/index");
const db = require("./config/db/index");
const methodOverride = require("method-override");
const SortMiddleware = require("./app/middleware/SortMiddleware");
const port = 3000;

//connect mongodb
db.connect();

// lấy từ folder public đi vào
app.use(express.static(path.join(__dirname, "public")));
// tích hợp middleware để xử lý form
app.use(express.urlencoded({ extended: true }));
// định dạnh cho việc post từ code js lên
app.use(express.json());
app.use(methodOverride("_method"));
//sử dụng custom middleware cho sort
app.use(SortMiddleware);

//HTTP logger log msg ra terminal
app.use(morgan("combined"));
//Template engine
app.engine(
  "hbs",
  handlebars.engine({
    extname: ".hbs",
    helpers: {
      sum: (a, b) => a + b,
      sortable: (filed, sort) => {
        //check filed click
        const sortType = filed === sort.column ? sort.type : "default";

        const icons = {
          default: "oi oi-elevator",
          asc: "oi oi-sort-ascending",
          desc: "oi oi-sort-descending",
        };

        const types = {
          default: "desc",
          asc: "desc",
          desc: "asc",
        };

        const icon = icons[sortType];
        const type = types[sortType];
        return `<a href="?_sort&column=${filed}&type=${type}">
        <span class="${icon}"></span>
      </a>`;
      },
    },
  })
);
app.set("view engine", "hbs");
// __dirname là path thư mục đến resources/views
app.set("views", path.join(__dirname, "resources", "views"));

// run route init
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
