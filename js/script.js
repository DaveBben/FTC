var questionOne = 'Tell a professor that someone in class is cheating';
var questionTwo = 'Tell your boyfriend or girlfriend tha tyou no longer want to be a couple';
var questionThree = 'Running into a building on fire to save a child';
var questionFour = 'Endure debilitating, chronic pain due to cancer';
var questionFive = 'Forgive a friend who committed a serious wrong against you';
var questionSix = 'Tell your conservative parents that you are gay';
var questionSeven ='Go to an Alcholics Anonymous meeting for the first time';
var questionEight = 'Confront a friend who you know is stealing money from housemate';
var highQ1, highQ2, highQ3, highQ4;
//var highQ2;
var winenrA, winnerB, winnerC;
/*var winnerB;
var winnerC;
var highQ3;
var highQ4;*/
	
var counter = 1;
var selected;
	
function defaultDisplay(){
	document.getElementById('content1').innerHTML = questionOne;
	document.getElementById('op1').value = questionOne;
	document.getElementById('content2').innerHTML = questionTwo;
	document.getElementById('op2').value = questionTwo;
}
	
function setSelected(answer){
	selected = answer;
}

function display(){
	switch(counter){
		case 1:
			highQ1 = selected;
			document.getElementById('content1').innerHTML = questionThree;
			document.getElementById('op1').value = questionThree;
			document.getElementById('content2').innerHTML = questionFour;
			document.getElementById('op2').value = questionFour;
			counter++;
			break;
		case 2:
			highQ2 = selected;
			document.getElementById('content1').innerHTML = highQ1;
			document.getElementById('op1').value = highQ1;
			document.getElementById('content2').innerHTML = highQ2;
			document.getElementById('op2').value = highQ2;
			counter++;
			break;
		case 3:
			winnerA = selected;
			document.getElementById('content1').innerHTML = questionFive;
			document.getElementById('op1').value = questionFive;
			document.getElementById('content2').innerHTML = questionSix;
			document.getElementById('op2').value = questionSix;
			counter++;
			break;
		case 4:
			highQ3 = selected;
			document.getElementById('content1').innerHTML = questionSeven;
			document.getElementById('op1').value = questionSeven;
			document.getElementById('content2').innerHTML = questionEight;
			document.getElementById('op2').value = questionEight;
			counter++;
			break;
		case 5:
			highQ4 = selected;
			document.getElementById('content1').innerHTML = highQ3;
			document.getElementById('op1').value = highQ3;
			document.getElementById('content2').innerHTML = highQ4;
			document.getElementById('op2').value = highQ4;
			counter++;
			break;
		case 6:
			winnerB = selected;
			document.getElementById('content1').innerHTML = winnerA;
			document.getElementById('op1').value = winnerA;
			document.getElementById('content2').innerHTML = winnerB;
			document.getElementById('op2').value = winnerB;
			counter++;
			break;
		case 7:
			winnerC = selected;
			document.write("According to you, it takes the most courage to: " + winnerC);
			counter++;
			break;
		default:
			break;	
	}
		document.getElementById('op1').checked = false;
		document.getElementById('op2').checked = false;
}