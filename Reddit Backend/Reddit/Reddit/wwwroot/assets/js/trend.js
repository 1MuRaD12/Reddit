let dropdown = document.getElementsByClassName("dropdown-btn");
let dropdowns = document.getElementsByClassName("dropdown");
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


let main1 = document.querySelector(".main1")
let downbtn2 = document.querySelectorAll(".down-btn2")
let main2 = document.querySelector(".main2")
let downbtn1 = document.querySelector(".down-btn1")
let downbtn3 = document.querySelectorAll(".down-btn3")
let main3 = document.querySelector(".main3")

downbtn2.forEach(element => {
  element.addEventListener('click', function () {
    main1.style.display = "none"
    main3.style.display = "none"
    main2.style.display = "block"
  })
});

downbtn1.addEventListener('click', function () {
  main2.style.display = "none"
  main3.style.display = "none"
  main1.style.display = "flex"
})


downbtn3.forEach(element => {
  element.addEventListener('click', function () {
    main2.style.display = "none"
    main1.style.display = "none"
    main3.style.display = "block"
  })
});


var modal = document.getElementById("myModal");
var btn = document.querySelectorAll("#myBtn");
var span = document.getElementsByClassName("close")[0];
var detals = document.getElementById("mrDetals");
var closes = document.getElementsByClassName("delatsCloses")[0];
var mainbtn = document.querySelectorAll("#mainBtn");

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





