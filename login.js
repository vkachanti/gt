const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("show");
});
let isLoggedIn = false; // Variable to track login state

function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Validate credentials
    if (email === "vkachanti@gmail.com" && password === "vamsi"|| email === "nagamanimandangi44@gmail.com" && password==="Naga@1445" || email === "djaveedbasha7@gmail.com" && password==="basha12345"||email === "karamrajesh10072000@gmail.com" && password==="r@jesh12345" || email === "satwikpagolu@gmail.com" && password === "materials" ||
         email === "narasimhaaditya.1424@gmail.com" && password === "aditya1424" || email === "badanasaikumar01@gmail.com" && password === "7032309064" ||
email === "pandulauma@gmail.com" && password === "Uma@70958") {
        // Hide the login section
        document.getElementById("login-section").style.display = "none";
        
        // Show B.Tech materials section
        document.getElementById('btech-materials').style.display = 'block';
        
        // Set login state to true
        isLoggedIn = true;
    } else {
        // Show the modal for invalid credentials
        document.getElementById('invalid-credentials-modal').style.display = 'block';
    }
}

// Function to close the modal
function closeModal() {
    document.getElementById('invalid-credentials-modal').style.display = 'none';
}

// Add event listener to the "Agri Materials" link
document.querySelector("a[href='NAgrMaterial.html']").addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default link behavior
    if (!isLoggedIn) {
        // Redirect to NAgrMaterial.html if not logged in
        window.location.href = 'NAgrMaterial.html';
    } else {
        // Show the materials section if logged in
        showMaterials();
    }
});

// Function to show the materials section and hide others
function showMaterials() {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.style.display = 'none';
    });
    // Show the materials section
    document.getElementById('btech-materials').style.display = 'block';
}

// Add event listener to the "Agri Materials" link
document.querySelector("a[href='NAgrMaterial.html']").addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default link behavior
    showMaterials(); // Show the materials section
});

const openButtons = document.querySelectorAll('.open-button');
const viewerContainers = document.querySelectorAll('.viewer-container');

// Function to load the PDF in the viewer
function loadPdf(documentId, containerId) {
    CloudPDF({ documentId, darkMode: true }, document.getElementById(containerId)).then((instance) => {});
}

openButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const documentId = button.getAttribute('data-document-id');
        const containerId = `viewer${index + 1}`;
        loadPdf(documentId, containerId);
        viewerContainers.forEach(container => {
            container.style.display = 'none'; // Hide all viewer containers
        });
        document.getElementById(containerId).style.display = 'block'; // Display the selected viewer container
    });
});