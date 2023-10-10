// Function to toggle dark mode
function toggleDarkMode() {
  const body = document.body;
  const svgProperties = document.querySelector(".svgProperties");

  // Toggle dark mode class on the body
  body.classList.toggle("dark-mode");
  body.classList.toggle("light-mode");

  // Toggle dark mode class on svgProperties
  svgProperties.classList.toggle("light-mode"); // Initially set to light-mode
  svgProperties.classList.toggle("dark-mode");
} // Toggle light mode as well

// Function to navigate between pages
function goToPage(pageNumber) {
  switch (pageNumber) {
    case 0:
      window.location.href = "index.html";
      break;
    case 1:
      window.location.href = "page1.html";
      break;
    case 2:
      window.location.href = "page2.html";
      break;
    default:
      break;
  }
}

// Event listener for dark mode toggle
const darkModeToggle = document.getElementById("dark-mode-toggle");
darkModeToggle.addEventListener("change", toggleDarkMode);

function revealImage() {
  const svgContainer = document.getElementById("svgContainer");

  // Show the SVG container
  svgContainer.style.display = "block";

  // Start the animation
  const strokeAnimation = document.getElementById("strokeAnimation");
  strokeAnimation.beginElement();

  // Disable the button after revealing the image (optional)
  const revealButton = document.getElementById("revealButton");
  revealButton.disabled = true;
}

// Add a click event listener to the "Reveal Image" button
const revealButton = document.getElementById("revealButton");
revealButton.addEventListener("click", revealImage);