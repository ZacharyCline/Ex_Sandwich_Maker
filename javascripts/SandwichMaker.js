var SandwichMaker = (function () {
		let totalPrice = 0;
	return {
		addTopping: function (toppingPrice){
			return totalPrice += toppingPrice;
		}
	};
   
})();