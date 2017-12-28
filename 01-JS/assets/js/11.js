/*-------------------------      LE DOM     ---------------------------
Le DOM est une interface de développement en JS pour HTML. 
Grâce au DOM, je vais être en mesure d'accéder à/de modifier mon HTML

L'objet "document": c'est le point d'entrée vers mon contenu HTML!

Chaque page chargée dans mon navigateur a un objet "document".
----------------------------------------------------------------------*/
//--comment récupérer les informations de ma page HTML?

/*-------------------- document.getElementById    ------------------
document.getElementById(" ") : cette fonction va permettre de récupérer
un élément HTML à partir de son identifiant unique ("Id)")
----------------------------------------------------------------------*/

var bonjour=document.getElementById("bonjour");
console.log(bonjour);

/*-------------------- document.getElementsByClassName    ------------------
document.getElementByClassName(" ") : cette fonction va permettre de
 récupérer un ou plusieurs éléments (une liste) HTML
  à partir de leur classe.
----------------------------------------------------------------------*/

var contenu=document.getElementsByClassName("contenu");
console.log(contenu);

//-- me renvoie un tableau JS avec mes éléments HTML, autrement dit une "collection d'éléments HTML


/*-------------------- document.getElementsByTagName    ------------------
document.getElementByTagName(" ") : cette fonction va permettre de
 récupérer un ou plusieurs éléments (une liste) HTML
  à partir de leur nom de balise.
----------------------------------------------------------------------*/

var span=document.getElementsByTagName("span");
console.log(span);