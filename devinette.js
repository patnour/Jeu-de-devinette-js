/* 
Activité : jeu de devinette
*/

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
// console.log("(La solution est " + solution + ")");


var nbreSaisi = 0;
var nbreEssai = 0;
var nbreEssaiMax = 6;

console.log("Trouvez un nombre entre 1 et 100 (6 essais maximum).");

 
while((nbreSaisi !== solution) && (nbreEssai < nbreEssaiMax)){
    
    nbreSaisi = Number(prompt("Saisissez un nombre entre 1 et 100"));
    nbreEssai++;
        
    if ((nbreSaisi < 1) || (nbreSaisi > 100) || isNaN(nbreSaisi)) {
        
        console.log("Erreur, vous devez saisir un nombre entre 1 et 100 !")
        
    } else if (nbreSaisi > solution) {
        
            console.log(nbreSaisi + " est trop grand.");
        
    } else if (nbreSaisi < solution) {
    
            console.log(nbreSaisi + " est trop petit.");
    }
}

 
if (nbreSaisi === solution) {
    
  console.log("Bravo ! La solution est " + solution + "\nVous avez trouvé en " + nbreEssai + " essai(s).");

} else {
    
  console.log("Vous avez perdu ! La solution était " + solution + "\nVous avez dépassé vos " + nbreEssai + " essai(s).");

}
