var dataa = 0;
var page = 0;
var index = 1;
$(document).ready(function () {
  $("#pag").text("Pagination");
  $.get(
    "https://api.github.com/users/john-smilga/followers?per_page=100",
    function (data) {
      dataa = data;
      console.log(dataa[4]);
      $("#p1").click();
    }
  );
});

$("#p1").click(function () {
  $("#p1")
    .removeClass("bg-white text-secondary")
    .addClass("bg-dark text-white");
  $("#p2,#p3,#p4,#p5,#p6,#p7,#p8,#p9,#p10")
    .removeClass("bg-dark text-white")
    .addClass("bg-white text-secondary");
  page = 0;
  index = 1;
  display(page);
});

$("#p2").click(function () {
  $("#p2")
    .removeClass("bg-white text-secondary")
    .addClass("bg-dark text-white");
  $("#p1,#p3,#p4,#p5,#p6,#p7,#p8,#p9,#p10")
    .removeClass("bg-dark text-white")
    .addClass("bg-white text-secondary");
  page = 11;
  index = 2;
  display(page);
});

$("#p3").click(function () {
  $("#p3")
    .removeClass("bg-white text-secondary")
    .addClass("bg-dark text-white");
  $("#p1,#p2,#p4,#p5,#p6,#p7,#p8,#p9,#p10")
    .removeClass("bg-dark text-white")
    .addClass("bg-white text-secondary");
  page = 21;
  index = 3;
  display(page);
});

$("#p4").click(function () {
  $("#p4")
    .removeClass("bg-white text-secondary")
    .addClass("bg-dark text-white");
  $("#p1,#p2,#p3,#p5,#p6,#p7,#p8,#p9,#p10")
    .removeClass("bg-dark text-white")
    .addClass("bg-white text-secondary");
  page = 31;
  index = 4;

  display(page);
});

$("#p5").click(function () {
  $("#p5")
    .removeClass("bg-white text-secondary")
    .addClass("bg-dark text-white");
  $("#p1,#p2,#p3,#p4,#p6,#p7,#p8,#p9,#p10")
    .removeClass("bg-dark text-white")
    .addClass("bg-white text-secondary");
  page = 41;
  index = 5;

  display(page);
});

$("#p6").click(function () {
  $("#p6")
    .removeClass("bg-white text-secondary")
    .addClass("bg-dark text-white");
  $("#p1,#p2,#p3,#p4,#p5,#p7,#p8,#p9,#p10")
    .removeClass("bg-dark text-white")
    .addClass("bg-white text-secondary");
  page = 51;
  index = 6;

  display(page);
});

$("#p7").click(function () {
  $("#p7")
    .removeClass("bg-white text-secondary")
    .addClass("bg-dark text-white");
  $("#p1,#p2,#p3,#p4,#p5,#p6,#p8,#p9,#p10")
    .removeClass("bg-dark text-white")
    .addClass("bg-white text-secondary");
  page = 61;
  index = 7;

  display(page);
});

$("#p8").click(function () {
  $("#p8")
    .removeClass("bg-white text-secondary")
    .addClass("bg-dark text-white");
  $("#p1,#p2,#p3,#p4,#p5,#p6,#p7,#p9,#p10")
    .removeClass("bg-dark text-white")
    .addClass("bg-white text-secondary");
  page = 71;
  index = 8;

  display(page);
});

$("#p9").click(function () {
  $("#p9")
    .removeClass("bg-white text-secondary")
    .addClass("bg-dark text-white");
  $("#p1,#p2,#p3,#p4,#p5,#p6,#p7,#p8,#p10")
    .removeClass("bg-dark text-white")
    .addClass("bg-white text-secondary");
  page = 81;
  index = 9;
  display(page);
});

$("#p10").click(function () {
  $("#p10")
    .removeClass("bg-white text-secondary")
    .addClass("bg-dark text-white");
  $("#p1,#p2,#p3,#p4,#p5,#p6,#p7,#p8,#p9")
    .removeClass("bg-dark text-white")
    .addClass("bg-white text-secondary");
  page = 90;
  index = 10;
  display(page);
});

$("#prev").click(function () {
  index--;
  if (index == 0) {
    index = 10;
  }
  $(`#p${index}`).click();
});

$("#next").click(function () {
  index++;
  if (index == 11) {
    index = 1;
  }
  $(`#p${index}`).click();
});

function display(page) {
  for (let i = 1; i < 11; i++) {
    $(`#${i} #img${i}`).attr("src", dataa[page + i - 1].avatar_url);
    $(`#${i} #h${i}`).text(dataa[page + i - 1].login);
    $(`#${i} button`).attr("id", dataa[page + i - 1].login);
  }
}

function locationn(idd) {
  location.href = `https://github.com//${idd}`;
}
