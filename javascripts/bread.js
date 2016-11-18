var SandwichMaker = (function(Sandwichmaker) {
	
	var BreadPrices = {
		"Wheat": 1.00,
		"Herbs": 1.10,
		"White": 1.20,
		"Ciabatta": 1.30,
		"Wrap": 2.00
	};
 Sandwichmaker.addBread = function (bread) {
    return BreadPrices[bread];
  };
return Sandwichmaker;
})(SandwichMaker || {});