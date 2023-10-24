let submit = document.getElementById("logIn");
let email = document.getElementById("exampleInputEmail");
let password = document.getElementById("exampleInputPassword1");
let massage = document.getElementById("massage");

const signIn = async () => {
  let getUser = await fetch(
    "https://63819b489842ca8d3c9642d0.mockapi.io/users"
  );
  let result = await getUser.json();
  let found = result.find((element) => {
    return email.value == element.email && password.value === element.password;
  });

  console.log(result);
  console.log(email.value);
  console.log(found.role);

  if (!found) {
    console.log("gagal");
    alert(
      "Email dan Password anda tidak sesuai, mohon di cek kembali atau silahkan meminta admin untuk melakukan Sign Up"
    );
  } else if (found.role == "siswa") {
    JSON.stringify(found);
    localStorage.setItem("username", email.value);
    localStorage.setItem("pw", password.value);
    location.href = "berandaSiswa.html";
  }
  else if(found.role == "guru") {
    JSON.stringify(found);
    localStorage.setItem("username", email.value);
    localStorage.setItem("pw", password.value);
    location.href = "berandaGuru.html";
  }
};

submit.addEventListener("submit", (e) => {
  e.preventDefault();
  signIn();
});
