// ================= MOBILE MENU =================

function toggleMenu() {

    const navLinks = document.getElementById("navLinks");

    navLinks.classList.toggle("active");

}


// ================= ORDER =================

function orderFood(foodName) {

    alert(
        "Thank you for choosing " +
        foodName +
        "!\n\nOur team will contact you soon."
    );

}


// ================= ABOUT =================

function showMessage() {

    alert(
        "Welcome to Spice Garden!\n\n" +
        "We prepare delicious food using fresh ingredients."
    );

}


// ================= BOOK TABLE =================

function bookTable() {

    const name = prompt("Enter your name:");

    if (name === null || name.trim() === "") {

        alert("Please enter your name.");

        return;
    }

    const people = prompt(
        "How many people are coming?"
    );

    if (people === null || people.trim() === "") {

        alert("Please enter the number of people.");

        return;
    }

    alert(
        "Thank you, " +
        name +
        "!\n\n" +
        "Your table booking request for " +
        people +
        " people has been received."
    );

}