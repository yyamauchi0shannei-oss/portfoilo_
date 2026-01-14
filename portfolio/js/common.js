window.addEventListener("load", function () {
  // //ヘッダーボタン背景色変換
  window.addEventListener("scroll", function () {
    const topMvImg = document.querySelector(".top_mv_img");
    const header = document.querySelectorAll(".header");

    for (let i = 0; i < header.length; i++) {
      // console.log(i);

      if (window.scrollY > topMvImg.offsetTop) {
        header[i].classList.add("active");
      } else {
        header[i].classList.remove("active");
      }
    }
  });
});
