var SandwichMaker = (function (SandwichMaker) {
	var MeatPrices = {
		"Bacon": 1.00,
		"Ham": 1.00,
		"Turkey": 1.00,
		"Beef": 2.00,
		"Chicken": 2.00,
		"Extra": 1.50,
	};
	SandwichMaker.addMeat = function(meat){
		return MeatPrices[meat];
	}
   return SandwichMaker
})(SandwichMaker || {});