const textEl = document.getElementById("text");
const speedEl = document.getElementById("speed");
const input = document.getElementById("inp");

let text = "We Love Programming";

let idx = 1;
let speed = 300 / speedEl.value;

writeText();

function writeText() {
  textEl.innerText = text.slice(0, idx);

  idx++;

  if (idx > text.length) {
    idx = 1;
  }

  setTimeout(writeText, speed);
}

speedEl.addEventListener("input", (e) => {
  speed = 300 / e.target.value;
});

input.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    textEl.innerHTML = "";
    text = input.value;
    writeText();
    input.value = "";
  }
});
