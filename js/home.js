document.addEventListener("DOMContentLoaded", () => {
    const overlay = document.querySelector("#overlay");
    const buttonContainers = document.querySelectorAll(".button-container");
    const buttonAdd = document.querySelector("#buttom-add");

    buttonAdd.addEventListener('click', () => {
        // overlay.toggleAttribute('hidden');
        overlay.classList.toggle("add-appointment");

        buttonContainers.forEach((buttonContainer) => {
            buttonContainer.classList.toggle("add-appointment");
        });
    });
}) 