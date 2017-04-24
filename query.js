$(document).ready(function() {

  var reverse = function () {
      $(".image").animate({
        width: "30%",
        height: "30%"
      }, 2000, getBig
    )};
    var getBig = function () {
      $(".image").animate({
        width: "70%",
        height: "70%"
      },2000)
    };
  setInterval(reverse, 2000)
});
