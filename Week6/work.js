let greeting = document.getElementById("greeting");

let hour = new Date().getHours();

if (hour < 12) {
    greeting.textContent = "Good Morning 🌤️";
} else if (hour < 18) {
    greeting.textContent = "Good Afternoon ☀️";
} else {
    greeting.textContent = "Good Evening 🌙";
}




let isGreen = false;

document.getElementById("colorBtn").addEventListener("click", function() {
    if (isGreen === false) {
        document.body.style.background = "darkgreen";
        isGreen = true;
    } else {
        document.body.style.background = "linear-gradient(to bottom, #b2dcf9, #c9ffb8)";
        isGreen = false;
    }
});

document.getElementById("menuBtn").addEventListener("click", function() {
    let menu = document.getElementById("menu");

    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
});



let cards = document.querySelectorAll(".card");

cards.forEach(function(card) {
    card.addEventListener("click", function() {
        document.getElementById("message").textContent =
            "You clicked the " + card.textContent;
    });
});



cards.forEach(function(card) {
    card.addEventListener("mouseover", function() {
        card.style.transform = "scale(1.1)";
    });

    card.addEventListener("mouseout", function() {
        card.style.transform = "scale(1)";
    });
});
