

// 1.initialisation des variables
var dateObj      =new Date();
var anneeActuelle=dateObj.getFullYear();
//2.création d'une fonction
function Interaction(){ 
    //2a.demander à l'utilisateur son prénom
    let prenom=prompt("bonjour!Quel est ton nom?","saisir votre prénom");
    console.log(prenom);
    //2b.son âge
    let age=parseInt (prompt("Quel est ton âge?","saisir votre âge"));
    console.log(age);
    console.log(typeof age);

    //2c.en déduire l'année de naissance et l'afficher
    alert("Donc tu es né en"+(anneeActuelle-age)+"!")
    //2d. afficher sur la page
    document.write("Bonjour! "+prenom+" c'est étonnant! tu as "+age+" ans!");
}

//3.execution de la fonction
Interaction();


