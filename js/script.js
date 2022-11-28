$(document).ready(function () {
  /* slide */
  $("#slide > ul").slidy({
    children: "li",
    width: 2000,
    height: 880,
    animation: "fade",
  });
  /* header fix */
  $("#headerArea").scrollToGiveClass({
    baseline: 90,
    class: "active",
  });
});
