const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const deleteAllButton = document.getElementById("delete-all");


function addTask() {
  if (inputBox.value === "") {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
  checkData();
  showTask();
}

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
      checkData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}

function deleteAllTask() {
  localStorage.clear();
  checkData();
  showTask();
}

function checkData() {
  const data = localStorage.getItem("data");
  if (data) {
    // Hide the delete-all button
    deleteAllButton.style.display = "block";
  } else if(!data || data === '') {
    deleteAllButton.style.display = "none";
  }
}

checkData();
showTask();
