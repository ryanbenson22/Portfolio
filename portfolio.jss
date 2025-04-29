$(".dark-btn").click(
    function(){
    $("body").toggleClass("dark");
    $("h1").toggleClass("dark");
    $("h2").toggleClass("dark");
    $("p").toggleClass("dark");
    $("a:link").toggleClass("dark");
    $("a:visited").toggleClass("dark");
    $("dark-btn").toggleClass("dark");
    $("pink-btn").toggleClass("dark");
  });

  $(".pink-btn").click(
    function(){
    $("body").toggleClass("pink");
    $("h1").toggleClass("pink");
    $("h2").toggleClass("pink");
    $("p").toggleClass("pink");
    $("a:link").toggleClass("pink");
    $("a:visited").toggleClass("pink");
  });

  $(document).ready(function () {
  // In order for this to work, the page contents need to be wrapped in a container other than just the body
  $(".scroll-container").on("wheel", function (e) {
    const delta = Math.max(
      -1,
      Math.min(1, e.originalEvent.wheelDelta || -e.originalEvent.detail)
    );

    this.scrollLeft -= delta * 40;
    // Adjust 40 to change scroll speed

    // This prevents vertical scrolling
    e.preventDefault();
  });
});
