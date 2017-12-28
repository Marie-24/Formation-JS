/*------------------------------
        Les fonctions
--------------------------------*/
//---déclarer une fonction
//---cette fonction ne retourne aucune valeur

function disBonjour(){
/**
 * lors de l'appel d cette fonction, les instructions ci-dessous seront executées
 */
    alert("Bonjour!");
}
/**
 * Je vais appeler la fonction "disBonjour" et déclencher ses instructions.
 */
disBonjour();

//--déclarer une fonction qui prend une variable en paramètre
function bonjour(prenom,nom){
    document.write("<p>Bonjour <strong>"+prenom+" "+nom+"</strong>!</p>")
}

//--appeler/utiliser une fonction avec des paramètres
bonjour("Marie","Dupoux");

function Addition(nb1,nb2){
    return nb1+nb2;
}

document.write(Addition(10,5));





