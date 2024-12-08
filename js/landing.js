// defining html elements
const weclomeMessage = document.querySelector(".welcome-message")

function afficherMessageBienvenue() {

    const currentHour = (new Date()).getHours()
    let message = ""

    if (currentHour >= 5 && currentHour < 12) {
        message = "Bonjour !"
    } else if (currentHour >= 12 && currentHour < 18) {
        message = "Bon après-midi !"
    } else {
        message = "Bonsoir !"
    }
    // Ensure the element exists and then update its text content
    if (weclomeMessage) weclomeMessage.textContent = message
}

window.onload = afficherMessageBienvenue