var myArr = [5, 18, 30,];
var Myint = {
    role: true,
    name: "jeko kiteishvili",
    favsport: [
        " Football",
        " Basketball",
        " Formula1",
        " Tennis"
    ],
    Age: 27,
    isAdmin: function () {
        var admin;
        admin = "<span class=\"badge bg-success\">".concat(Myint.name, " is Admin</span>");
        return admin;
    }
};
var card = "<div class=\"col-lg-4 mx-auto mt-5\">\n<div class=\"card rounded shadow\">\n<div class=\"card-body\">\n  <h5 class=\"card-title\"> ".concat(Myint.name, "</h5>\n  <h6 class=\"card-subtitle mb-2 text-muted\"> ").concat(Myint.Age, "</h6>\n  <p class=\"card-text\">").concat(Myint.favsport, "</p>\n  ").concat(Myint.isAdmin(), "\n</div>\n</div>\n</div>");
var row = document.querySelector(".row");
row.innerHTML = card;
