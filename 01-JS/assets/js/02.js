//--déclarer un tableau indexé 
var monTableau=[];
var myArray   =new Array;

//--affecter des valeurs à un tableau indexé
monTableau[0]="Marie-Pierre";
monTableau[1]="Hugo";
monTableau[2]="Hamid";

//--afficher le contenu de mon tableau dans la console
console.log(monTableau[1]);//--Hugo
console.log(monTableau[2]);//--Hamid
console.log(monTableau);//--afficher toutes les données du tableau

//--déclarer et affecter des valeurs à un tableau indexé.
var nosPrenoms=["Marie-Pierre","Thomas","chloé","olivier","Riad","hugo"];
console.log(nosPrenoms);

//--déclarer et affecter des valeurs à un objet
//--PAS DE TABLEAU ASSOCIATIF EN JS!!!
var coordonnee={
    prenom:"Hugo",
    nom   :"LIEGARD",
    Age   :28
};
console.log(coordonnee);
console.log(typeof coordonnee);

//--Je vais créer deux tableaux indexés
var listeDePrenoms=["Hugo","Marie-Pierre","Lounis","Romain"];
var listeDeNoms=["LIEGARD","DUPOUX","LOUNIS","ELIE"];

//-- Je vais créer un tableau à deux dimensions à prtir  de mes tableaux précédents
var Annuaire=[listeDePrenoms,listeDeNoms];
console.log(Annuaire);

//--Hugo LIEGARD
console.log(Annuaire[0],[0]);
console.log(Annuaire[1],[0]);

/*var listePrenoms=["Chloé","Marie-Pierre","said","Hamid"];
var listeNoms   =["x","y","z","w"];
var listeTel    =["010203","030201","050406","040908"];
var listeMel    =["df@rr","df@rr","df@rr","df@rr"];

var annuaireDesStagiaires=[listePrenoms,listeNoms,listeTel,listeMel];
console.log(annuaireDesStagiaires);
console.log(annuaireDesStagiaires[0],[2]);
console.log(annuaireDesStagiaires[1],[3]);*/

var AnnuairesDesStagiaires=[
    {prenom:"Hugo",nom:"LIEGARD",tel:"0302050104"},
    {prenom:"Chloé",nom:"THUILLIER",tel:"0302050104"},
    {prenom:"Anis",nom:"CHABANI",tel:"0302050104"},
];

console.log(AnnuairesDesStagiaires);
console.log(AnnuairesDesStagiaires[1]);
console.log(AnnuairesDesStagiaires[1]["prenom"]);
console.log(AnnuairesDesStagiaires[1].prenom);


// -- Exemple de Tableau 3D

var Contacts = [

    {
        prenom      : "Hugo",
        nom         : "LIEGEARD",
        coordonnees : {
                        email   : "wf3@hl-media.fr",
                        adresse : {
                                    ville   : "Ducos",
                                    cp      : 97224,
                                    region  : "Martinique",
                                    pays    : "France"
                                  },
                        tel     : {
                                    fixe    : "0596 108 328",
                                    fax     : "0596 108 632",
                                    port    : "0783 97 15 15"
                                  }
                      }
    },
    {
        prenom      : "Rodrigue",
        nom         : "NOUEL",
        coordonnees : {
                        email   : "wellcommunication.net@gmail.com",
                        adresse : {
                                    ville   : "Fort-de-France",
                                    cp      : 97200,
                                    region  : "Martinique",
                                    pays    : "France"
                                  },
                        tel     : {
                                    fixe    : "0596 XXX XXX",
                                    fax     : "0596 XX XX XX",
                                    port    : "0696 07 04 34"
                                  }
                      }
    }

];

console.log(Contacts);
console.log(Contacts[0].coordonnees.tel.port);
console.log(Contacts[1].coordonnees.tel.port);

/*-----------------------------------
|        AJOUTER UN ÉLÉMENT         |
-----------------------------------*/

var couleurs=["rouge","jaune","vert"];
/**
 * Si je souhaite ajouter un élément dans mon tableau. Je fais appel à la fonction "PUSH" qui me renvoie le nombre d'éléments de mon tableau
 * que je peux récupérer facultativement dans une variable.
 */

console.log(couleurs);
var nombreElementsDeMonTableau=couleurs.push("orange");
console.log(couleurs);
console.log(nombreElementsDeMonTableau);
/** 
 * NB:la fonction unshift() permet d'ajouter un ou plusieurs éléments en début de tableau.
 */

 /*------------------------------------------------------
|        RÉCUPÉRER ET SORTIR LE DERNIER ÉLÉMENT         |
-------------------------------------------------------*/
/**La fonction pop() me permet de supprimer le dernier élément de mon tableau et d'en récupérer la valeur.
 * 
 * Le même chose est possible avec le premier élément, en utilisant la fonction shift().
 * 
 * NB:la fonction splice() vous permet de faire sortir un ou plusieurs éléments de votre tableau.
 */
var monDernierElement=couleur.pop();
