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
        "Quelle opération veux-tu faire ?\n" +
        "1 - Addition\n" +
        "2 - Soustraction\n" +
        "3 - Multiplication\n" +
        "4 - Division\n" +
        "5 - Quitter"
    );

    switch (choix) {
        case "1":
            let add1 = validerNombre(prompt("Entrez le premier nombre :"));
            let add2 = validerNombre(prompt("Entrez le second nombre :"));
            if (add1 !== null && add2 !== null) {
                console.log(`Résultat : ${addition(add1, add2)}`);
            } else {
                console.log("Entrée invalide. Veuillez entrer des nombres.");
            }
            break;

        case "2":
            let sub1 = validerNombre(prompt("Entrez le premier nombre :"));
            let sub2 = validerNombre(prompt("Entrez le second nombre :"));
            if (sub1 !== null && sub2 !== null) {
                console.log(`Résultat : ${soustraction(sub1, sub2)}`);
            } else {
                console.log("Entrée invalide. Veuillez entrer des nombres.");
            }
            break;

        case "3":
            let mul1 = validerNombre(prompt("Entrez le premier nombre :"));
            let mul2 = validerNombre(prompt("Entrez le second nombre :"));
            if (mul1 !== null && mul2 !== null) {
                console.log(`Résultat : ${multiplication(mul1, mul2)}`);
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