/*** dom */
const btn = document.querySelector(".btn");
const statusBarInside = document.querySelector(".statusBar_inside");
const statusInputSub = document.querySelector(".status-input-sub");
const process = document.querySelector(".status-process-txt");
const done = document.querySelector(".status-done");
const cover = document.querySelector(".cover");
const restart = document.querySelector(".restart");

/** variables */
let splitCheck = 0;

/** functions */
const restartFunc = function () {
  statusInputSub.value = null;
  statusBarInside.style.width = 0 + "%";
  splitCheck = 0;
  btn.style.display = "block";
  cover.style.display = "none";
  process.style.display = "block";
  done.style.display = "none";
  statusInputSub.disabled = false;
};

/** event listener */
btn.addEventListener("click", () => {
  let split = parseInt(statusInputSub.value);
  statusInputSub.disabled = true;

  if (split > 25 || split <= 0 || isNaN(split)) {
    alert("값이 바르지 않으니까 다시 입력 (1-25 사이의 정수만 입력)");
    statusInputSub.disabled = false;
    statusInputSub.value = null;
    return;
  } else {
    statusBarInside.style.width = (100 / split) * (splitCheck + 1) + "%";
    splitCheck++;

    process.textContent = splitCheck + "/" + split;

    if (splitCheck === split) {
      process.style.display = "none";
      done.style.display = "block";
      process.textContent = null;
      btn.style.display = "none";

      let endGame = setInterval(() => {
        cover.style.display = "block";
        clearInterval(endGame);
      }, 800);
    }
  }
});

restart.addEventListener("click", restartFunc);
