var SandwichMaker = (function (SandwichMaker) {
	var CheesePrices = {
		"Swiss": 0.25,
		"American": 0.25,
		"Smoked Cheddar": 0.50,
		"Provolone": .50,
		"PepperJack": .50
	};
SandwichMaker.addCheese = function(cheese){
	return CheesePrices[cheese];
}
return SandwichMaker
})(SandwichMaker || {});