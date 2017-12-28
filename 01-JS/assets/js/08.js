/*------------------------
      LES CONDITIONS
-------------------------*/

/*var MajoriteLegaleFR=18;
if(14>MajoriteLegaleFR){
    alert("bienvenue!")
}

//--le "else" n'est pas obligatoire
else{
    alert("Google")
}
/*----------------------------------
EXERCICE
créer une fonction permettant de vérifier l'âge d'un visiteur (prompt).
s'il es tmajeur, alors "Bienvenue!"
Sinon, redirection vers Google.*/

//1.définir les variables
var MajoriteLegaleFR=18;
//2. demander l'âge
function age(){
    let age=parseInt (prompt("Quel est votre âge?","saisir votre âge"));
    //2a.mettre une condition
    if(age>MajoriteLegaleFR){
        alert("bienvenue!")}
        else{
            alert("Casse-toi")
            document.location.href="https://www.google.fr/"}
    }
//exécuter la fonction
age();

//--correction
//--1.declarer la majorité légale
var MajoriteLegaleFR=18;

//--2.créer une fonction pour demander son âge
/**Si l'âge de l'utilisateur passé en paramètre est supérieur ou égal à la majorité légale, alors la fonction retourne vrai; Sinon elle retourne faux.
 * @param {Int}age
 * @return{Boolean}
 */
function verifierAge(){
    if(age>=MajoriteLegaleFR){
        return true;
    }else {
        return false;
    }
}
//--3.Je demande à l'utilisateur son âge
var age=parseInt(prompt("Bonjour, quel âge avez-vous?","saisissez votre âge"));

//--4.vérification de l'âge
if(verifierAge(age)){
        //--4a.message de bienvenue
    alert("Bienvenue")
}
    //--Redirection
    else{
        document.location.href="https://www.google.fr/"   

    }

/*------------------------------------------------------------------------------------*\
LES OPÉRATEURS DE COMPARAISON
L'opérateur de comparaison "=="permet de vérifier que deux variables sont identiques.

L'opérateur de comparaison "===" signifie: strictement égal à. 
Il va comparer la valeur et le type.

L'opérateur de comparaison "!=" signifie différent de".

L'opérateur de comparaison "!==" signifie strictement différent de.
\*------------------------------------------------------------------------------------*/


/*---------------------------------------------------
EXERCICE:

J'arrive sur un espace sécurisé au moyen d'un mel et d'un mot de passe.

Je doit saisir mon mel et mon mot de passe afin d'être authentifié.

en cas d'échec une alerte m'informe du pb.
si tout se passe bien, message de bienvenu.
----------------------------------------------------------------------*/
/* //--base de données
var email, mdp;
email = "wf3@l-media.fr";
mdp = "wf3";
//1.demande d'identifiant
var emailUser = prompt("Quel est votre mel?", "mel");
var mdpUser = prompt("Quel est votre mot de passe", "votre mot de passe");

if (emailUser !== email || mdpUser !== mdp) {
    alert("erreur");
}
else {
    alert("Bienvenue!");
} */

/*------------------------------ CORRECTION avec les fonctions------------------------------*/
var email, mdp;
email = "wf3@l-media.fr";
mdp = "wf3";
var emailUser = prompt("Quel est votre mel?", "mel");
var mdpUser = prompt("Quel est votre mot de passe", "votre mot de passe");

function Correct(emailUser,mdpUser){
    if(emailUser===email && mdpUser===mdp){
        return true;}
        else{
            return false;
        }
    }

if(Correct(emailUser,mdpUser)){ 
    alert("Bienvenue"+emailUser);
}
else{
    alert("Mot De passe/identifiant incorrect");
}

/*LES OPÉRATEURS LOGIQUES

L'opérateur ET : "&&" ou "AND"
emailUser et email correspondent Et mdpUser et mdp correspondent:
dans cette condition, les deux combinaisons doivent obligatoirement correspondre pour être validées.
Ex. if(emailUser==email && mdpUser==mdp)

L'opérateur OU : "||" ou "OR"
EmailUser et email correspondent ET/OU mdpUser et mdp correspondent:
dans cette condition, au moins l'une des deux doit être validée.
Ex.: if(emailUser==email || mdpUser==mdp)

L'opérateur "!" ou "NOT"
L'opérateur "!" ou "NOT" signifie "le contraire de".
Ex.:
var approbationUtilisateur=true;
if(!approbationUtilisateur){...} : mon utilisateur n'est pas approuvé.
revient à écrire:
if(approbationUtilisateur==false){...}
