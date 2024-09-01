let score = 0;
let clickValue = 1;
let plopClickers = 0;
let autoCollectors = 0;
let ovens = 0;
let ultraPlopClickers = 0;

// Functie om de score in de HTML bij te werken
function updateScore() {
    document.getElementById("score").textContent = score;
}

// Functie om het aantal Plop Clickers in de HTML bij te werken
function updatePlopClickers() {
    document.getElementById("plop-clickers").textContent = plopClickers;
}

// Functie om de klikkracht in de HTML bij te werken
function updateClickPower() {
    document.getElementById("click-power").textContent = clickValue;
}

// Functie om het aantal automatische verzamelaars in de HTML bij te werken
function updateAutoCollectors() {
    document.getElementById("auto-collectors").textContent = autoCollectors;
}

// Functie om het aantal ovens in de HTML bij te werken
function updateOvens() {
    document.getElementById("ovens").textContent = ovens;
}

// Functie om het aantal Ultra Plop Clickers in de HTML bij te werken
function updateUltraPlopClickers() {
    document.getElementById("ultra-plop-clickers").textContent = ultraPlopClickers;
}

// Als er op de Plopkoek wordt geklikt
document.getElementById("plopkoek").addEventListener("click", function() {
    score += clickValue;
    updateScore();
});

// Als er op de koopknop voor een Plop Clicker wordt geklikt
document.getElementById("buy-plop-clicker").addEventListener("click", function() {
    const plopClickerCost = 50;
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

// Als er op de koopknop voor dubbele klikkracht wordt geklikt
document.getElementById("buy-double-click").addEventListener("click", function() {
    const doubleClickCost = 100;
    if (score >= doubleClickCost) {
        score -= doubleClickCost;
        clickValue *= 2;
        updateScore();
        updateClickPower();
    } else {
        alert("Niet genoeg Plopkoeken!");
    }
});

// Als er op de koopknop voor een automatische verzamelaar wordt geklikt
document.getElementById("buy-auto-collector").addEventListener("click", function() {
    const autoCollectorCost = 200;
    if (score >= autoCollectorCost) {
        score -= autoCollectorCost;
        autoCollectors++;
        updateScore();
        updateAutoCollectors();
        addAutoCollector();
    } else {
        alert("Niet genoeg Plopkoeken!");
    }
});

// Als er op de koopknop voor een oven wordt geklikt
document.getElementById("buy-oven").addEventListener("click", function() {
    const ovenCost = 500;
    if (score >= ovenCost) {
        score -= ovenCost;
        ovens++;
        updateScore();
        updateOvens();
        addOven();
    } else {
        alert("Niet genoeg Plopkoeken!");
    }
});

// Als er op de koopknop voor een Ultra Plop Kliker wordt geklikt
document.getElementById("buy-ultra-plop-clicker").addEventListener("click", function() {
    const ultraPlopClickerCost = 1000;
    if (score >= ultraPlopClickerCost) {
        score -= ultraPlopClickerCost;
        ultraPlopClickers++;
        updateScore();
        updateUltraPlopClickers();
        enhancePlopClickers();
    } else {
        alert("Niet genoeg Plopkoeken!");
    }
});

// Functie om een Plop Clicker toe te voegen
function addPlopClicker() {
    const plopClickerContainer = document.getElementById("plop-clicker-container");

    const plopClickerDiv = document.createElement("div");
    plopClickerDiv.className = "plop-clicker";

    const plopClickerImg = document.createElement("img");
    plopClickerImg.src = "images/plop.png";
    plopClickerDiv.appendChild(plopClickerImg);

    plopClickerContainer.appendChild(plopClickerDiv);

    // Interval voor automatisch klikken door de Plop Clicker
    setInterval(() => {
        score += clickValue;
        updateScore();
    }, 1000);
}

// Functie om automatische verzamelaars toe te voegen
function addAutoCollector() {
    setInterval(() => {
        score += autoCollectors * 5;
        updateScore();
    }, 2000);
}

// Functie om ovens toe te voegen
function addOven() {
    setInterval(() => {
        score += ovens * 10;
        updateScore();
    }, 3000);
}

// Functie om Plop Clickers te verbeteren met de Ultra Plop Kliker
function enhancePlopClickers() {
    // Update bestaande Plop Clickers
    const plopClickersDivs = document.querySelectorAll(".plop-clicker");
    plopClickersDivs.forEach(clicker => {
        // Maak de bestaande Plop Clickers sneller en krachtiger
        setInterval(() => {
            score += 5; // Elke Plop Clicker geeft 5 Plopkoeken per klik
            updateScore();
        }, 500); // Elke 0.5 seconde klikken
    });
}

// Bijwerken bij het laden van de pagina
updateScore();
updatePlopClickers();
updateClickPower();
updateAutoCollectors();
updateOvens();
updateUltraPlopClickers();
