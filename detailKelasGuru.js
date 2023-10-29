let username = localStorage.getItem("username");
let profil = document.getElementById("nama");
let print5 = "";
print5 += ` <h1>${username}</h1><h2>Siswa</h2>`
profil.innerHTML = print5;

var dropdown = document.getElementsByClassName("dropdown-btn");
let item = document.querySelector(".beranda a");
var i;
let dropDownMapel = document.querySelector(".dropdown-container");

dropDownMapel.style.display = "block";
for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function () {
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}

let getMapel = async () => {
  let response = await fetch(
    `https://63819b489842ca8d3c9642d0.mockapi.io/mapel`
  );
  let mapel = await response.json();
  let print = "";
  mapel.forEach((item) => {
    print += `<button class="btnMapel" id="${item.name}" onclick="hello('${item.name}')">${item.name}</button>`;

    dropDownMapel.innerHTML = print;
    console.log(`${item.name}`);
  });
};

getMapel();

function hello(pelajaran) {
  localStorage.setItem("pelajaran", pelajaran);
  location.href = "detailKelasGuru.html";
}

let iniMapel = localStorage.getItem("pelajaran");
let pelajaran = document.querySelector("#judulPelajaran");
console.log(pelajaran);
let h1 = document.createElement("h1");
h1.innerHTML = iniMapel;
pelajaran.append(h1);

let perte = document.getElementById("pertemuan");
let getPertemuan = async () => {
  let response = await fetch(
    `https://65352f2cc620ba9358ec3e21.mockapi.io/attendances`
  );
  let pertemuan = await response.json();
  let print2 = "";
  pertemuan.forEach((item) => {
    print2 += `<div class="card">
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/ios-filled/50/4d4d4d/hand-with-smartphone.png"
              alt="hand-with-smartphone" />
            <div class="card-body">
              <button onclick="kehadiran('${item.pertemuan}','${item.tanggal}','${item.id}')">
                <h5 class="card-title">Daftar Hadir ${item.pertemuan}</h5>
              </button>
              <p class="card-text">${item.tanggal}</p>
            </div>
          </div>`;

    perte.innerHTML = print2;
    console.log(`${item.pertemuan}`);
  });
};

getPertemuan();

function kehadiran(pertemuan, tanggal, id) {
  localStorage.setItem("pertemuan", pertemuan);
  localStorage.setItem("tanggal", tanggal);
  localStorage.setItem("id", id);
  location.href = "detailDaftarHadirGuru.html";
}
