var questionOne = 'Tell a professor that someone in class is cheating';
var questionTwo = 'Tell your boyfriend or girlfriend that you no longer want to be a couple';
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

function getQuestion(id){
	switch(id){
		case 0:
			return questionOne;
		case 1:
			return questionTwo;
		case 2:
			return questionThree;
		case 3:
			return questionFour;
		case 4:
			return questionFive;
		case 5:
			return questionSix;
		case 6:
			return questionSeven;
		case 7:
			return questionSeven;
		default:
			break;
	}
	
}


function getID(question){
	if(question = questionOne){
		return 0;
	}
	else if(question = questionTwo){
		return 1;
	}
	else if(question = questionThree){
		return 2;
	}
	else if(question = questionFour){
		return 3;
	}
	else if(question = questionFive){
		return 4;
	}
	else if(question = questionSix){
		return 5;
	}
	else if(question = questionSeven){
		return 6;
	}
	else if(question = questionEight){
		return 7;
	}
	
	
}



	
function display(idOne,idTwo){
	document.getElementById('questionOne').innerHTML = getQuestion(idOne);
	document.getElementById('containerOne').value = getID(getQuestion(idOne));
	document.getElementById('questionTwo').innerHTML = getQuestion(idTwo);
	document.getElementById('containterTwo').value = getID(getQuestion(idTwo));
}
	
/**
passes an ID
*/
function display(answer){
	selected = answer; //ID
	switch(counter){
		case 1:
			highQ1 = selected;
			display(2,3);
			counter++;
			break;
		case 2:
			highQ2 = selected;
			display(highQ1,highQ2);
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