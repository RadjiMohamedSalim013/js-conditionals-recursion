Voici le fichier `README.md` mis à jour avec la précision concernant l'installation des dépendances et la mention de l'absence de l'utilisation de `switch` :

```markdown
# Projet de Prise de Décision et de Récursion en JavaScript

Ce projet comprend deux principales fonctionnalités : une prise de décision (avec `if-else`) et des fonctions récursives. Le projet contient également une démonstration d'un programme utilisant le package `prompt-sync` pour la gestion des entrées utilisateur.

## Fonctionnalités

### 1. **Leap Year Checker (Vérificateur d'année bissextile)**

Cette fonction permet de déterminer si une année donnée est bissextile. Les années bissextiles sont divisibles par 4, mais pas par 100, sauf si elles sont également divisibles par 400.

- **Entrée** : Année (nombre entier)
- **Sortie** : Un message indiquant si l'année est bissextile ou non.

### 2. **Ticket Pricing (Tarification des billets de cinéma)**

Ce programme demande à l'utilisateur d'entrer son âge, puis détermine le prix d'un billet de cinéma en fonction des critères suivants :
- Enfants (âge <= 12) : 10 $
- Adolescents (13-17 ans) : 15 $
- Adultes (âge >= 18) : 20 $

- **Entrée** : Âge de l'utilisateur (nombre entier)
- **Sortie** : Prix du billet basé sur l'âge de l'utilisateur.

### 3. **Séquence de Fibonacci (Récursion)**

Cette fonction génère le nième nombre de la séquence de Fibonacci de manière récursive. La séquence commence par 0 et 1, et chaque nombre suivant est la somme des deux nombres précédents.

- **Entrée** : Un entier `n` (le rang du nombre de Fibonacci)
- **Sortie** : Le nième nombre de la séquence de Fibonacci.

### 4. **Fonction de Puissance (Récursion)**

Cette fonction calcule le résultat de l'élévation d'un nombre à une puissance donnée de manière récursive.

- **Entrée** : Un nombre `base` et un exposant `exposant`
- **Sortie** : Le résultat de `base` élevé à la puissance `exposant`.

## Installation

1. Clonez ce projet sur votre machine locale :

```bash
git clone https://github.com/RadjiMohamedSalim013/js-conditionals-recursion.git
cd js-conditionals-recursion
```

2. Installez les dépendances nécessaires, y compris le package `prompt-sync` pour la gestion des entrées utilisateur. Exécutez la commande suivante dans votre terminal pour installer les dépendances :

```bash
npm install prompt-sync
```

## Utilisation

### 1. **Vérification de l'année bissextile**

Exécutez la fonction `checkLeapYear` pour déterminer si une année est bissextile. Par exemple :

```javascript
checkLeapYear(2020);  // Affiche "2020 est une année bissextile"
```

### 2. **Tarification des billets**

Exécutez la fonction `ticketPricing` pour déterminer le prix du billet en fonction de l'âge de l'utilisateur :

```javascript
ticketPricing();  // Demande à l'utilisateur de saisir son âge et affiche le prix du billet
```

### 3. **Calcul de la séquence de Fibonacci**

Exécutez la fonction `fibonacci` pour générer le nième nombre de la séquence de Fibonacci :

```javascript
fibonacci(5);  // Affiche 5 (le 5e nombre de Fibonacci)
```

### 4. **Calcul de la puissance d'un nombre**

Exécutez la fonction `puissance` pour calculer un nombre élevé à une certaine puissance :

```javascript
puissance(2, 3);  // Affiche 8 (2^3)
```

