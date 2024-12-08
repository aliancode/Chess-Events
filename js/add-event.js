function submitEvent() {
    const eventName = document.getElementById('eventName').value.trim();
    const location = document.getElementById('location').value.trim();
    const eventDate = document.getElementById('eventDate').value;
    const eventType = document.getElementById('eventType').value;
    const description = document.getElementById('description').value.trim();

    if (!eventName || !location || !eventDate || !eventType || !description) {
        alert("Please fill in all fields.");
        return;
    }

    alert("Event added successfully!");
    document.getElementById('eventForm').reset(); // Clear the form
}