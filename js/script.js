var link = document.querySelector(".login");
var popup = document.querySelector(".modal-content");
var close = popup.querySelector(".modal-content__close");

var login = popup.querySelector("[name=login]");
var password = popup.querySelector("[name=password]");
var form = popup.querySelector("form");

var linkMap = document.querySelector(".map");
var map = document.querySelector(".modal-content-map");
var closeMap = map.querySelector(".modal-content-map__close");

var overlay = document.querySelector(".modal-overlay");

link.addEventListener('click', function(event) {
  event.preventDefault();
  popup.classList.add("modal-content--show");
  login.focus();
  overlay.classList.add("modal-overlay--go");
});

close.addEventListener('click', function(event) {
  event.preventDefault();
  popup.classList.remove("modal-content--show");
  overlay.classList.remove("modal-overlay--go");
});

form.addEventListener('submit', function() {
  if (!login.value || !password.value) {
    event.preventDefault();
    alert("Вы забыли внести данные");
  }
});

window.addEventListener('keydown', function(event) {
  if (popup.classList.contains("modal-content--show") ||
  map.classList.contains("modal-content-map--show")
) {
    if (event.keyCode === 27) {
      popup.classList.remove("modal-content--show");
      map.classList.remove("modal-content-map--show");
      overlay.classList.remove("modal-overlay--go");
    }
  }
});

linkMap.addEventListener('click', function(event) {
  event.preventDefault();
  map.classList.add("modal-content-map--show");
  overlay.classList.add("modal-overlay--go");
});

closeMap.addEventListener('click', function(event) {
  event.preventDefault();
  map.classList.remove("modal-content-map--show");
  overlay.classList.remove("modal-overlay--go");
});
