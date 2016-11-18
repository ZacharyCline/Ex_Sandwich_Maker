var SandwichMaker = (function (SandwichMaker) {
	var VeggiePrices = {
		"Lettuce": 0.50,
		"Onions": .50,
		"Toms": 0.50,
		"Jalapenoes": 0.65,
		"Peppers": 0.65
	};
	SandwichMaker.addVeggies = function(veggie){
		return VeggiePrices[veggie];
	}


   return SandwichMaker
})(SandwichMaker || {});