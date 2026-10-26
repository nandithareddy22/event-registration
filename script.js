
const form = document.getElementById("registrationForm");
const message = document.getElementById("message");
const eventDate = document.getElementById("date");

// Prevent selecting a past date
const today = new Date();
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, "0");
const day = String(today.getDate()).padStart(2, "0");

eventDate.min = `${year}-${month}-${day}`;

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const selectedEvent = document.getElementById("event").value;
    const date = eventDate.value;

    if (!name || !email || !phone || !selectedEvent || !date) {
        message.style.color = "red";
        message.textContent = "Please fill in all fields.";
        return;
    }

    if (!/^[0-9]{10}$/.test(phone)) {
        message.style.color = "red";
        message.textContent = "Enter a valid 10-digit phone number.";
        return;
    }

    message.style.color = "green";
    message.textContent =
        `Thank you, ${name}! You are registered for ${selectedEvent} on ${date}.`;

    form.reset();

    // Restore today's date as the minimum after resetting
    eventDate.min = `${year}-${month}-${day}`;
});
