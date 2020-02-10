var link = document.querySelector(".login");
var popup = document.querySelector(".modal-content");
var close = popup.querySelector(".modal-content__close");

var login = popup.querySelector("[name=login]");
var password = popup.querySelector("[name=password]");
var form = popup.querySelector("form");

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
  if (popup.classList.contains("modal-content--show")) {
    if (event.keyCode === 27) {
      popup.classList.remove("modal-content--show");
      overlay.classList.remove("modal-overlay--go");
    }
  }
});
//--------------------------------------------------------------------------
var linkMap = document.querySelector(".map");
var map = document.querySelector(".modal-content-map");
var closeMap = map.querySelector(".modal-content-map__close");

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

window.addEventListener('keydown', function(event) {
  if (map.classList.contains("modal-content-map--show")) {
    if (event.keyCode === 27) {
      map.classList.remove("modal-content-map--show");
      overlay.classList.remove("modal-overlay--go");
    }
  }
});
//-------------------------------------------------------------------------
var linkFeedback = document.querySelector(".feedback");
var feedback = document.querySelector(".modal-content-feedback");
var closeFeedback = feedback.querySelector(".modal-content-feedback__close");

linkFeedback.addEventListener('click', function(event) {
  event.preventDefault();
  feedback.classList.add("modal-content-feedback--show");
  overlay.classList.add("modal-overlay--go");
});

closeFeedback.addEventListener('click', function(event) {
  event.preventDefault();
  feedback.classList.remove("modal-content-feedback--show");
  overlay.classList.remove("modal-overlay--go");
});

window.addEventListener('keydown', function(event) {
  if (feedback.classList.contains("modal-content-feedback--show")) {
    if (event.keyCode === 27) {
      feedback.classList.remove("modal-content-feedback--show");
      overlay.classList.remove("modal-overlay--go");
    }
  }
});
