/*Leap Year Checker : Créez une fonction qui prend une année en entrée et détermine s'il s'agit d'une année bissextile ou non. Les années bissextiles sont divisibles par 4, mais pas par 100, sauf si elles sont également divisibles par 400.*/

const checkLeapYear = year => {
    if ((year % 400 === 0) || (year % 100 !== 0 && year % 4 === 0)) {
        console.log(`${year} est une année bissextile`);
        return true;
    } else {
        console.log(`${year} n'est pas une année bissextile`);
        return false;
    }
};