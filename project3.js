document.addEventListener("DOMContentLoaded", () => {
    // Add event listeners to "Book Now" buttons
    const bookButtons = document.querySelectorAll(".btn-primary");
    bookButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const roomName = button.parentElement.querySelector(".card-title").textContent;
            const roomPrice = button.parentElement.querySelector(".card-text").textContent;
            alert(`You selected the ${roomName}. Price: ${roomPrice}`);
        });
    });

    // Handle "Contact Us" form submission
    const contactForm = document.querySelector("footer form");
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevent the default form submission
        const name = contactForm.querySelector('input[name="name"]').value;
        const email = contactForm.querySelector('input[name="email"]').value;
        const message = contactForm.querySelector('textarea[name="message"]').value;

        if (name && email && message) {
            alert(`Thank you for reaching out, ${name}! We will get back to you at ${email} soon.`);
            contactForm.reset(); // Clear the form after submission
        } else {
            alert("Please fill out all the fields before submitting.");
        }
    });
});
