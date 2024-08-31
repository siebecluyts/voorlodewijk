let score = 0;
let plopClickers = 0;
let plopClickerCost = 50;

// Update de score als op de Plopkoek wordt geklikt
document.getElementById("plopkoek").addEventListener("click", function() {
    score++;
    updateScore();
});

// Koop een Plop Clicker
document.getElementById("buy-plop-clicker").addEventListener("click", function() {
    if (score >= plopClickerCost) {
        score -= plopClickerCost;
        plopClickers++;
        addPlopClicker();
        updateScore();
        updatePlopClickers();
    } else {
        alert("Niet genoeg Plopkoeken!");
    }
});

// Voegt een nieuwe Plop Clicker toe aan de pagina
function addPlopClicker() {
    const plopClickerDiv = document.createElement("div");
    plopClickerDiv.className = "plop-clicker";
    const plopClickerImg = document.createElement("img");
    plopClickerImg.src = "images/plop.png"; // Gebruik het juiste pad naar de afbeelding van Kabouter Plop
    plopClickerDiv.appendChild(plopClickerImg);
    document.getElementById("plop-clickers-container").appendChild(plopClickerDiv);

    // Laat de Plop Clicker automatisch op de Plopkoek klikken
    setInterval(() => {
        score++;
        updateScore();
    }, 1000); // Elke seconde een klik
}

// Update de weergegeven score
function updateScore() {
    document.getElementById("score").textContent = score;
}

// Update het aantal gekochte Plop Clickers
function updatePlopClickers() {
    document.getElementById("plop-clickers").textContent = plopClickers;
}
