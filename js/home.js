document.addEventListener("DOMContentLoaded", () => {
    // MOBILE
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




    // DESKTOP
    const addAppointmentLink = document.querySelector('#add-appointment-action');
    const addAppointmentFormDesktop = document.querySelector('#add-appointment-container');

    addAppointmentLink.addEventListener('click', () => {
        addAppointmentFormDesktop.classList.toggle('show');
    });

    // Custom select
    const appointmentTypeInput = document.querySelector("#appointment-type");
    const selectOptionsList = document.querySelector(".select-DropDown");
    const selectOptions = document.querySelectorAll(".select-option");

    appointmentTypeInput.addEventListener('focus', () => {
        selectOptionsList.style.display = "block";
    });

    appointmentTypeInput.addEventListener('blur', () => {
        selectOptionsList.style.display = "none";
    });

    selectOptions.forEach((selectOption) => {
        selectOption.addEventListener('mousedown', (event) => {
            const appointmentTypeSelected = event.target.innerHTML;
            appointmentTypeInput.value = appointmentTypeSelected;
        });
    });

}) 