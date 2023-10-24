var dropdown = document.getElementsByClassName("dropdown-btn");
let item = document.querySelector(".beranda a");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function () {
    item.style.color = "#32415d";
    item.style.background = "none";
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}

let dropDownMapel = document.querySelector(".dropdown-container");
let cardMapel = document.querySelector("#mapel .row");
// console.log(dropDownMapel)
let getMapel = async () => {
  let response = await fetch(
    `https://63819b489842ca8d3c9642d0.mockapi.io/mapel`
  );
  let mapel = await response.json();
  let print = "";
  let print1 = "";
  mapel.forEach((item) => {
    print += `<a class="btn" href="detailMapelSiswa.html">${item.name}</a>`;
    // detailMapelSiswa.html
    print1 += `<div class="col-sm-4">
              <div class="card">
                <div class="card-body">
                  <div>
                    <h5 class="card-title">${item.name}</h5>
                    <h4 class="card-text">Ganjil 2023/2024</h4>
                    <p class="card-text">IPA</p>
                  </div>
                  <img src="img/profil guru.png" alt="" />
                </div>
                <a href="absensiSiswa.html" class="btn btn-primary">Presensi</a>
              </div>
            </div>`;

    dropDownMapel.innerHTML = print;
    cardMapel.innerHTML = print1;
    console.log(`${item.name}`);
    localStorage.setItem("username", print.name);
    // localStorage.setItem("pw", password.value);
  });
};

getMapel();

// let activeDropDown = document.querySelector(".sidenav .dropdown-container");
// // var btnContainer = document.getElementById("myDIV");
// let btnDropDown = activeDropDown.getElementsByClassName("btn");
// // var btns = btnContainer.getElementsByClassName("btn");
// // console.log(btnDropDown)

// for (var i = 0; i < btnDropDown.length; i++) {
//   btnDropDown[i].addEventListener("click", function() {
//     var current = document.querySelector("active");
//     current[0].className = current[0].className.replace(" active", "");
//     this.className += " active";
//     console.log('ya')
//   });
// }
