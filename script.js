const progressbar = (() => {
  let cur = 0;
  const next = document.getElementById("Next");
  const prev = document.getElementById("Prev");
  function handlenext() {
    if (cur == 3) {
    } else {
      cur++;
      const ball = document.getElementById(`ball${cur}`);
      const bar = document.getElementById(`bar${cur - 1}`);
      bar.classList.remove("removeanimationclass");
      bar.classList.add("animationclass");
      ball.style.borderColor = "#0ea5e9";
    }
  }
  function handleprev() {
    if (cur == 0) {
    } else {
      cur--;
      const ball = document.getElementById(`ball${cur + 1}`);
      const bar = document.getElementById(`bar${cur}`);
      bar.classList.remove("animationclass");
      bar.classList.add("removeanimationclass");
      ball.style.borderColor = "#cbd5e1";
    }
  }
  next.addEventListener("click", () => {
    handlenext();
  });
  prev.addEventListener("click", () => {
    handleprev();
  });
})();
