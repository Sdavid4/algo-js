// Fonction pour l'addition
function addition(a, b) {
    return a + b;
}

// Fonction pour la soustraction
function soustraction(a, b) {
    return a - b;
}

// Fonction pour la multiplication
function multiplication(a, b) {
    return a * b;
}

// Fonction pour la division
function division(a, b) {
    if (b === 0) {
        return "Erreur : Division par zéro impossible.";
    }
    return a / b;
}

// Fonction pour valider les entrées
function validerNombre(input) {
    let nombre = parseFloat(input);
    if (isNaN(nombre)) {
        return null;
    }
    return nombre;
}

// Boucle principale
let boolean = true;

while (boolean) {
    // Affichage du menu
    let string = prompt(
        "Quelle opération veux-tu faire ?" +
        "1 - Addition\n" +
        "2 - Soustraction\n" +
        "3 - Multiplication\n" +
        "4 - Division\n" +
        "5 - Quitter"
    );

    switch (string) {
        case "1":
            let number1 = validerNombre(prompt("Entrez le premier nombre :"));
            let number2 = validerNombre(prompt("Entrez le second nombre :"));
            if (number1 !== null && number2 !== null) {
                console.log(`Résultat : ${addition(number1, number2)}`);
            } else {
                console.log("Entrée invalide. Veuillez entrer des nombres.");
            }
            break;

        case "2":
            let number3 = validerNombre(prompt("Entrez le premier nombre :"));
            let number4 = validerNombre(prompt("Entrez le second nombre :"));
            if (number3 !== null && number4 !== null) {
                console.log(`Résultat : ${soustraction(number3, number4)}`);
            } else {
                console.log("Entrée invalide. Veuillez entrer des nombres.");
            }
            break;

        case "3":
            let number1 = validerNombre(prompt("Entrez le premier nombre :"));
            let number2 = validerNombre(prompt("Entrez le second nombre :"));
            if (number1 !== null && number2 !== null) {
                console.log(`Résultat : ${multiplication(number1, number2)}`);
            } else {
                console.log("Entrée invalide. Veuillez entrer des nombres.");
            }
            break;

        case "4":
            let div1 = validerNombre(prompt("Entrez le premier nombre :"));
            let div2 = validerNombre(prompt("Entrez le second nombre :"));
            if (div1 !== null && div2 !== null) {
                console.log(`Résultat : ${division(div1, div2)}`);
            } else {
                console.log("Entrée invalide. Veuillez entrer des nombres.");
            }
            break;

        case "5":
            console.log("Merci d'avoir utilisé la calculatrice. Au revoir !");
            continuer = false;
            break;

        default:
            console.log("Choix invalide. Veuillez entrer un numéro entre 1 et 5.");
            break;
    }
}