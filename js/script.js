const btn = document.querySelector(".btn");
const statusBarInside = document.querySelector(".statusBar_inside");
const statusInputSub = document.querySelector(".status-input-sub");
const process = document.querySelector(".status-process-txt");
const done = document.querySelector(".status-done");
const cover = document.querySelector(".cover");
const restart = document.querySelector(".restart");

let splitCheck = 0;

btn.addEventListener("click", () => {
  let split = parseInt(statusInputSub.value);

  if (split > 25 || split < 0 || isNaN(split)) {
    alert("값이 바르지 않으니까 다시 입력 (1-25 사이의 정수만 입력)");
    return;
  } else {
    statusBarInside.style.width = (100 / split) * (splitCheck + 1) + "%";
    splitCheck++;

    process.textContent = splitCheck + "/" + split;

    if (splitCheck === split) {
      process.style.display = "none";
      done.style.display = "block";
      statusInputSub.value = null;
      process.textContent = null;
      btn.style.display = "none";
      console.log("1.splitCheck : " + splitCheck);
      console.log("1.split : " + split);

      let endGame = setInterval(() => {
        cover.style.display = "block";
        console.log("splitCheck : " + splitCheck);
        clearInterval(endGame);
      }, 800);
    } else if (splitCheck >= split) {
      splitCheck = 0;
      alert("허용되지 않은 행위 발생");
    }
  }
});

restart.addEventListener("click", () => {
  statusBarInside.style.width = 0 + "%";
  splitCheck = 0;
  btn.style.display = "block";
  cover.style.display = "none";
  process.style.display = "block";
  done.style.display = "none";
});
