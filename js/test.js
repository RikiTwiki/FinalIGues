document.addEventListener('DOMContentLoaded', function () {
    var buttons = document.querySelectorAll('.dop-info');

    buttons.forEach(function (button) {
        button.addEventListener('click', function (e) {
            e.preventDefault(); // Отключите переход по ссылке
            var dropdown = this.parentElement.querySelector('.dropdown-list');
            dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';
        });
    });
});

// Закройте выпадающий список при клике вне его
document.addEventListener('click', function (e) {
    if (!e.target.classList.contains('dop-info')) {
        var dropdowns = document.querySelectorAll('.dropdown-list');
        dropdowns.forEach(function (dropdown) {
            dropdown.style.display = 'none';
        });
    }
});












const messageInput = document.getElementById("message");
const messageError = document.getElementById("messageError");

const gmailInput = document.getElementById("gmail");
const gmailError = document.getElementById("gmailError");

const gnameInput = document.getElementById("gname");
const gnameError = document.getElementById("gnameError");


const subscribeButton = document.getElementById("subscribeButton");



function validateMessage(message) {
    const re = /^[^\s]/;
    return re.test(message);
}

function validateGmail(gmail) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(gmail);
}

function validateGname(gname) {
    const re = /^[^\s]/;
    return re.test(gname);
}






subscribeButton.addEventListener("click", (event) => {
    event.preventDefault();

    if (validateMessage(messageInput.value)) {
        messageInput.classList.remove("is-invalid");
        messageError.style.display = "none"
        console.log("message nice");
    } else {
        messageInput.classList.add("is-invalid");
        messageError.style.display = "block";
    }

    if (validateGmail(gmailInput.value)) {
        gmailInput.classList.remove("is-invalid");
        gmailError.style.display = "none"
        console.log("gemail nice");
    } else {
        gmailInput.classList.add("is-invalid");
        gmailError.style.display = "block";
    }

    if (validateGname(gnameInput.value)) {
        gnameInput.classList.remove("is-invalid");
        gnameError.style.display = "none"
        console.log("gname nice");
    } else {
        gnameInput.classList.add("is-invalid");
        gnameError.style.display = "block";
    }

});

