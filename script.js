document.addEventListener("DOMContentLoaded", function() {
  // Add click event listener to dropdown menu items
  var dropdowns = document.querySelectorAll(".dropdown");
  for (var i = 0; i < dropdowns.length; i++) {
    dropdowns[i].addEventListener("click", function(event) {
      var dropdownContent = this.querySelector(".dropdown-content");
      // Close other open submenus
      closeAllSubmenus();

      // Toggle the display of the dropdown content
      dropdownContent.classList.toggle("show");

      // Prevent the click event from propagating to the window click handler
      event.stopPropagation();
    });

    // Add mouseleave event listener to hide the submenu when not hovering
    dropdowns[i].addEventListener("mouseleave", function() {
      var dropdownContent = this.querySelector(".dropdown-content");
      if (dropdownContent.classList.contains("show")) {
        dropdownContent.classList.remove("show");
      }
    });
  }

  // Close submenus when clicking outside
  window.addEventListener("click", function() {
    closeAllSubmenus();
  });

  function closeAllSubmenus() {
    var dropdownContents = document.querySelectorAll(".dropdown-content");
    for (var i = 0; i < dropdownContents.length; i++) {
      dropdownContents[i].classList.remove("show");
    }
  }
});
// script.js

var backgroundImages = [
  "url('NotesWebpage/Images/stanton.jpg')",
  "url('NotesWebpage/Images/gunna-gunna-wunna (1).gif')",
  "url('NotesWebpage/Images/tentonM.png')",
  // Add more image URLs here
];
var currentIndex = 0;
var password = "changebackground";
function changeBackground() {
  var body = document.body;
  var enteredPassword = prompt("Enter the password to unlock the page:");

  if (enteredPassword === password) {
    currentIndex = (currentIndex + 1) % backgroundImages.length;
    var newBg = backgroundImages[currentIndex];
    body.style.backgroundImage = newBg;
  } else {
    alert("Incorrect password. Access denied.");
  }
}

function updateClock() {
  const currentTimeElement = document.getElementById("currentTime");
  const now = new Date();
  const timeString = now.toLocaleTimeString();
  currentTimeElement.textContent = timeString;
}


setInterval(updateClock, 1000);


updateClock();
