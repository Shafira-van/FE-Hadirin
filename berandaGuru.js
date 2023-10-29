let username = localStorage.getItem("username");
let profil = document.getElementById("nama");
let print5 = "";
print5 += ` <h1>${username}</h1><h2>Guru</h2>`
profil.innerHTML = print5;


var dropdown = document.getElementsByClassName("dropdown-btn");
let item = document.querySelector(".beranda a");
var i;
item.style.color = "#d13737";
item.style.backgroundColor = "#d9d9d9";
for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function () {
    this.classList.toggle("active");
    item.style.color = "#32415d";
    item.style.background = "none";
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
let getMapel = async () => {
  let response = await fetch(
    `https://63819b489842ca8d3c9642d0.mockapi.io/mapel`
  );
  let mapel = await response.json();
  let print = "";
  let print1 = "";
  mapel.forEach((item) => {
    print += `<button class="btnMapel" id="${item.name}" onclick="hello('${item.name}')">${item.name}</button>`;

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
                <button id="${item.name}" onclick="detailAbsen('${item.name}')" class="btn btn-primary">Presensi</button>
              </div>
            </div>`;

    dropDownMapel.innerHTML = print;
    cardMapel.innerHTML = print1;
  });
};

getMapel();

function hello(pelajaran) {
  localStorage.setItem("pelajaran", pelajaran);
  location.href = "detailKelasGuru.html";

}

function detailAbsen(pelajaran) {
  localStorage.setItem("pelajaran", pelajaran);
  location.href = "detailKelasGuru.html";
  
}

