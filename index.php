
<?php


$questionOne = 'Tell a professor that someone in class is cheating';
$questionTwo = 'Tell your boyfriend or girlfriend that you no longer want to be a couple';
$questionThree = 'Running into a building on fire to save a child';
$questionFour = 'Endure debilitating, chronic pain due to cancer';
$questionFive = 'Forgive a friend who committed a serious wrong against you';
$questionSix = 'Tell your conservative parents that you are gay';
$questionSeven ='Go to an Alcholics Anonymous meeting for the first time';
$questionEight = 'Confront a friend who you know is stealing money from housemate';
$highQ1, highQ2, highQ3, highQ4;
$winenrA, winnerB, winnerC;
	
$counter = 1;
$selected;

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
			return questionEight;
		default:
			break;
	}
	
}

function getID(question){
	if(question == questionOne){
		return 0;
	}
	else if(question == questionTwo){
		return 1;
	}
	else if(question == questionThree){
		return 2;
	}
	else if(question == questionFour){
		return 3;
	}
	else if(question == questionFive){
		return 4;
	}
	else if(question == questionSix){
		return 5;
	}
	else if(question == questionSeven){
		return 6;
	}
	else if(question == questionEight){
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
function change(answer){
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
			display(4,5);
			counter++;
			break;
		case 4:
			highQ3 = selected;
			display(6,7);
			counter++;
			break;
		case 5:
			highQ4 = selected;
			display(highQ3,highQ4);
			counter++;
			break;
		case 6:
			winnerB = selected;
			display(winnerA,winnerB);
			counter++;
			break;
		case 7:
			winnerC = selected;
			document.write("According to you, it takes the most courage to: " + getQuestion(winnerC));
			counter++;
			break;
		default:
			break;	
	}
}


?>


<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">

  <title>Find the Courage</title>
  <meta name="Widener University: Find the Courage" content="Find the Courage Survey">
  <meta name="Dave Bennett & Richie Le" content="Find the Courage">
  <meta name="viewport" content="width=device-width" />
  <link rel="stylesheet" href="css/style.css">
 
</head>

<body onload="display(0,1)">
	<div id = "MainDiv">
		<div id="containerOne" onclick="change(this.value)">
			<p id="questionOne">
				This is the first Questions
			</p>
		</div>
		<br>
		<div id="containterTwo" onclick="change(this.value)">
			<p id="questionTwo">
				This is the second Question
			</p>
		</div>
   </div>
   	
	<script type="text/javascript" src="js/script.js"></script>
	 <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
	
	<script>
		$(function(){
		  $('#MainDiv').hide().fadeIn('slow');
		});


		$( "#containerOne" ).click(function() {
		  $('#MainDiv').hide().fadeIn('slow');
		});



		$( "#containterTwo" ).click(function() {
		  $('#MainDiv').hide().fadeIn('slow');
		});
</script>
</body>

<footer> Made by Dave Bennett and Richie Le </footer>
</html>