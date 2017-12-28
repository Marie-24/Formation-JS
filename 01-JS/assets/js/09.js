/*----------------------------------
            LES BOUCLES
-----------------------------------*/

//--la boucle FOR
//--Pour i=1 ; tant que i <= inférieur ou égal à 10, alors j'incrémente i de 1.
for (let i = 1; i <= 10; i++) {
    document.write("<p>Instruction exécutée: <strong>" + i + "</strong></p>");
}

document.write("<hr>");

var j=1;
while(j<=10){
    document.write("<p>instruction exécutée:<strong>"+j+"</strong></p>");
    //--ATTENTION À NE PAS OUBLIER L'INCRÉMENTATION§
    j++;
}

/*---------------------------------------------------------
                    EXERCICE
---------------------------------------------------------*/
//--supposons le tableau suivant:
var prenoms=["Jean","Marc","Mathieu","Luc","Pierre","Paul","Hugo"];
/*--Consigne : grâce à la boucle FOR, affichez la liste des prénoms dans la console*/

for(let i=0;i<7;i++){
    console.log(prenoms[i]);
}
console.log("----");
console.log(prenoms);

for(let i=0;i<prenoms.lenght;i++){
    console.log(prenoms[i]);
}
console.log("----");
var j=0;
while(j<prenoms.length){
    console.log(prenoms[j]);
    j++;
}
console.log("----");
//--même exercice avec la boucle ForEach
//--ATTENTION à la performance!!!
prenoms.forEach(affichePrenoms);

function affichePrenoms(prenom,indice){
    console.log(prenom);
}

