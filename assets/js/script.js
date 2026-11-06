
// ===================================
// TRAVELGO - JAVASCRIPT
// ===================================

document.addEventListener("DOMContentLoaded", () => {

    // Date minimale : aujourd'hui
    const departureInput = document.getElementById("departure");

    if (departureInput) {
        const today = new Date();
        const localDate = new Date(
            today.getTime() - today.getTimezoneOffset() * 60000
        ).toISOString().split("T")[0];

        departureInput.min = localDate;
    }

    // Recherche de voyage
    const searchForm = document.getElementById("searchForm");

    if (searchForm) {
        searchForm.addEventListener("submit", (event) => {
            event.preventDefault();

            const destination = document.getElementById("destination").value;
            const departure = document.getElementById("departure").value;
            const travelers = document.getElementById("travelers").value;

            if (!destination || !departure || travelers < 1) {
                alert("Veuillez remplir correctement tous les champs.");
                return;
            }

            alert(
                `Votre recherche :\n\n` +
                `Destination : ${destination}\n` +
                `Départ : ${departure}\n` +
                `Voyageurs : ${travelers}\n\n` +
                `Merci de votre intérêt pour TravelGo !`
            );
        });
    }

});

const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const formMessage = document.getElementById("formMessage");

        formMessage.innerHTML = `
            <div class="alert alert-success">
                Merci pour votre message !
                Votre formulaire a été validé.
            </div>
        `;

        contactForm.reset();
    });
}
