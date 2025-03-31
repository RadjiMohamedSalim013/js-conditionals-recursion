/*
 Écrire une fonction récursive pour calculer le résultat de l'élévation d'un nombre à une puissance donnée.
*/

const puissance = (base, exposant) => {
    // Cas de base : Si l'exposant est 0, retourner 1
    if (exposant === 0) {
      return 1;
    }
    // Cas récursif : base * puissance(base, exposant - 1)
    return base * puissance(base, exposant - 1);
  };
  
  // Exemple d'utilisation
  console.log(puissance(2, 3));  // Affiche 8 