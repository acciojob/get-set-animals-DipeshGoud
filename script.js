//complete this code
class Animal {
	constructor(species){
		this._species = species;
	}

	get species(){
	return this._species;
	}

	makeSound(){
		console.log("Animal sound")
	}
}

class Dog extends Animal {
	bark(woof){
		console.log(woof);
	}
}

class Cat extends Animal {
	purr(purr){
		console.log(purr);
	}
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
