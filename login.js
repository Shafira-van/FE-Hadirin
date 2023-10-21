let submit = document.getElementById("logIn");

let number = document.getElementById("exampleInputNumber");
let password = document.getElementById("exampleInputPassword1");
let massage = document.getElementById("massage");

const signIn = async () => {
  let getUser = await fetch("https://63819b489842ca8d3c9642d0.mockapi.io/siswa");
  let result = await getUser.json();
  let found = result.find((element) => {
    return number.value == element.nisn && password.value === element.password;
  }
  );

console.log(result)
  console.log(number.value );
  console.log(found)


  if (!found) {
    console.log("gagal");
    alert(
      "NISN/NIM/Number ID dan Password anda tidak sesuai, mohon di cek kembali atau silahkan meminta admin untuk melakukan Sign Up"
    );
  } else {
    JSON.stringify(found);
    localStorage.setItem("username", number.value);
    localStorage.setItem("pw", password.value);
    location.href = "berandaSiswa.html";
  } 
  // else if (found.status === "guru") {
  //   JSON.stringify(found);
  //   localStorage.setItem("username", number.value);
  //   localStorage.setItem("pw", password.value);
  //   location.href = "berandaGuru.html";
  // }
};

submit.addEventListener("submit", (e) => {
  e.preventDefault();
  signIn();
});
