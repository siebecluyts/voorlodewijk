let score = 0;
let clickValue = 1;
let plopClickers = 0;
let autoCollectors = 0;
let ovens = 0;
let ultraPlopClickers = 0;
let clickRate = 1000; // Interval voor reguliere Plop Clickers in ms
let ultraClickRate = 200; // Interval voor Ultra Plop Clickers in ms (sneller klikken)
let autoCollectorRate = 2000; // Interval voor automatische verzamelaars in ms
let ovenRate = 3000; // Interval voor ovens in ms

// Functie om de score te formatteren
function formatNumber(num) {
    if (num >= 1e18) {
        return (num / 1e18).toFixed(1) + 'Q'; // Quintiljoenen
    } else if (num >= 1e15) {
        return (num / 1e15).toFixed(1) + 'Qi'; // Quadriljoenen
    } else if (num >= 1e12) {
        return (num / 1e12).toFixed(1) + 'T'; // Triljoenen
    } else if (num >= 1e9) {
        return (num / 1e9).toFixed(1) + 'B'; // Biljoenen
    } else if (num >= 1e6) {
        return (num / 1e6).toFixed(1) + 'M'; // Miljoenen
    } else if (num >= 1e3) {
        return (num / 1e3).toFixed(1) + 'K'; // Duizenden
    } else {
        return num; // Kleinere getallen
    }
}

// Functie om de score in de HTML bij te werken
function updateScore() {
    document.getElementById("score").textContent = formatNumber(score);
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

// Functie om een Plop Clicker toe te voegen
function addPlopClicker() {
    const plopClickerContainer = document.getElementById("plop-clicker-container");

    const plopClickerDiv = document.createElement("div");
    plopClickerDiv.className = "plop-clicker";

    const plopClickerImg = document.createElement("img");
    plopClickerImg.src = "images/plop.png";
    plopClickerImg.style.width = "50px"; // Pas de grootte van de afbeelding aan
    plopClickerImg.style.height = "auto";
    plopClickerDiv.appendChild(plopClickerImg);

    plopClickerContainer.appendChild(plopClickerDiv);

    // Voeg klik-event toe aan Plop Clicker
    plopClickerDiv.addEventListener('click', function() {
        const plopClickerValue = clickValue * (1 + ultraPlopClickers * 0.1); // Verhoog de waarde per klik door Ultra Plop Klikers
        score += plopClickerValue;
        updateScore();
    });

    // Voeg animatie toe aan Plop Clicker
    plopClickerDiv.style.animation = "scaleUpDown 2s infinite"; // Voeg animatie toe
}

// Functie om automatische verzamelaars toe te voegen
function addAutoCollector() {
    setInterval(() => {
        score += autoCollectors * 5;
        updateScore();
    }, autoCollectorRate);
}

// Functie om ovens toe te voegen
function addOven() {
    setInterval(() => {
        score += ovens * 10;
        updateScore();
    }, ovenRate);
}

// Functie om Plop Clickers te verbeteren met de Ultra Plop Kliker
function enhancePlopClickers() {
    // Update bestaande Plop Clickers
    const plopClickersDivs = document.querySelectorAll(".plop-clicker");
    plopClickersDivs.forEach(clicker => {
        // Voeg snellere klikfunctie toe voor Ultra Plop Klikers
        setInterval(() => {
            score += 5 * (1 + ultraPlopClickers * 0.1); // Verhoog de waarde per klik door Ultra Plop Klikers
            updateScore();
        }, ultraClickRate); // Ultra klikfrequentie in milliseconden
    });
}

// Functie om extra koeken te geven op grootste punt
function addCookieOnLargest() {
    const plopClickersDivs = document.querySelectorAll(".plop-clicker");
    plopClickersDivs.forEach(clicker => {
        // Bij elke animatiecyclus van de Plop Kliker
        clicker.addEventListener('animationiteration', () => {
            score += 1; // Voeg 1 koekje toe
            updateScore();
        });
    });
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
        addCookieOnLargest(); // Zorg ervoor dat nieuwe Plop Clickers ook koeken krijgen
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

// Initialiseren
updateScore();
updatePlopClickers();
updateClickPower();
updateAutoCollectors();
updateOvens();
updateUltraPlopClickers();
