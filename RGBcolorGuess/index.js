
 let numSquares = 6;
 let colors = []; // array of the colors
 let pickedColor;
 let squares = document.querySelectorAll(".square");
 let header = document.querySelector(".header");
 let rgbCode = document.querySelector('.rgb-code');
 let displayRes = document.querySelector('.displayRes');
 let btn = document.querySelectorAll('.btn');
 let newBtn = document.querySelector('.new-Btn');

  // init funtion .....
init();

function init(){
	setupbtn();
	setupSquares();
	reset();
}

// set up the Mode buttons
function setupbtn(){
	for(var i = 0; i < btn.length; i++){
		// add the event listener
		btn[i].addEventListener("click", function(){
			// remove the class active from start to end it would act as the toogle kind of
			btn[0].classList.remove("active");
			btn[1].classList.remove("active");
			// then add the classlist acitve
			this.classList.add("active");
			//if the mode btn text is easy then numSquares are gonig to be 3 other wise 6
			document.querySelector('span').textContent === "Easy" ? numSquares = 3: numSquares = 6;
			// then call the rest
			reset();
		});
	}
}


// set up the squares
function setupSquares(){
	for(var i = 0; i < squares.length; i++){
	//add click listeners to squares
		squares[i].addEventListener("click", function(){
			//grab color of clicked square
			var clickedColor = this.style.background;
			//compare color to pickedColor
			if(clickedColor === pickedColor){
				// dispal msg = correct
				displayRes.textContent = "Well Done!";
				// new btn or color to be play again
				newBtn.textContent = "Play Again?"
				// change the color of every square
				changeColors(clickedColor);
				// change the header color to the clicked color which is correct
				h1.style.background = clickedColor;
			} else {
				// else change the color to the  bg
				this.style.background = "rgb(46 , 131 , 250)";
        this.style.border = 'none';
				// msg to the Try Again
				displayRes.textContent = "Try Again :)"
			}
		});
	}
}

// reset fun
function reset(){
	// generating our colors array
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change the rgb dispaly to the random color
	rgbCode.textContent = pickedColor;
	//then the new button to New Colors
	newBtn.textContent = "New Colors"
	//clean the msg display
	displayRes.textContent = "";
	//change colors of squares
	for(var i = 0; i < squares.length; i++){
		if(colors[i] /* current color */ ){
			// if there is current color the display them
			squares[i].style.display = "block"
			// display the color of each square
			squares[i].style.background = colors[i];
		} else {
			// display none if there isn't any square
			squares[i].style.display = "none";
		}
	}
 
}

// now on the new btn call the reset fn
newBtn.addEventListener("click", function(){
	reset();
})


// change colors of  all the squares to the clickded color
function changeColors(color){
	//loop through all squares
	for(var i = 0; i < squares.length; i++){
		//change each color to match given color
		squares[i].style.background = color;
	}
}


// pick colors
function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}


// generate Random colors
function generateRandomColors(num){
	//make an array
	var arr = []
	//repeat num times
	for(var i = 0; i < num; i++){
		//get random color and push into arr
		arr.push(randomColor())
	}
	//return that array
	return arr;
}

// random color
function randomColor(){
	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from  0 -255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from  0 -255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

