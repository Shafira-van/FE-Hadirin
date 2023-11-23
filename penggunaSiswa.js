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

function registrasi() {
  location.href = "register.html";
}



let tabel = document.querySelector("#bodyTable");
let getUser = async () => {
  let response = await fetch(
    `https://63819b489842ca8d3c9642d0.mockapi.io/users`,
    {
      mode: `cors`,
      headers: {
        // 'Authorization': `Bearer ${token}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      }
      // body: JSON.stringify(attendances),
    }
  );
  let user = await response.json();
  let print = "";
  let hasilPencarian=[]
  user.forEach((item) => {
    if (item.role.includes("Siswa")) {
      hasilPencarian.push(item)
      console.log(hasilPencarian)
      print += `
            <tr>
              <th scope="row">${item.id}</th>
              <td class="text-center">${item.noIdentitas}</td>
              <td class="text-center">${item.username}</td>
              <td class="text-center">${item.email}</td>
              <td class="text-center">${item.gender}</td>
              <td class="text-center">
                <button
                  type="button"
                  class="btn btn-primary"
                  style="background-color: #ffc107; border-color: #ffc107">
                  <img src="img/btn_edit_logo.png" alt="Logo" />
                  Edit
                </button>
                <button
                  type="button"
                  class="btn btn-danger"
                  style="background-color: #f15454; border-color: #f15454">
                  <img src="img/btn_hapus_logo.png" alt="Logo" />
                  Delete
                </button>
              </td>
            </tr>`;

      tabel.innerHTML = print;
    }
  });
};

getUser();
