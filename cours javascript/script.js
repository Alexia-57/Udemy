//var est la variable a laquelle on attribut un nom et une valeur
//un operateur est par exemple =, -, *, +

console.log("Hello");

var name1 = "Alexia";
console.log(name1);

var x = 12;
console.log(12);

var y = 12.63;
console.log(y);

var xToString = x.toString();
console.log(xToString);

/*String est pour les suites de caractere type lettres, si je l'ajoute a un nombre ce dernier apparait en noir au lieu de bleu
String est toujours entre " " ou ' ' */

var nameLenght = name1.length;
console.log(nameLenght);

var xString = 12;
var xNumber = parseInt(xString);
console.log(xNumber)

//parseInt convertit une string en nombre entier

var xString = 12.63;
var xNumber = parseFloat(xString);
console.log(xNumber)

//parsefloat convertit une string en nombre decimal

var myString = 'Hello John';
var position = myString.indexOf("John")
console.log(position)

var myNewString = myString.replace("John","Tim");
console.log(myNewString)

var string1 = "Hello";
var string2 = "John";
var myNewString = string1 + " " + string2

var x = 12;
var y = 5;
var result = x*y;
console.log(result);

var x = 12;
var y = 5;
x++
console.log(x);
//x++ = x+1


//BOOLEANS

var myBoolean = true;
console.log(myBoolean)
//boolean = vrai ou faux

var x = 5;
var myBoolean = (x===5);
console.log(myBoolean)
// est ce que x est egal a 5?

var x = 5;
var myBoolean = (x!==5);
console.log(myBoolean)
// est ce que x n'est pas égal a 5?

var x = 5;
var myBoolean = (x==="5");
console.log(myBoolean)
// === veut dire strictement egal, donc regarde la valeur et le type (string ou nombre) --> ici c'est false car je demande si x = 5 en string alors que mon x est un 5 en nombre

var x = 5;
var myBoolean = (x=="5");
console.log(myBoolean)
// == veut dire egal, donc regarde uniquement la valeur (pas le type string ou nombre) --> ici c'est true car seule la valeur est regardee

var x = 5;
var myBoolean = (x>12);
console.log(myBoolean)

var x = 5;
var myBoolean = (x>=5);
console.log(myBoolean)

var x = 5;
var y = 12;
var myBoolean = (x>3 && y<15);
console.log(myBoolean)
// == pour demander si x>3 ET y<15 (pour que le && soit true, il faut que toutes les parties soient justes

var x = 5;
var y = 12;
var myBoolean = (x>3 || y<15);
console.log(myBoolean)
// == x>3 OU y<15, il suffit qu'un des deux soient justes pour que ce soit true

console.log(!true)
console.log(!false)
// ! demande de donner l'inverse de true et false

//CONDITIONS

var speed = 70;
if(speed<80)
{
  console.log("tu roules a la bonne vitesse");
}
else if(speed<100)
{
  console.log("il faut que tu ralentisses un peu");
}
else
{
  console.log ("tu roules trop vite c'est dangereux");
}


/*
if(condition1)
{
  console.log("execute ce code");
}
else if(condition2)
{
  console.log("la condition 1 n'est pas vraie mais la 2 l'est");
}
else
{
  console.log("alors execute ce code la !");
}
*/

var speed = 40;
if(speed<80)
{
  if(speed<50)
  {
    console.log("accelere un peu !");
  }
  else
  {
  console.log("tu roules a la bonne vitesse");
  }
}
//on peut imbriquer un if dans un autre

var favoriteColor = "yellow";
switch(favoriteColor)
{ case "blue":
    console.log ("J'adore le bleu !");
  break;
  case "red":
    console.log ("J'aimerais bien une voiture rouge");
  break;
  default:
    console.log("je ne connais pas ta couleur");
}
 
/*
switch(variable)
{
  case1 : 
    break;
  case2 :
    break;
  default:
}
*/

var favoriteColor = "yellow";
switch(favoriteColor)
{ case "yellow":
  case "blue":
    console.log ("J'adore le bleu et le jaune !");
  break;
  case "red":
    console.log ("J'aimerais bien une voiture rouge");
  break;
  default:
    console.log("je ne connais pas ta couleur");
}
// si c'est yellow ou blue la reponse sera la meme car pas de break entre les deux

//LOOPS

var number = 0;
while(number<3)
{
  console.log(number);
  number++;
}
//while: permet de verifier ma condiition jusqu'a ce que mon 0 atteigne 3 et ne soit plus inferieur a 3
//number++ permet d'eviter une loop infinie (car dans l'exemple, je demande d'afficher number tant que number>3 alors que j'ai donne la valeur 0 a number)

var number = 0;
do
{
  console.log(number);
  number++;
}
while(number<3)
//do while: commme le while sauf qu'avant de checker, il va imprimer ma valeur number (0) au depart


for(var number = 0; number < 5; number++)
{
  console.log(number);
}

/*
for(partie1; partie2; partie 3)
{
  Code a executer;
}
*/

//FONCTIONS

function multiply (number1, number2, number3)
{
  return number1*number2*number3;
}
//declaration de la fonction (on declare comment marche la fonction)

var a = 5;
var b = 6;
var result = multiply(a,b,a);
//execution de la fonction

console.log(result);

/*
function name(parameter1, parameter3, etc...)
{
  code a executer
  return result;
}
*/

function multiply (number1, number2, number3)
{
  var resultMultiply = number1*number2*number3;
  return resultMultiply
}

var a = 5;
var b = 6;
var result = multiply(a,b,a);

console.log(result);

//ARRAYS (TABLEAUX)

//var name = [valeur1, valeur2, valeur3]

var fruits = ["pomme", "banane", "orange", "citron"];
console.log(fruits.length);
console.log(fruits[0]);
//la premiere valeur de la liste, ici pomme, est toujours 0 et pas 1. si on ne met pas de 0, il liste tous les elements

for(var i = 0; i < fruits.length; i++)
{
  console.log(fruits[i]);
}

fruits.push("kiwi","apple");
console.log(fruits);
//rajouter une valeur a la liste

fruits.pop();
console.log(fruits)
//supprimer la derniere valeur de la liste

var agrumes = fruits.slice(2,4);
console.log(agrumes);

var myArray = [[0,1],[5,7,8],[12,18]];
console.log(myArray[2][1]);

//OBJETS

/*syntaxe:
var object = {
              propertyName1: propertyValue1,
              propertyName2: propertyvalue2,
              method1: function(),
             };
*/

//option1
var dog = {
    name: "Choupette",
    color: "white",
    age: 4,
          };

console.log(dog.name);

console.log(dog["color"]);


for(var property in dog)
console.log(dog[property]);

//option2

var dog = new Object();
dog.name = "Choupette";
dog.color = "white";
dog.age = 5;

dog.aboie = function(){console.log("wouaf wouaf")};

for(var property in dog)
console.log(dog[property]);
dog.aboie();

//FONCTIONS CONSTRUCTEURS
//permet de faire un template d'objet

function Dog(name, color, age)
{
  this.name = name;
  this.color = color;
  this.age = age; 
  this.aboie = function()
  {
    console.log("wouaf " + this.name)
  }
}

var petitCaniche = new Dog("Choupette", "white", 4);
console.log(petitCaniche);

var grosPitbull = new Dog ("Rex", "black", "2");
console.log(grosPitbull)

petitCaniche.aboie();
grosPitbull.aboie();