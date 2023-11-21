let username = localStorage.getItem("username");
let profil = document.getElementById("nama");
let print5 = "";
print5 += ` <h1>${username}</h1><h2>Admin</h2>`;
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

function guru() {
  localStorage.setItem("navBar", "guru");
  location.href = "penggunaGuru.html";
}

function siswa() {
  localStorage.setItem("navBar", "siswa");
  location.href = "penggunaSiswa.html";
}

function mataPelajaran() {
  localStorage.setItem("navBar", "mataPelajaran");
  location.href = "moduleMataPelajaran.html";
}

function jadwalPelajaran() {
  localStorage.setItem("navBar", "jadwalPelajaran");
  location.href = "moduleJadwalPelajaran.html";
}
function absensi() {
  localStorage.setItem("navBar", "absensi");
  location.href = "modulDataAbsensi.html";
}

