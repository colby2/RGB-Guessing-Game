var numberOfSquares = 6;
var colors = generateRandomColors(numberOfSquares);
var pickedColor = pickColor();

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	//mode button event listeners
	setupModeButtons();
	setupSquares();
	
}


function setupModeButtons(){
	for(var i = 0; i<modeButtons.length; i++){
		//loop through list of buttons and add selected css class.
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numberOfSquares = 3: numberOfSquares = 6;
			reset();
		});
	}
}

function setupSquares(){
		for(var i = 0; i < squares.length; i++){
		//give squares color
		squares[i].style.backgroundColor = colors[i];
		//add click event to all squares
		squares[i].addEventListener("click", function(){
			var clickedColor = this.style.backgroundColor;
			//compare clicked color to correct color 
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "Correct";
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
				resetButton.textContent = "Play Again";
			}
			else{
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again";
			}
		});
	}

	reset();
}


function reset(){
	//styling modifications
	resetButton.textContent = "New Colors";
	h1.style.backgroundColor = "steelblue";
	messageDisplay.textContent = "";

	//generate new colors 
	 colors = generateRandomColors(numberOfSquares);
	//pick a new random color and change display
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	//change colors of squares
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
		squares[i].style.display = "block";
		squares[i].style.backgroundColor = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}
	}
}


resetButton.addEventListener("click", function(){
	reset();
});



function changeColors(color){
	//loop through all squares and change colors
	for(var i = 0; i < colors.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an array 
	var arrayOfColors = [];
	for( var i=0; i < num; i++){
		arrayOfColors.push(randomColor());
	}
	return arrayOfColors;
}

function randomColor(){
	//red
	var r = Math.floor(Math.random() * 256)
	//green
	var g = Math.floor(Math.random() * 256)
	//blue
	var b = Math.floor(Math.random() * 256)
	return "rgb(" + r + ", " + g + ", " + b + ")";
} 

// easybtn.addEventListener("click", function(){
// 	hardbtn.classList.remove("selected");
// 	easybtn.classList.add("selected");
// 	numberOfSquares = 3;
// 	colors = generateRandomColors(numberOfSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for(var i = 0; i < squares.length; i++){
// 		if(colors[i]){
// 			squares[i].style.backgroundColor = colors[i];
// 		}
// 		else{
// 			squares[i].style.display = "none";
// 		}
// 	}
// });

// hardbtn.addEventListener("click", function(){
// 	hardbtn.classList.add("selected");
// 	easybtn.classList.remove("selected");
// 	numberOfSquares = 6;
// 	colors = generateRandomColors(numberOfSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for(var i = 0; i < squares.length; i++){
// 			squares[i].style.backgroundColor = colors[i];
// 	        squares[i].style.display = "block";
		
// 	}
// });