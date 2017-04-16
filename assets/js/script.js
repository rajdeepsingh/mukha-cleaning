// https://jsfiddle.net/Guruprasad_Rao/xya6gs93/1/

$(function() {
	var item = "This is an item";
	var persons = [];

	var person = {
		"name": "John Doe",
		"drink": "Latte"
	};

	persons.push(person);

	person = {
		"name": "Jane Smith",
		"drink": "Machiatto"
	};

	persons.push(person);

	console.log("This should be working now");

	$.each(persons, function(i, person) {
		console.log(person.name + ' and they would like a ' + person.drink);
		console.log(person);
	});
});