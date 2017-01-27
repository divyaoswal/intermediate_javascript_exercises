function Person(firstName, lastName, favoriteColor, favoriteNumber){
	this.firstName = firstName;
	this.lastName = lastName;
	this.favoriteColor = favoriteColor;
	this.favoriteNumber = favoriteNumber;
	this.favoriteFoods = [];
	this.family = [];
}

Person.prototype.fullName = function(){
	return `${this.firstName} ${this.lastName}`;
}

Person.prototype.toString = function(){
	return `${this.firstName} ${this.lastName}, Favorite Color: ${this.favoriteColor}, Favorite Number: ${this.favoriteNumber}`
}

Person.prototype.family = [];
Person.prototype.addToFamily = function(){
	if(!this.family.includes(this)){
		return this.family.push(this);
	}
}

// Person.prototype.addToFamily = function(person){
//     if(this.family.indexOf(person) === -1 && person instanceof Person){
//         return this.family.push(person);
//     }
// }

// Array.prototype.map = function(function(val, idx, arr){
// 	var newArray = [];
// 	newArray.push(val);
// 	return newArray;
// }

// Array.prototype.reverse = function(){
// 	return this.split("").reverse().join("");
// }