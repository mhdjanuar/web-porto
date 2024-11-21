function sendEmail() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let gender = document.getElementById("gender").value;
  let subject = document.getElementById("subject").value;
  let message = document.getElementById("description").value;

  let emailReceiver = "fufufafa@gmail.com"; //email penerima(bisa email pribadi)

  let a = document.createElement("a"); //createElement: untuk buat elemen html <a> baru
  a.href = `mailto:${emailReceiver}?subject=${subject}&body=${message}`; //format kirim email
  a.target = "_blank";
  a.click(); //jalanin fungsi klik pada elemen a
}
