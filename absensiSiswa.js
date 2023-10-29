//navbar
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
  });
};

getMapel();

function hello(pelajaran) {
  localStorage.setItem("pelajaran", pelajaran);
  location.href = "detailMapelSiswa.html";
}

let iniMapel = localStorage.getItem("pelajaran");
let pelajaran = document.querySelector("#judulPelajaran");
let h1 = document.createElement("h1");
h1.innerHTML = iniMapel;
pelajaran.append(h1);

//absen
let absensi = document.getElementById("absensi");
let hadir = document.getElementById("inputHadir");
let izin = document.getElementById("inputIzin");
let sakit = document.getElementById("inputSakit");
let kehadiran;

const absen = async () => {
  if (hadir.checked) {
    kehadiran = hadir.value;
  } else if (izin.checked) {
    kehadiran = izin.value;
  } else if (sakit.checked) {
    kehadiran = sakit.value;
  }

  let attendances = {
    kehadiran,
  };

  let id = localStorage.getItem("id");
  let postUser = await fetch(`https://65352f2cc620ba9358ec3e21.mockapi.io/attendances/${id}`, {
    method: "PUT", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(attendances),
  });
  console.log(postUser);

  if (postUser.status === 200) {
    console.log("berhasil terdaftar");
    alert("Absensi telah berhasil");
    location.href = "detailMapelSiswa.html";
  } else {
    console.log("maaf, terjadi masalah. Silahkan absensi ulang");
  }

  let kembalian = postUser.json();
  return kembalian;
};

absensi.addEventListener("submit", (e) => {
  e.preventDefault();
  absen();
});

let pertemuan = localStorage.getItem("pertemuan");
let tanggal = localStorage.getItem("tanggal");
let meet = document.getElementById("judulPertemuan");
let print4 = "";
print4 += `<h5 class="card-title">Daftar Hadir ${pertemuan}</h5>
                <p class="card-text">${tanggal}</p>`;
meet.innerHTML = print4;
