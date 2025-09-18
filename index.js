// Wait until the page is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  console.log("Welcome! The page has loaded successfully 🚀");

  // Button click example
  const clickButton = document.querySelector("#welcome .btn");
  clickButton.addEventListener("click", () => {
    alert("You clicked the button! 🎉");
    console.log("Click Me button was pressed.");
  });

  // Contact form submission example
  const form = document.querySelector(".contact-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // prevent actual form submission
    alert("Thank you for your message! 🙌");
    console.log("Form submitted!");
    form.reset(); // clear inputs
  });
});
