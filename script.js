window.addEventListener("load", function () {
	// console.log("hi")	
	// var user = {
	// 	name:"hoi",
	// 	lastname:"bla",
	// 	age: 16 
	// 	}
	// function addage () {
	// 	age++;
	// 	}


	// console.table(user);
 	var	user = ["323232"];
 	var	hi = ["asf"];
	Array.prototype.size = function  () {
		this.length = 0; 
		};
	console.log(user.size());
	console.log(hi.size());

});