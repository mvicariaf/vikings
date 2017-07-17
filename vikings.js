var names = ['aaron', 'miguel','pilar', 'cristian', 'andres', 'guillermo', 'elisabet', 'juancarlos', 'reyes', 'alvaro',
		'gabriel', 'santiago', 'cesar', 'javi', 'almudena', 'aurora'];
var vikingsArmy = function (name, health, strength){ 
	this.name = name;
	this.health = health;
	this.strength = strength;


}
var salud = function () {
  return Math.trunc(Math.random() * 100);
};
var fuerza = function (salud) {
  var strength = Math.trunc(Math.random() * 100);
  while (salud < strength){
    strength = Math.trunc(Math.random() * 100);
  }
  return strength;
};

var Saxons = function(){
  this.salud = salud();
  this.fuerza = fuerza(this.salud);
};

var saxon = new Saxons();
console.log(saxon);