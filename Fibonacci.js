const fibonacci = (n) => {
    // Cas de base : Si n est 0 ou 1, retourner n
    if (n === 0) {
      return 0;
    }
    if (n === 1) {
      return 1;
    }
 
    return fibonacci(n - 1) + fibonacci(n - 2);
  };
  
  // Exemple d'utilisation
  console.log(fibonacci(5));  // Affiche 5 
  