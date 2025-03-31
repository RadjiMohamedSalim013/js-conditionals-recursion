/*Ecrivez un programme qui demande à l'utilisateur d'entrer son âge et qui détermine ensuite le prix d'un billet de cinéma en fonction des critères suivants:

Enfants (âge <= 12) : 10 $
Adolescents (13-17 ans) : 15 $
Adultes (âge >= 18) : 20 $*/
const prompt = require('prompt-sync')();


const ticketPricing = () => {
    // Demander l'âge de l'utilisateur
    let age = prompt("Veuillez entrer votre âge :");
    
    // Convertir en nombre entier
    age = parseInt(age);
    
    // Vérifier si l'entrée est valide
    if (isNaN(age)) {
        console.log("Veuillez entrer un âge valide.");
        return;
    }
    
    // Déterminer le prix en fonction de l'âge
    let price;
    
    if (age <= 12) {
        price = 10; // Children
    } else if (age >= 13 && age <= 17) {
        price = 15; // Teens
    } else {
        price = 20; // Adults
    }
    
    // Afficher le résultat (version bilingue)
    console.log(`Ticket price: ${price}$`);
}

// Appeler la fonction
ticketPricing();