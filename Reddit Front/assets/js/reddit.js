let dropdown = document.getElementsByClassName("dropdown-btn");
let dropdowns = document.getElementsByClassName("dropdown");
let icon = document.getElementsByClassName("i")
var modal = document.getElementById("myModal");
var btn = document.querySelectorAll("#myBtn");
var span = document.getElementsByClassName("close")[0];
var detals = document.getElementById("mrDetals");
var closes = document.getElementsByClassName("delatsCloses")[0];
var mainbtn = document.querySelectorAll("#mainBtn");
var header = document.querySelector(".header")
let i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "grid") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "grid";
    }
  });
}

for (i = 0; i < dropdowns.length; i++) {
  dropdowns[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var dropdown = this.nextElementSibling;
    if (dropdown.style.display === "table-cell") {
      dropdown.style.display = "none";
    } else {
      dropdown.style.display = "table-cell";
    }
  });
}


btn.forEach(e => {
  e.addEventListener('click', function () {
    modal.style.display = "block";
  })
});

span.onclick = function () {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

closes.onclick = function () {
  detals.style.display = "none";
}

mainbtn.forEach(element => {
  element.addEventListener('click', function () {
    detals.style.display = "block";
    header.style.zIndex = "2"
  })
});

window.onclick = function (event) {
  if (event.target == detals) {
    detals.style.display = "none";
  }
}


// const search = () => {
//   const searchbox = document.getElementById("search-byid").value.toUpperCase();
//   const popularbyid = document.getElementById("popular-byid");
//   const main = document.querySelectorAll(".main")
//   const title = document.querySelectorAll(".title")
//   const image = document.querySelectorAll(".image")
//   const strongname = popularbyid.getElementsByTagName("strong")

//   for (var i = 0; i < strongname.length; i++) {
//     let img = Image[i].getElementsByTagName("strong")[0];

//     if (image) {
//       let textvalue = image.textContent || image.innerHTML

//       if (textvalue.toUpperCase().indexOf(searchbox) > -1) {
//         image[i].style.display
//       } else {
//         image[i].style.display = "none"
//       }
//     }
//   }
// }

var modals = document.getElementById("hrModal");
var btns = document.getElementById("hrBtn");
var spans = document.getElementsByClassName("closes")[0];

btns.onclick = function() {
  modals.style.display = "block";
}

spans.onclick = function() {
  modals.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modals) {
    modals.style.display = "none";
  }
}