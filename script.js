//darkmode
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }
//  start nav
var header = document.getElementById("seculli");
var btns = header.getElementsByClassName("btn1");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}
//   nav bar end
 //image carousel start








  //  image carousel end
  
//imgzoom
function imagein(x) {
  x.style.height = "500px";
  x.style.width = "80%";
}

function imageout(x) {
  x.style.height = "600px";
  x.style.width = "100%";
}
//end zoom

//  start2 nav
// end2 nav
// fillter pro
filterSelection("all");
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filter");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    removeClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
  }
}

function addClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function removeClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}
//filter
// quesions
function expandQuestion(question) {
  question.classList.toggle("expanded");
}
// team
var slide = 1;
function showSlides(n) {
  var i;
  const slides = document.getElementsByClassName("card1");
  const dots = document.getElementsByClassName("dot-item");

  if (n > slides.length) {
    slide = 1;
  }
  if (n < 1) {
    slide = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slide - 1].style.display = "block";
  dots[slide - 1].className += " active";
}

function currentSlide(n) {
  showSlides(slide= n);
}

showSlides(slide);
// footer
function subscribe() {
  document.getElementById('message1').style.display = 'block';
  setTimeout(function() {
    document.getElementById('message1').style.display = 'none';

    //  404 error page
    var page = window.open('', '_self');
    page.document.write('<h1>404 Error: Page not found</h1>' );
    page.document.write('<button><a href="index.html" target="_self">home</a></button>');
  },2000); 
}
// map
function initMap() {
  var jaffna = { lat: 9.671710, lng: 80.028720 };
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12, 
    center: jaffna
  });
  var marker = new google.maps.Marker({
    position: jaffna,
    map: map,
    title: 'Jaffna, Northern Province, Sri Lanka'
  });
}
// map
// contact
function showContactSection() {
  document.getElementById('contact-section').classList.remove('hidden');
  document.getElementById('contact-form').style.display = 'block';
}

function validateForm() {
  var name = document.getElementById('name').value.trim();
  var email = document.getElementById('email').value.trim();
  var phone = document.getElementById('phone').value.trim();
  var message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
      document.getElementById('validationMessage').innerText = 'Please enter Name, Email, and Message.';
      return;
  }

  //  name length
  if (name.length > 15) {
      document.getElementById('validationMessage').innerText = 'Enter a valid name (less than 15 characters).';
      return;
  }

  //  email 
  var emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/;
  if (!emailRegex.test(email)) {
      document.getElementById('validationMessage').innerText = 'Enter a valid email address.';
      return;
  }

  //  phone number 
  var phoneRegex = /^\d{10}$/;
  if (!phoneRegex.test(phone)) {
      document.getElementById('validationMessage').innerText = 'Enter a valid 10-digit phone number.';
      return;
  }

  //  message length
  if (message.length < 2 || message.length > 120) {
      document.getElementById('validationMessage').innerText = 'Enter a message between 2 and 120 characters.';
      return;
  }

  // success message
  document.getElementById('validationMessage').innerText = 'Successfully Submitted';
}

// contact
