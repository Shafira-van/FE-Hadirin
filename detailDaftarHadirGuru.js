let username = localStorage.getItem("username");
let profil = document.getElementById("nama");
let print5 = "";
print5 += ` <h1>${username}</h1><h2>Guru</h2>`;
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

let judulDaftarHadir = document.getElementById("judulDaftarHadir");
let judulPresensi = document.getElementById("judulPresensi");
let pertemuan = localStorage.getItem("pertemuan");
let tanggal = localStorage.getItem("tanggal");
let print1 = "";
let print2 = "";
print1 += ` <h1>Presensi Kelas 10</h1>
          <p>IPA</p>`;
print2 += ` <h2>Daftar Hadir ${pertemuan}</h2>
            <p>${tanggal}</p>`;
judulPresensi.innerHTML = print1;
judulDaftarHadir.innerHTML = print2; 


let detailSiswa = document.querySelector(".bodyTable")
let getSiswa = async () => {
  let response = await fetch(
    `https://63819b489842ca8d3c9642d0.mockapi.io/users`
  );
  let siswa = await response.json();
  let print = "";
  siswa.forEach((item) => {
    print += `
           
              <tr>
                <th scope="row">${item.id}</th>
                <td>${item.email}</td>
                <td>${item.username}</td>
                <td>${item.role}</td>
                <td>${item.created_at}</td>
                <td id="aksi">
                  <button id="lihat">
                    <img
                      src="https://img.icons8.com/ios-glyphs/30/FFFFFF/visible--v1.png"
                      alt="visible--v1" />
                    Lihat
                  </button>
                  <button id="edit">
                    <img
                      src="https://img.icons8.com/wired/64/FFFFFF/edit.png"
                      alt="edit" />
                    Edit
                  </button>
                </td>
              </tr>
           `;

    detailSiswa.innerHTML = print;
    console.log(`${item.name}`);
  });
};

getSiswa()