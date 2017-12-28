/**
 * La concatenation
 */

 var debutDePhrase      ="Aujourd'hui ";
 var laDate             =new Date();
 var suiteDePhrase      =", sont présents:";
 var nombreDeStagiaires =" "+18;
 var finDePhrase        =" stagiaires.<br>";

 //--Nous souhaitons maintenant, grâce à la concaténation afficher tout ce monde en un seul morceau!
 document.write(debutDePhrase+laDate.getDate()+"/"+(laDate.getMonth()+1)+"/"+laDate.getFullYear()+nombreDeStagiaires+finDePhrase);

 /**
  * EXERCICE: créez une concaténation
  */

  var Phrase1="Je m'appelle ";
  var Phrase2=" Marie-Pierre et j'ai ";
  var Age=24;
  var Phrase3=" ans!";

  document.write(Phrase1+Phrase2+Age+Phrase3);





