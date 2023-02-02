function login(e) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value
    if (!username) {
      alert("Vui lòng nhập Username và Password");
    } else if (
      username == 'vantien' &&
      password == '123456'
    ) {
      window.location.href = "main.html";
    } else {
      alert("Đăng nhập thất bại, Username hoặc Password không chính xác");
    }
  }
// function daoTT() {
    // var mk = document.getElementById("password");
    // mk.type = (mk.type === "password")? "text":"password";
  // }
  
  