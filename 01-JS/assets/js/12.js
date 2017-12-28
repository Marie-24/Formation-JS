/*----------------------------------------------------------
            LA MANIPULATION DES CONTENUS
----------------------------------------------------------*/
function l(e){
    console.log(e);
}

//je souhaite récupérer mon lien

var google=document.getElementById("google");
l(google);

//--je souhaite accéder aux informations de ce lien

//--A: le lien vers lequel pointe la balise
l(google.href);

//--B: l'ID de la balise
l(google.id);

//--C:la classe de la balise
l(google.className);

//--C:le texte de la balise
l(google.textContent);


//--je souhaite modifier le contenu de mon lien

google.textContent="Mon lien vers Google";

l(google.textContent);

/*----------------------------------------------------------
            AJOUTER UN ÉLÉMENT DANS LA PAGE 
----------------------------------------------------------*/

/**Nous allons utiliser deux méthodes:
 * 1.la fonction document.createElement() va permettre de générer un nouvel élément dans le DOM ; que je pourrai par la suite modifier avec les méthodes que nous venons de voir
 * PS : ce nouvel élément est placé en mémoire.
 **/

//--définition de l'élément
var span=document.createElement("span");

//--si je souhaite lui donner un ID
span.id="monSpan";

//--si je souhaite lui attribuer du contenu
span.textContent="Mon beau texte en JS!";

//--si je souhaite l'ajouter à ma page, la fontion appendChild() va permettre d'ajouter un enfant à un élément du DOM.
google.appendChild(span);

//--exercice
var h1=document.createElement("h1");
var a=document.createElement("a");

a.textContent="Titre de mon article";

//--le veux donner un lien à mon lien
a.href="#";

//--je mets mon lien a dans mon h1
h1.appendChild(a);

document.body.appendChild(h1);

//--je veux que mon lien soit de couleur rouge

a.style.color="red";

//--Je ne veux pas de lien souligné
a.style.textDecoration="none";

a.style.fontFamily="calibri";

a.style.fontSize="70px";




