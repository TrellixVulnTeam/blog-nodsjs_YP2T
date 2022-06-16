module.exports = function SortMiddleware(req, res, next) {
  res.locals._sort = {
    enabled: false,
    type: "default",
  };

  // nếu có câu query là _sort thì bật chức năng sort lên
  if (req.query.hasOwnProperty("_sort")) {
    res.locals._sort.enabled = true;
    res.locals._sort.type = req.query.type;
    res.locals._sort.column = req.query.column;
  }

  next();
};
