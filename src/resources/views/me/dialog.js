document.addEventListener("DOMContentLoaded", function () {
  var courseId;
  $("#delete-course-model").on("show.bs.modal", function (event) {
    var button = $(event.relatedTarget);
    courseId = button.data("id");
  });
  var btnDeleteCourse = document.getElementById("btn-delete-courses");
  btnDeleteCourse.onclick = function () {
    alert(courseId);
  };
});
