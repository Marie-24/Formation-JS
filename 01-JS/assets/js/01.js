//alert('WAOW!Tu es sur ma page');

//deux slashes pour faire un commentaire uniligne.

/*
    Ici, je peux faire un commentaire
    sur plusieurs lignes...

    RACCOURCI : CTRL+/
           ou : CTRL+SHIFT+/
*/  

//--1.déclarer une variable en JS
var Prenom;

//--2. affecter une valeur
Prenom="Marie-Pierre";

//--3.afficher la valeur de ma variable dans la console du navigateur.
console.log(Prenom);

/* ---------------------------------------------
|             les types de variables :)        |
----------------------------------------------*/

//--"typeof" me permet de connaitre le type de ma variable
console.log(typeof Prenom);

//--déclaration et affectation d'une valeur à une nouvelle variable
var Age=22;

//--afficher dans la console 
console.log(Age);

//--vérifier son type
console.log(typeof Age)

/* ----------------------------------------------------------
           LA PORTEE DES VARIABLES           

Les variables déclarées directement à la racine du fichier 
sont apppelées variables "GLOBALES".
Elles sont disponibles dans l'ensemble de votre document
 y compris dans les fonctions/boucles.
La portée des variables GLOBALES s'arrête au fichier. Si je 
change de page, les variables n'existent plus.

Les variables déclarées à l'intérieur d'une fonction
sont appelées variables "LOCALES".
elles sont disponibles uniquement à l'intérieur de celle-ci.

-------------------------------------------------------------*/

//--Les variables de type FLOAT

var uneDecimale=-2.984;
console.log(uneDecimale);
console.log(typeof uneDecimale);

//--Les booléens (VRAI/FAUX)

var unBooleen=false;//--true
console.log(unBooleen)
console.log(typeof unBooleen);

/* ---------------------------------------------
             LES CONSTANTES

La déclaration des CONST permet de créer 
une constante accessible UNIQUEMENT en lecture.
sa valeur ne pourra pas être modifiée par des 
réaffectations ultérieures.
Une constante ne peut pas être déclarée à nouveau.
Généralement par convention les constantes
 sont en MAJUSCULE.
----------------------------------------------*/
const HOST="localhost";
const USER="root";
const PASW="mysql";
//impossible de faire :
//USER="127.01.02";
//TypeError:assignement to constant variable.

/* ---------------------------------------------
             LA MINUTE INFO

Au fur et à mesure que l'on affecte ou réaffecte
des valeurs à une variable, celle-ci prend la 
nouvelle valeur et le nouveau type.
en JavaScript (ECMA Script, ES), les variables 
sont autotypées.
Pour convertir une variable de type NUMBER en
STRING et STRING en NUMBER, je peux utiliser 
les fonctions natives de JavaScript.
----------------------------------------------*/

console.log("---");

var unNombre="24";
console.log(unNombre);
console.log(typeof unNombre);

//--La fonction parseInt() permet de retourner un ENTIER à partir d'un STRING

unNombre=parseInt(unNombre);
console.log(unNombre);
console.log(typeof unNombre);

//-- La fonction parseFloat() permet de retourner un FLOAT à partir d'un string
unNombre=parseFloat(unNombre);
console.log(unNombre);
console.log(typeof unNombre);

//-- conversion d'un nombre en STRING avec toString()
var unNombreQuidevientString=10;
console.log(typeof unNombreQuidevientString);
console.log(typeof unNombreQuidevientString.toString());
