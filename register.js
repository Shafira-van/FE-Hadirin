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

function registrasi() {
  location.href = "register.html";
}

let submit = document.getElementById("signUp")
let nameSignUp = document.getElementById("inputName")
let noIdentitasSignUp = document.getElementById("inputId")
let jenisKelaminSignUp = document.getElementById("inputJenisKelamin")
let emailSignUp = document.getElementById("inputEmail")
let passwordSignUp = document.getElementById("inputPassword")
let identitasSignUp = document.getElementById("inputIdentitas")
console.log(submit)
console.log(nameSignUp)
const register = async() => {
    let user = {
      username: nameSignUp.value,
      noIdentitas: noIdentitasSignUp.value,
      gender: jenisKelaminSignUp.value,
      email: emailSignUp.value,
      password: passwordSignUp.value,
      role:identitasSignUp.value
  }
  
  console.log(user)

    let postUser = await fetch("https://63819b489842ca8d3c9642d0.mockapi.io/users", {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(user)  
    })

    if(postUser.status === 201){
        console.log("berhasil terdaftar")
        alert("Berhasil Terdaftar, silahkan login kembali")
        // location.href="index.html"
    } else{
        console.log("maaf, terjadi masalah. Silahkan daftar ulang")
    }

    let kembalian = postUser.json()
    return kembalian;

}

submit.addEventListener("submit", (e) => {
  e.preventDefault();
  register();
});
