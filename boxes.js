$(document).ready( function  () {
	console.log("ready for DOM!");
	findMeThatSecretBox();
});



function findMeThatSecretBox(){

	var secretBox = $('#secretBox');
	secretBox.css('background','white');
	var secretBoxH1 = $('<h1>secretBox!</h1>');

	secretBox.append(secretBoxH1);
}