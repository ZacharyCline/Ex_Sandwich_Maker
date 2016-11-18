var SandwichMaker =(function (SandwichMaker) {
	var CondimentPrices = {
		"Mustard": 0.05,
		"BBQ": 0.15,
		"1000 Island": 0.05,
		"Honey Mustard": 0.15,
		"Mayo": 0.05,
	};
SandwichMaker.addCondiments= function(condiment){
	return CondimentPrices[condiment];
}
return SandwichMaker   
})(SandwichMaker || {});