var dropdown = document.getElementsByClassName("dropdown-btn");
let item = document.querySelector(".beranda a");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function () {
    item.style.color = "#32415d";
    item.style.background = "none";
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}


let dropDownMapel = document.querySelector(".dropdown-container");
// console.log(dropDownMapel)
let getMapel = async () => {
  let response = await fetch(
    `https://63819b489842ca8d3c9642d0.mockapi.io/mapel`
  );
  let mapel = await response.json();
  let print = "";
  let print1 = "";
  mapel.forEach((item) => {
    print += `<a class="btn" href="detailMapelSiswa.html">${item.name}</a>`;
    // detailMapelSiswa.html
  
    dropDownMapel.innerHTML = print;
    console.log(`${item.name}`);
    localStorage.setItem("username", print.name);
    // localStorage.setItem("pw", password.value);
  });
};

getMapel();