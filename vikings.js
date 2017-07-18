var names = ['aaron', 'miguel','pilar', 'cristian', 'andres', 'guillermo', 'elisabet', 'juancarlos', 'reyes', 'alvaro',
    'gabriel', 'santiago', 'cesar', 'javi', 'almudena', 'aurora'];

var Vikings = function (){ 
  this.name = vikingName();
  this.health = randomNumber(10,101);
  this.strength = randomNumber(10,101);
};

var Saxons = function(){
  this.health = randomNumber(10,101);
  this.strength = randomNumber(10,101);
};

var randomNumber = function (min, max) {
  return Math.trunc(Math.random() * (max - min) + min);
};

var vikingFighters = randomNumber(1,501);
var saxonFighters = randomNumber(1,501);

var vikingName = function (){
  var index = randomNumber(0,16);
  return names[index];
};

var round = randomNumber(5,9);

function army(vikingFighters, saxonFighters){
  var vikingsArmy=[];
  var saxonsArmy=[];
  for (var i = 0; i < vikingFighters; i++){
    vikingsArmy[i] = new Vikings();
  }
  for (var j = 0; j < saxonFighters; j++){
    saxonsArmy[j] = new Saxons();
  }
  console.log(vikingsArmy);
  console.log(saxonsArmy);
}
console.log('Round number: ' + round);
console.log('Vikings number: ' + vikingFighters);
console.log('Saxons number: ' + saxonFighters);

army(vikingFighters, saxonFighters);
