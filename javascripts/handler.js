let finishedSandwich = 0


//set an empty variable to be used in eventlistener functions
let selectedTopping;

//Grabbing all elements to add eventListeners too.
let breadPicker = document.getElementById("bread"),
	meatPicker = document.getElementById("meat"),
	cheesePicker = document.getElementById("cheese"),
	condimentsPicker = document.getElementById("condiments"),
	veggiesPicker = document.getElementById("veggies"),
	totalBtn = document.getElementById("totalBtn"),
	orderTotal = document.getElementById("sandwhichTotal");


// Change Bread Type
breadPicker.addEventListener("change", function(event){
	selectedTopping = event.target.value;
	finishedSandwich =  SandwichMaker.addTopping(SandwichMaker.addBread(selectedTopping)); 

});

// Change Meat Type
meatPicker.addEventListener("change", function(event){
	selectedTopping = event.target.value;
	finishedSandwich = SandwichMaker.addTopping(SandwichMaker.addMeat(selectedTopping));

});

// Change Cheese Type
cheesePicker.addEventListener("change", function(event){
	selectedTopping = event.target.value;
	finishedSandwich = SandwichMaker.addTopping(SandwichMaker.addCheese(selectedTopping));

});

//Change Condiment Type
condiments.addEventListener("change", function(event){
	selectedTopping = event.target.value;
	finishedSandwich = SandwichMaker.addTopping(SandwichMaker.addCondiments(selectedTopping));

});

// Change Veggies
veggiesPicker.addEventListener("change", function(event){
	selectedTopping = event.target.value;
	finishedSandwich = SandwichMaker.addTopping(SandwichMaker.addVeggies(selectedTopping));

});

// Click Total Button
orderTotal.addEventListener("click", function(event){
	if(event.target === totalBtn) {
		orderTotal.innerHTML = `<h1> The Total For Your Sandwich is: ${(finishedSandwich).toFixed(2)}</h1>`;
	}
});




