/*------------------------------
INCRÉMENTATION ET DÉCRÉMENTATION
--------------------------------*/

//#######Incrémentation########//

var nb1=1;
nb1=nb1+1;
console.log(nb1);

//--Écriture simplifiée
nb1++; //raccourci de nb1=nb1+1;->ne part pas de 1

//--affichage dans la console
console.log(nb1);

//#######décrémentation########//

nb1=nb1-1;
//--Écriture simplifiée
nb1--;//raccourci de nb1=nb1-1;->ne part pas de 1

//--affichage dans la console
console.log(nb1);

//#######subtilité########//

nb1=0;
console.log("nb1++="+nb1++);
nb1=0;
console.log("++nb1="+ ++nb1);



