// 1. TIME GREETING (page load)
let greeting = document.getElementById("greeting");

let hour = new Date().getHours();

if (hour < 12) {
    greeting.textContent = "Good Morning 🌅";
} else if (hour < 18) {
    greeting.textContent = "Good Afternoon ☀️";
} else {
    greeting.textContent = "Good Evening 🌙";
}


// 2. CHANGE BACKGROUND COLOR
document.getElementById("colorBtn").addEventListener("click", function() {
    document.body.style.backgroundColor = "darkgreen";
});


// 3. TOGGLE MENU (show/hide)
document.getElementById("menuBtn").addEventListener("click", function() {
    let menu = document.getElementById("menu");

    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
});


// 4. CLICK CARD → SHOW MESSAGE
let cards = document.querySelectorAll(".card");

cards.forEach(function(card) {
    card.addEventListener("click", function() {
        document.getElementById("message").textContent =
            "You clicked " + card.textContent;
    });
});


// 5. HOVER EVENT (extra JS hover, not just CSS)
cards.forEach(function(card) {
    card.addEventListener("mouseover", function() {
        card.style.transform = "scale(1.1)";
    });

    card.addEventListener("mouseout", function() {
        card.style.transform = "scale(1)";
    });
});