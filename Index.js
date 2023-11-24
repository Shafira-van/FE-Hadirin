let submit = document.getElementById("logIn");
let username = document.getElementById("exampleInputName");
let password = document.getElementById("exampleInputPassword1");
let massage = document.getElementById("massage");

const signIn = async () => {
  let getUser = await fetch(
    "https://63819b489842ca8d3c9642d0.mockapi.io/users"
  );
  let result = await getUser.json();
  let found = result.find((element) => {
    return username.value == element.username && password.value === element.password; 
  });

  console.log(result);
  console.log(username.value);
  console.log(found.role);

  if (!found) {
    console.log("gagal");
    alert(
      "Username dan Password anda tidak sesuai, mohon di cek kembali atau silahkan meminta admin untuk melakukan Sign Up"
    );
  } else if (found.role == "Siswa") {
    JSON.stringify(found);
    localStorage.setItem("username", username.value);
    localStorage.setItem("pw", password.value);
    location.href = "berandaSiswa.html";
  }
  else if(found.role == "Guru") {
    JSON.stringify(found);
    localStorage.setItem("username", username.value);
    localStorage.setItem("pw", password.value);
    location.href = "berandaGuru.html";
  }
  else if(found.role == "Admin") {
    JSON.stringify(found);
    localStorage.setItem("username", username.value);
    localStorage.setItem("pw", password.value);
    location.href = "dashboardAdmin.html";
  }
};

submit.addEventListener("submit", (e) => {
  e.preventDefault();
  signIn();
});
