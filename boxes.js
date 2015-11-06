$(document).ready( function  () {
	console.log("ready for DOM!");
	findMeThatSecretBox();
	findChildDivsOfFirstRow();
	// hideLastBoxInTheLastRow();
	changeAllRedBoxesToWhite();
	findFirstTwoDivsInTheSecondRow();
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

function findFirstTwoDivsInTheSecondRow(){
	var firstTwoDivs = $('#row2 div').filter(':nth-child(1), :nth-child(2)').removeClass('box boxType2 boxType3');

	// var firstTwoDivs = $('#row2 div').splice(0,2).removeClass('boxType2 boxType3');
		console.log('divs as an array' + firstTwoDivs);


}