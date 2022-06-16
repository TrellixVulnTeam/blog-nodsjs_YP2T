// thằng mongodb cung cấp cho chúng ta 1 method là to object
module.exports = {
  // trả về 1 array object đã fix lỗi bảo mật của handlebar
  multipleMongooseToObject: function (mongooseArrayObject) {
    return mongooseArrayObject.map((mongo) => mongo.toObject());
  },
  // trả về 1 document duy nhất
  mongooseToObject: function (mongoose) {
    return mongoose ? mongoose.toObject() : mongoose;
  },
};
