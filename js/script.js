// Ubuntu Community Outreach Foundation
// Part 3 - JavaScript Functionality

document.addEventListener("DOMContentLoaded", function () {

    // Interactive welcome message
    const welcomeButton = document.getElementById("welcomeButton");
    const welcomeMessage = document.getElementById("welcomeMessage");

    if (welcomeButton && welcomeMessage) {
        welcomeButton.addEventListener("click", function () {
            welcomeMessage.textContent =
                "Thank you for supporting Ubuntu Community Outreach Foundation!";
        });
    }

    // Gallery lightbox
    const galleryImages = document.querySelectorAll(".gallery-image");
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightboxImage");
    const closeLightbox = document.getElementById("closeLightbox");

    galleryImages.forEach(function (image) {
        image.addEventListener("click", function () {
            if (lightbox && lightboxImage) {
                lightboxImage.src = image.src;
                lightboxImage.alt = image.alt;
                lightbox.style.display = "flex";
            }
        });
    });

    if (closeLightbox) {
        closeLightbox.addEventListener("click", function () {
            lightbox.style.display = "none";
        });
    }

    // Close lightbox when clicking outside the image
    if (lightbox) {
        lightbox.addEventListener("click", function (event) {
            if (event.target === lightbox) {
                lightbox.style.display = "none";
            }
        });
    }

    // Simple search functionality
    const searchInput = document.getElementById("searchInput");
    const searchableItems = document.querySelectorAll(".search-item");

    if (searchInput) {
        searchInput.addEventListener("input", function () {
            const searchTerm = searchInput.value.toLowerCase();

            searchableItems.forEach(function (item) {
                const text = item.textContent.toLowerCase();

                if (text.includes(searchTerm)) {
                    item.style.display = "";
                } else {
                    item.style.display = "none";
                }
            });
        });
    }

    // Contact form validation
    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {

            const name = document.getElementById("name");
            const email = document.getElementById("email");
            const message = document.getElementById("message");

            if (!name.value.trim() ||
                !email.value.trim() ||
                !message.value.trim()) {

                event.preventDefault();

                alert("Please complete all required fields before submitting the form.");
            }
        });
    }

});

// Enquiry form validation
const enquiryForm = document.getElementById("enquiryForm");

if (enquiryForm) {
    enquiryForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const enquiryType = document.getElementById("enquiryType").value;
        const message = document.getElementById("message").value.trim();
        const response = document.getElementById("enquiryResponse");

        if (name.length < 2) {
            response.textContent = "Please enter your full name.";
            return;
        }

        if (!email.includes("@")) {
            response.textContent = "Please enter a valid email address.";
            return;
        }

        if (!/^[0-9]{10}$/.test(phone)) {
            response.textContent = "Please enter a valid 10-digit phone number.";
            return;
        }

        if (enquiryType === "") {
            response.textContent = "Please select an enquiry type.";
            return;
        }

        if (message.length < 10) {
            response.textContent = "Please enter at least 10 characters.";
            return;
        }

        response.textContent =
            "Thank you, " + name + ". Your enquiry has been received successfully.";

        enquiryForm.reset();
    });
}


// Contact form validation
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("contactName").value.trim();
        const email = document.getElementById("contactEmail").value.trim();
        const phone = document.getElementById("contactPhone").value.trim();
        const messageType = document.getElementById("messageType").value;
        const message = document.getElementById("contactMessage").value.trim();
        const response = document.getElementById("contactResponse");

        if (name.length < 2) {
            response.textContent = "Please enter your full name.";
            return;
        }

        if (!email.includes("@")) {
            response.textContent = "Please enter a valid email address.";
            return;
        }

        if (!/^[0-9]{10}$/.test(phone)) {
            response.textContent = "Please enter a valid 10-digit phone number.";
            return;
        }

        if (messageType === "") {
            response.textContent = "Please select a message type.";
            return;
        }

        if (message.length < 10) {
            response.textContent = "Please enter at least 10 characters.";
            return;
        }

        response.textContent =
            "Thank you, " + name + ". Your message has been received successfully.";

        contactForm.reset();
    });
}





















