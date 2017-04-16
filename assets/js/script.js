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

	alert("This is an alert");
	persons.push(person);

	console.log("This should be working now");

	$.each(persons, function(i, person) {
		console.log(person.name + ' and they would like a ' + person.drink);
		console.log(person);
	});

	function addList() {
	var item = "<ul>"+
	"<li><a>Link 1</a></li>"+
	"<li><a>Link 2</a></li>"+
	"<li><a>Link 3</a></li>"+
	"<li><a>Link 4</a></li>"+
	"<li><a>Link 5</a></li>"+
	"</ul>"

	$('.list-please').html(item);
}

addList();

});