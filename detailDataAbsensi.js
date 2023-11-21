let username = localStorage.getItem("username");
let profil = document.getElementById("nama");
let print5 = "";
print5 += ` <h1>${username}</h1><h2>Admin</h2>`;
profil.innerHTML = print5;

var dropdown = document.getElementsByClassName("dropdown-btn");
let item = document.querySelector(".beranda a");
let dropDownMapel = document.querySelector("#dropdown-container2");

dropDownMapel.style.display = "block";
var i;
for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}

function guru() {
  // localStorage.setItem("pelajaran", pelajaran);
  location.href = "penggunaGuru.html";
}

function siswa() {
  // localStorage.setItem("pelajaran", pelajaran);
  location.href = "penggunaSiswa.html";
}

function mataPelajaran() {
  // localStorage.setItem("pelajaran", pelajaran);
  location.href = "moduleMataPelajaran.html";
}

function jadwalPelajaran() {
  // localStorage.setItem("pelajaran", pelajaran);
  location.href = "moduleJadwalPelajaran.html";
}
function absensi() {
  // localStorage.setItem("pelajaran", pelajaran);
  location.href = "modulDataAbsensi.html";
}

