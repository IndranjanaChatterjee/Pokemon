const all = document.querySelectorAll(".hover");

all.forEach((e) => {
  let btn = e.querySelector(".show");
  btn.addEventListener("click", () => {
    let info = e.querySelector(".info");
    if (btn.innerText == "Show more") {
      info.style.display = "block";
      btn.innerText = "Show less";
    } else {
      info.style.display = "none";
      btn.innerText = "Show more";
    }
  });
});
