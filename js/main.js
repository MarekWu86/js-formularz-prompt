function getDatas() {
    var imie = prompt("Podaj swoje imię");
    var nazwisko = prompt("Podaj swoje nazwisko");
    var email = prompt("Podaj swój adres e-mail");
  
  if(imie.length > 0){
    document.getElementById("imie").value = imie;
  }else {
    document.getElementById("imie").value = "błąd";
  }
  if(nazwisko.length > 0){
    document.getElementById("nazwisko").value = nazwisko;
  }else {
    document.getElementById("nazwisko").value = "błąd";
  }
  if(email.length > 0){
    document.getElementById("email").value = email;
  }else {
    document.getElementById("email").value = "błąd";
  }
}
getDatas();