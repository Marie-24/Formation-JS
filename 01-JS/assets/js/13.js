/*----------------------------------------------------------
                LES ÉVÉNEMENTS

Ils vont permettre de déclencher une fonction : une série 
d'instructions suite à une action de mon utilisateur.

Objectif : être en mesure de capturer ces événements afin 
d'exécuter une fonction.

Les événements MOUSE (souris)
click 
mouseenter : la souris masse au-dessus de la zone qu'occupe un élément
mouseleave :la souris sort de cette zone

Les événements KEYBOARD (calvier)
keydown : une touche du clavier est enfoncée
keyup : une touche du clavier est relâchée

Les événements WINDOW 
scroll : au défilement de la fenêtre
resize : redimensionnement de la fenêtre

Les événements FORM (formulaire)
change : pour les éléments <input>, <select> et <textarea>
submit : à l'envoi (soumission) du formulaire
input : pour capter la saisie d'un utilisateur sur un champ <input>


#############  LES ÉCOUTEURS D'ÉVÉNEMENTS ################

Pour attacher un événement à un élément ou autrement dit déclarer 
un écouteur d'événement qui se chargera de déclencher une fonction,
je vais utiliser la syntaxe suivante:


----------------------------------------------------------*/
var p=document.getElementById("monParagraphe");

//-- je souhaite que mon paragraphe soit rouge au clic de la souris

//--1-je définis une fonction qui sera chargée de cette action
function changeColorToRed(){
    p.style.color="red";
    p.style.fontFamily="calibri";
    p.style.fontSize="30px";
}

p.addEventListener("click",changeColorToRed);

//--exercice
// 1.créer un champ "input" text avec un Id
var input=document.createElement("input");

//--attribution d'un attribut
input.setAttribute("type","text");
input.setAttribute("placeholder","saisissez un contenu");
input.id="monInput";
document.body.appendChild(input);

//--2.afficher dans une alerte la saisie de l'opérateur
function alertUser(){
    alert(input.value);
 }

 input.addEventListener("change",alertUser);