var names = ['aaron', 'miguel','pilar', 'cristian', 'andres', 'guillermo', 'elisabet', 'juancarlos', 'reyes', 'alvaro',
		'gabriel', 'santiago', 'cesar', 'javi', 'almudena', 'aurora'];
var vikingsArmy = function (){ 
	this.name = vikingName();
	this.health = health();
	this.strength = strength();
}
var health = function () {
  return Math.trunc(Math.random() * 100);
};
var strength = function (health) {
  var strength = Math.trunc(Math.random() * 100);
  while (health < strength || strength !== 0){
    strength = Math.trunc(Math.random() * 100);
  }
  return strength;
};

var Saxons = function(){
  this.health = health();
  this.strength = strength(this.health);
};

var saxon = new Saxons();
var viking1 = new vikingsArmy();
console.log(saxon);
console.log(viking1);
var randomNumber = function (min, max) {
  return Math.trunc(Math.random() * (max - min) + min);
};

var vikingName = function (){
	var index = randomNumber(0,16);
	return names[index];
};
