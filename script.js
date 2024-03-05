const inputBox = document.getElementById("input");
const result = document.getElementById("result");
const button = document.getElementById("button");

button.addEventListener("click", function add() {
  let liCount = document.getElementsByTagName("li").length;
  if (inputBox.value == "") return alert("Ketik sesuatu dong!! yang benar aje!");
  else if (liCount >= 6) {
    alert("Banyak banget kegiatan lu cuy");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    result.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }

  inputBox.value = "";

  save();
});

result.addEventListener(
  "click",
  function remove(e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      save();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      save();
    }
  },
  false
);

function save() {
  localStorage.setItem("data", result.innerHTML);
}

function get() {
  result.innerHTML = localStorage.getItem("data");
}

get();
