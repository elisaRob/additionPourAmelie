document.addEventListener("DOMContentLoaded", function () {
    let correctAnswer, operationType;

    function generateNumbers() {
        const firstNumber = Math.floor(Math.random() * 10);
        let secondNumber;

        if (operationType === "addition") {
            secondNumber = Math.floor(Math.random() * 10);
        } else {
            // Ensure that secondNumber is not greater than firstNumber
            secondNumber = Math.floor(Math.random() * firstNumber);
        }

        correctAnswer = operationType === "addition" ? firstNumber + secondNumber : firstNumber - secondNumber;

        document.querySelector(".premierNombre").textContent = firstNumber;
        document.querySelector(".deuxiemeNombre").textContent = secondNumber;
        document.getElementById("operationSymbol").textContent = operationType === "addition" ? "+" : "-";
        document.getElementById("result").innerHTML = "";
    }

    function checkAnswer() {
        const choix = parseInt(document.getElementById("choix").value);

        if (!isNaN(choix)) {
            if (choix === correctAnswer) {
                document.getElementById("result").innerHTML = "Bravo ma chérie, tu es la meilleure";

                setTimeout(function () {
                    document.getElementById("result").innerHTML = "";
                    generateNumbers();
                    document.getElementById("choix").value = ""; // Efface la valeur de l'input
                }, 500); // Affiche le message de félicitations pendant 2 secondes
            } else {
                document.getElementById("choix").value = ""
                document.getElementById("result").innerHTML = "Faux, réessaie mon Amélie chérie.";
              
            }
        } else {
            document.getElementById("choix").value = ""
            document.getElementById("result").innerHTML = "Veuillez entrer un nombre valide.";
          
        }
    }

    function setOperationType() {
        // Choix aléatoire entre addition et soustraction
        operationType = Math.random() < 0.5 ? "addition" : "soustraction";
    }

    document.getElementById("checkAnswer").addEventListener("click", checkAnswer);

    document.getElementById("choix").addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            checkAnswer();
        }
    });

    // Initialiser l'opération au chargement de la page
    setOperationType();
    generateNumbers();
});
