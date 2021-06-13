var myNodelist = document.getElementsByTagName("LI");
var index = 0;
for (; index < myNodelist.length; index++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var index = 0;
for (; index < close.length; index++) {
  close[index].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}

var list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);
var localStorageArray = [];
function addToLocalStorage(item) {
  localStorage.setItem("TodoList", JSON.stringify(item));
}
// function getLocalStorage(){
//   return localStorage.getItem(JSON.parse("TodoList"))
// }
// function getOldToDoList(){
//   var li = document.createElement("li");
//   var inputValue = getLocalStorage()
//   var t = document.createTextNode(inputValue);
//   li.appendChild(t);
//   document.getElementById("list").appendChild(li);
// }

console.log("asdasdas", JSON.parse(localStorage.getItem("TodoList")));
if (localStorage.getItem("TodoList")) {
  getOldToDoList();
}
function getOldToDoList() {
  for (
    var index = 0;
    index < localStorage.getItem("TodoList").length;
    index++
  ) {
    var li = document.createElement("li");
    var inputValue = JSON.parse(localStorage.getItem("TodoList"))[index];
    console.log(inputValue,typeof(inputValue))
    if (typeof(inputValue) != "undefined") {
      var t = document.createTextNode(inputValue);
      li.appendChild(t);
      document.getElementById("list").appendChild(li);
     // document.getElementById("list").appendChild(li);
    }

    
    console.log("asdasdas", JSON.parse(localStorage.getItem("TodoList")));
  }
}

function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("task").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === "" || inputValue.replace(/^\s+|\s+$/g, "").length == 0) {
    $(".error").toast("show");
  } else {
    $(".success").toast("show");
    document.getElementById("list").appendChild(li);

    localStorageArray.push(inputValue);
    //console.log(localStorageArray)
    addToLocalStorage(localStorageArray);
  }
  document.getElementById("task").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (index = 0; index < close.length; index++) {
    close[index].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}
