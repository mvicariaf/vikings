var names = ['aaron', 'miguel','pilar', 'cristian', 'andres', 'guillermo', 'elisabet', 'juancarlos', 'reyes', 'alvaro',
    'gabriel', 'santiago', 'cesar', 'javi', 'almudena', 'aurora'];
var Vikings = function (){ 
  this.name = vikingName();
  this.health = health();
  this.strength = strength(this.health);
}
var health = function () {
  return Math.trunc(Math.random() * 100);
};
var strength = function (health) {
  var strength = Math.trunc(Math.random() * 100);
  while (health < strength || strength === 0){
    strength = Math.trunc(Math.random() * 100);
  }
  return strength;
};

var Saxons = function(){
  this.health = health();
  this.strength = strength(this.health);
};


var randomNumber = function (min, max) {
  return Math.trunc(Math.random() * (max - min) + min);
};
var vikingFighters = randomNumber(0,1001);
var saxonFighters = randomNumber(0,1001);

var vikingName = function (){
  var index = randomNumber(0,16);
  return names[index];
};
function army(vikingFighters){
  var vikingsArmy=[];
  for (var i=0; i<vikingFighters; i++){
    vikingsArmy[i]=new Vikings();
  
  }
}