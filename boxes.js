$(document).ready( function  () {
	console.log("ready for DOM!");
	findMeThatSecretBox();
	findChildDivsOfFirstRow();
	// hideLastBoxInTheLastRow();
	changeAllRedBoxesToWhite();
});



function findMeThatSecretBox(){

	var secretBox = $('#secretBox');
	secretBox.css('background','white');
	var secretBoxH1 = $('<h1>secretBox!</h1>');

	secretBox.append(secretBoxH1);
}

function findChildDivsOfFirstRow(){
	var childDivs = $('#row1 div');
	childDivs.addClass('boxType3');
	console.log(childDivs);
}

function hideLastBoxInTheLastRow(){

	var lastBox = $('#row4 div:last').hide();
}

function changeAllRedBoxesToWhite(){
	var redBoxes = $('.box.boxType1.red');
	console.log(redBoxes);
	redBoxes.css('background','white');
}