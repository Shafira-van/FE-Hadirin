let username = localStorage.getItem("username");
let profil = document.getElementById("nama");
let print5 = "";
print5 += ` <h1>${username}</h1><h2>Siswa</h2>`;
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
let token = 'aJkN2yeoRbDylx9yXicfdoGQu1k95kfSy70K53qa8a6971aa'
let dropDownMapel = document.querySelector(".dropdown-container");
let cardMapel = document.querySelector("#mapel .row");
let getMapel = async () => {
  let response = await fetch(
    // `http://hadirin-api-git-dev-teguhs-projects-2b4d9979.vercel.app/api/api/students`,
    `https://63819b489842ca8d3c9642d0.mockapi.io/mapel`,
    {
      mode: `cors`,
      headers: {
        'Authorization': `Bearer ${token}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      }
      // body: JSON.stringify(attendances),
    }
  );
  let mapel = await response.json();
  console.log(mapel);

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
                <button id="${item.name}" onclick="absen('${item.name}')" class="btn btn-primary">Presensi</button>
              </div>
            </div>`;

    dropDownMapel.innerHTML = print;
    cardMapel.innerHTML = print1;
  });
};

getMapel();

function hello(pelajaran) {
  localStorage.setItem("pelajaran", pelajaran);
  location.href = "detailMapelSiswa.html";
}

function absen(pelajaran) {
  localStorage.setItem("pelajaran", pelajaran);
  location.href = "detailMapelSiswa.html";
}

let text = document.querySelector(".text_negara");
let formCari = document.querySelector("#form");
let cari = document.querySelector("#cari");

formCari.addEventListener("submit", (event) => {
  event.preventDefault();
  cariHasil = cari.value;

  async function search() {
    let response = await fetch(
      `https://63819b489842ca8d3c9642d0.mockapi.io/mapel`
    );
    let result = await response.json();
    let print1 = "";
    let hasilPencarian1 = [];
    result.forEach((item) => {
      console.log(item);
      if (item.name.includes(cariHasil)) {
        hasilPencarian1.push(item);

        print1 += `
          <div class="col-sm-4">
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

        cardMapel.innerHTML = print1;
      }
    });
  }
  console.log(cariHasil);
  search();

  formCari.reset();
});
