window.addEventListener("load", function () {
  const moreBtn = document.querySelector(".more-btn");
  const wrapMore = document.querySelector(".wrap-more");

  moreBtn.addEventListener("click", () => {
    if (!wrapMore.classList.contains("showMore")) {
      wrapMore.style.height = wrapMore.scrollHeight + "px";
      wrapMore.classList.add("showMore");
      console.log(1);
    } else {
      wrapMore.style.height = "0";
      wrapMore.classList.remove("showMore");
      console.log(2);

    }
  });
});
