$(document).ready(function () {
  /* slide */
  $("#slide > ul").bxSlider({
    auto: "true",
    nextText: "",
    prevText: "",
  });
  /* header fix */
  $("#headerArea").scrollToGiveClass({
    baseline: 90,
    class: "active",
  });
  /* scroll effect */
  $("#stylePick .title").scrollToGiveClass({
    baseline: "middle",
    add: 300,
  });

  $(".style-contents").scrollToGiveClass({
    baseline: "middle",
    add: 300,
  });
  $("#whats-content .title").scrollToGiveClass({
    baseline: "middle",
    add: 300,
  });
  $("#whats-inner").scrollToGiveClass({
    baseline: "middle",
    add: 300,
  });
  $("#best-area").scrollToGiveClass({
    baseline: "middle",
    add: 300,
  });
  $("#best-area").scrollToGiveClass({
    baseline: "middle",
    add: 300,
  });
  $(".style-contents > ul").bxSlider({
    auto: "true",
    maxSlides: 3,
    slideWidth: 500,
    moveSlides: 1,
    speed: 700,
    pause: 5000,
    controls: false,
  });
});
