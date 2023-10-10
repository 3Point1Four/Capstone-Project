  // Function to toggle dark mode
  function toggleDarkMode() {
    const body = document.body;
    const svgProperties = document.querySelector(".svgProperties");
    const settIcon = document.querySelector(".settIcon");

    // Check if the body has dark-mode class
    const isDarkMode = body.classList.contains("dark-mode");

    // Remove both classes from body and svgProperties
    body.classList.remove("dark-mode", "light-mode");
    svgProperties.classList.remove("dark-mode", "light-mode");
    settIcon.classList.remove("dark-mode", "light-mode");

    // Toggle the appropriate class based on isDarkMode
    if (isDarkMode) {
      body.classList.add("light-mode");
      svgProperties.classList.add("light-mode");
      settIcon.classList.add("light-mode");
    } else {
      body.classList.add("dark-mode");
      svgProperties.classList.add("dark-mode");
      settIcon.classList.add("dark-mode");
    }
  }

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