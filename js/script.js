const btn = document.querySelector(".btn");
const main = document.querySelector(".main");
const statusBar = document.querySelector(".statusBar");
const statusBarInside = document.querySelector(".statusBar_inside");
const statusInputSub = document.querySelector(".status-input-sub");
const process = document.querySelector(".status-process-txt");
const done = document.querySelector(".status-done");

let splitCheck = 0;

btn.addEventListener("click", () => {
  let split = parseInt(statusInputSub.value);

  if (split > 25 || split < 0 || isNaN(split)) {
    alert("값이 바르지 않으니까 다시 입력 (1-25 사이의 정수만 입력)");
    return;
  } else {
    console.log(split);
    statusBarInside.style.width = (100 / split) * (splitCheck + 1) + "%";
    splitCheck++;

    process.textContent = splitCheck + "/" + split;
  }

  if (splitCheck === split) {
    process.style.display = "none";
    done.style.display = "block";
    process.textContent = null;

    setInterval(() => {
      splitCheck = 0;
      process.style.display = "block";
      done.style.display = "none";
      statusBarInside.style.width = 0 + "%";
      statusInputSub.textContent = "값 재입력";
    }, 1000);
  } else if (splitCheck >= split) {
    splitCheck = 0;
    alert("허용되지 않은 행위 발생");
  }
});
