// Example of adding interactivity (can be expanded later)
document.addEventListener("DOMContentLoaded", function() {
    console.log("Keki Bora Bakery website loaded.");
});


// contact form validation
document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contact-form");
    const formStatus = document.getElementById("form-status");

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission

        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            formStatus.textContent = "Please fill in all fields.";
            formStatus.style.color = "red";
        } else {
            formStatus.textContent = "Message sent successfully!";
            formStatus.style.color = "green";
            contactForm.reset();
        }
    });
});

// order validation

document.addEventListener("DOMContentLoaded", function() {
    const orderForm = document.getElementById("order-form");
    const orderStatus = document.getElementById("order-status");

    orderForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission

        let name = document.getElementById("name").value.trim();
        let phone = document.getElementById("phone").value.trim();
        let email = document.getElementById("email").value.trim();
        let item = document.getElementById("item").value;
        let quantity = document.getElementById("quantity").value.trim();

        if (name === "" || phone === "" || email === "" || item === "" || quantity === "") {
            orderStatus.textContent = "Please fill in all required fields.";
            orderStatus.style.color = "red";
        } else {
            orderStatus.textContent = "Your order has been submitted successfully!";
            orderStatus.style.color = "green";
            orderForm.reset();
        }
    });
});