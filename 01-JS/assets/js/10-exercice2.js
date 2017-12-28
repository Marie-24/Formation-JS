/*
 I. Créer un Tableau 3D "PremierTrimestre" contenant la moyenne d'un étudiant pour plusieurs matières.

    Nous auront donc pour un étudiant, sa moyenne à plusieurs matières.
    
    Par exemple : Hugo LIEGEARD : [ Francais : 12, Math : 19, Physique 4], ... etc
    
    **** Vous allez créez au minimum 5 étudiants ****

II. Afficher sur la page (à l'aide de document.write) pour chaque étudiant, la liste (ul et li) de sa moyenne à chaque matière, puis sa moyenne générale. 
*/


var premierTrimestre = [
    {
        nom: "LIEGARD",
        prenom: "Hugo",
        moyenne: {
            francais: 4,
            maths: 8,
            physique: 12
        }
    },

    {
        nom: "DUPOUX",
        prenom: "Marie-Pierre",
        moyenne: {
            francais: 19,
            maths: 12,
            physique: 12,
            italien: 11
        }
    },

    {
        nom: "ELIE",
        prenom: "Romain",
        moyenne: {
            francais: 15,
            maths: 8,
            physique: 12,
            latin: 15,
        }
    },
];

//--Les flemards.js

function w(CeciEstUnParametre) {
    document.write(CeciEstUnParametre);
};

function l(e) {
    console.log(e);
};

//--résolution

l(premierTrimestre);

//--afficher la liste des étudiants
//--balises pour liste. <ol> avant boucle
w("<ol>");
for (let i = 0; i < premierTrimestre.length; i++) {
    //--boucle pour liste par nom
    let etudiant = premierTrimestre[i];
    //--ici mes variables seront remises à zéro à chaque étudiant(dans la boucle étudiant)
    var nombreDeMatiere = 0, sommeDesNotes = 0;
    //--aperçu console
    l(etudiant.prenom + " " + etudiant.nom);
    //-- Afficher prénom et nom dans une liste
    w('<li>');
    w(etudiant.prenom + " " + etudiant.nom);
    //--liste imbriquée
    w('<ul>')
    for (let matiere in etudiant.moyenne) {
        l(matiere)
        l(etudiant.moyenne[matiere])
        //--compter le nombre de matières
        nombreDeMatiere++;
        sommeDesNotes += etudiant.moyenne[matiere];
        w("<li>")
        w(matiere + ":" + etudiant.moyenne[matiere]);
        w("</li>")
    };//--fin de la boucle matière
     w('<li>');
        w("<strong>Moyenne générale </strong>"+(sommeDesNotes/nombreDeMatiere).toFixed(2));
        w('</li>');
    w("</ul>");
    w('</li><br>');
}//--fin de la boucle étudiant
w("</ol>");





