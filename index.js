
const questionElement = document.querySelector(".question");
questionElement.innerHTML="<p>Uveďte příjmení amerického vynálezce, který v roce 1876 jako první úspěšně podal patent na zařízení, které je dnes považováno za první telefon.</p>";
const odpovedUzivatele = prompt("Zadej odpověď:");
const answerText = document.querySelector(".answer__text");
answerText.textContent = odpovedUzivatele;
let answerElement = document.querySelector(".answer");

if (odpovedUzivatele === "Bell") {
    answerElement.classList.add("answer--correct");
} else {
    answerElement.classList.add("answer--wrong");
};


