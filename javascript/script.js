var val = 0;
var val2 = 0;
var val3 = 0;
function hamburger() {
  document.querySelector(".canvas").classList.toggle("canvas_show");
  document.querySelector(".blck").classList.toggle("blckshow");
  document.querySelector("body").classList.toggle("body_scroll");
}
function like(n) {
  document.querySelectorAll(".fa-heart")[n].classList.toggle("fa-heart-red");
}
function hamburger_nest() {
  document.querySelector(".canvas_menu2").classList.toggle("canvas_show");
}
function Accordin(a) {
  document.querySelectorAll(".faq1")[a].classList.toggle("faq_show");
}

function Count1() {
  if (val <= 64) document.querySelector(".count1").innerHTML = val++;
}
setInterval(Count1, 100);
function Count2() {
  if (val2 <= 38) document.querySelector(".count2").innerHTML = val2++;
}
setInterval(Count2, 100);
function Count3() {
  if (val3 <= 59) document.querySelector(".count3").innerHTML = val3++;
}
setInterval(Count3, 100);
function hide() {
  document.querySelector(".form_container").classList.add("form_containerShow");
  document.querySelector("body").classList.add("body_scroll");
}
setTimeout(hide, 2000);
function Close() {
  document
    .querySelector(".form_container")
    .classList.remove("form_containerShow");
  document.querySelector("body").classList.remove("body_scroll");
}

function showpas() {
  document.querySelector(".inputhideshow").setAttribute("type", "text");
}
function hidepas() {
  document.querySelector(".inputhideshow").setAttribute("type", "password");
}

function validate_email() {
  let pattern = /.+\@.+\..+/;
  let email = document.querySelector(".emailval").value;

  if (pattern.test(email) === false) {
    document.querySelector(".form_error").innerHTML =
      "Enter correct Email id !!";
  } else {
    document.querySelector(".form_error").innerHTML = "";
  }
}

function validate_password() {
  let pattern = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/;
  let pass = document.querySelector(".inputhideshow").value;
  if (pattern.test(pass) === false) {
    document.querySelector(".form_error").innerHTML =
      "password must contain 1 number ,1 uppercase,lowercase,non-alpha numeric number,8-16 characters with no space";
  } else {
    document.querySelector(".form_error").innerHTML = "";
  }
}
function validate_phone() {
  let pattern =
    /^(?:(?:\+|0{0,2})(91)(\s*|[\\-])?|[0]?)?([6789]\d{2}([ -]?)\d{3}([ -]?)\d{4})$/gm;
  let phone = document.querySelector(".phoneval").value;
  if (pattern.test(phone) === false) {
    document.querySelector(".form_error").innerHTML = "Enter Correct phone no";
  } else {
    document.querySelector(".form_error").innerHTML = "";
  }
}
