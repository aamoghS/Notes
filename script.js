// Set your password here
var password = "PasswordLock"; // Replace with your actual password

// Check if the password has already been entered and stored in local storage
var passwordEntered = localStorage.getItem("passwordEntered") === "true";

// Add event listeners for both hover and click
function setupDropdowns() {
  var dropdowns = document.querySelectorAll(".dropdown");

  for (var i = 0; i < dropdowns.length; i++) {
    // Add hover event listener
    dropdowns[i].addEventListener("mouseenter", function () {
      if (!passwordEntered) return;
      toggleDropdown(this);
    });

    // Add click event listener
    dropdowns[i].addEventListener("click", function (event) {
      if (!passwordEntered) {
        event.stopPropagation();
        var enteredPassword = prompt("Enter the password to unlock the page:");
        if (enteredPassword === password) {
          passwordEntered = true;
          localStorage.setItem("passwordEntered", "true"); // Store the flag in local storage
        } else {
          alert("Incorrect password. Access denied.");
          return;
        }
      }
      toggleDropdown(this);
    });

    // Add mouseleave event listener to hide the submenu when not hovering
    dropdowns[i].addEventListener("mouseleave", function () {
      if (!passwordEntered) return;
      var dropdownContent = this.querySelector(".dropdown-content");
      if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
      }
    });
  }
}

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

var currentIndex = 0;
var backgroundChanged = false; // Add a flag to track background changes

function changeBackground() {
  if (!backgroundChanged) { // Check if background hasn't been changed
    var body = document.body;
    var enteredPassword = prompt("Enter the password to unlock the page:");

    if (enteredPassword === password) {
      currentIndex = (currentIndex + 1) % backgroundImages.length;
      var newBg = backgroundImages[currentIndex];
      body.style.backgroundImage = newBg;
      backgroundChanged = true; // Set the flag to true after changing the background
    } else {
      alert("Incorrect password. Access denied.");
    }
  } else {
    alert("Background has already been changed."); // Notify that background has already been changed
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
setupDropdowns();
