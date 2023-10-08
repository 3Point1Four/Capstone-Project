document.addEventListener("DOMContentLoaded", function () {
  const button1 = document.getElementById("b1");

  button1.addEventListener("click", function () {
    window.location.href = "handwriting.html";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const buttonback = document.getElementById("back");

  buttonback.addEventListener("click", function () {
    console.log("back")
    window.location.href = "index.html";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const button4 = document.getElementById("b4");
  const creditsDiv = document.getElementById("credits");

  button4.addEventListener("click", function () {
    if (
      creditsDiv.style.display === "none" ||
      creditsDiv.style.display === ""
    ) {
      creditsDiv.style.display = "block";
    } else {
      creditsDiv.style.display = "none";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const animateButton = document.getElementById("animateButton");

  animateButton.addEventListener("click", function () {
    const pathElement = document.getElementById("animatedPath");

    // Add a class to trigger the animation
    pathElement.classList.add("animate-svg-path");

    // Get the total length of the SVG path and round it down to the nearest whole number
    const length = Math.floor(pathElement.getTotalLength());

    // Update the CSS variable with the rounded length
    document.documentElement.style.setProperty("--length", length);

    // Log the updated length
    console.log(`Updated Length (Rounded Down): ${length}`);

    // Log the current value of the CSS variable
    const cssVariableValue = getComputedStyle(
      document.documentElement
    ).getPropertyValue("--length");
    console.log(`Current CSS Variable Value: ${cssVariableValue}`);
  });
});
