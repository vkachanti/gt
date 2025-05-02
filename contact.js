(function () {
  emailjs.init("ANrSQlBsaKbAwkenP"); // Your EmailJS Public Key
})();

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm("service_9h6hbia", "template_cqv5sii", this)
    .then(() => {
      showSuccessModal();
      this.reset();
    }, (error) => {
      document.getElementById("formMessage").textContent =
        "Oops! Something went wrong. Please try again.";
      console.error("EmailJS Error:", error);
    });
});

function showSuccessModal() {
  const modal = document.getElementById("successModal");
  modal.style.display = "block";

  // Close modal on click of 'X'
  document.querySelector(".close-button").onclick = () => {
    modal.style.display = "none";
  };

  // Close modal on outside click
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}
