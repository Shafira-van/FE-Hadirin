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
  location.href = "detailMapelSiswa.html";

  // var pelajaranAct = document.querySelectorAll(`.btnMapel`);
  // for (i = 0; i <= pelajaranAct.length; i++) {
  //   if (!pelajaranAct[i].classList.contains("active")) {
  //     navPelajaran.classList.add("active");
  //   } else {
  //     pelajaranAct[i].classList.remove("active");
  //   }
  //   console.log(pelajaranAct[i].classList.contains("active"));
  // }
}



let iniMapel = localStorage.getItem("pelajaran");
let pelajaran = document.querySelector("#judulPelajaran");
console.log(pelajaran);
let h1 = document.createElement("h1");
h1.innerHTML = iniMapel;
pelajaran.append(h1);
