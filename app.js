let tableauUn = [1, 2, 3, 4, 5];
let tableauDeux = ["valeur1", "valeur2", "valeur3", "valeur4", "valeur5", "bidulemachin", "tatayoyo"];

/* Votre code ici bas */
let expo = tableauUn.map(item => item ** item);
let multi10 = tableauUn.map(item => item * 10);
let multi2 = tableauUn.map(item => (item + 2)/46);
let moreThan2 = tableauUn.filter((item) => item > 2);
let modulo2 = tableauUn.filter((item) => item%2 === 0);
let triple = tableauUn.filter((item) => item * 3 > 10);

let lengthOf = tableauDeux.map(item => item + " à une longueur de " + item.length);
let concat = tableauDeux.map(item => item + item);
let valSup = tableauDeux.filter((item) => item.length > 2 + 2);
let valMod = tableauDeux.filter((item)=> item.length % 2 === 0);
let minor3 = tableauDeux.filter((item)=> item.length -3 > 10);

displayDiv(expo, multi10, multi2, moreThan2, modulo2, triple, lengthOf, concat, valSup, valMod, minor3);

function displayDiv (...result){
    result.forEach((item) => {
        let newResult = document.createElement('div');
        newResult.innerHTML = item;
        document.body.appendChild(newResult);
    })
}
