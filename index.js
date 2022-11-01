//sets const with a random number in it 
  //Math.ceil() method rounds a number rounded UP to the nearest integer.
    //Math.random() * 10 Return a random number between 0 and 10:
const num1 = Math.ceil(Math.random() * 10)
const num2 = Math.ceil(Math.random() * 10)


//getting the question element
const questionEl = document.getElementById("question");

//manipulating the question element
    //getting the random numbers from num1 and num2 
    questionEl.innerText = `What is ${num1} multiply by ${num2} ?`;

//getting the input element by id
const inputEl = document.getElementById("input").value;

//getting the form element by id
const formEl = document.getElementById("form");

const scoreEl = document.getElementById("score");

let score = JSON.parse(localStorage.getItem("score"));

        if (!score) {
            score = 0;
        }  

//making the correct answer 
const correctAns = num1 * num2;

function onClick() {

        // Get the value of the input field with id="input"
        let inputValue = document.getElementById("input").value;

        // If inputValue is Not a Number or less than one or greater than 10
        let text;
  
        // If inputValue is Not a Number or not equal to correctAns
        if (isNaN(inputValue) || inputValue != correctAns) {
                
            text = "Input is wrong";
            document.getElementById("text").style.color = "red";
            score = score - 1;
            updateLocalStorage()

            console.log(score);
        } else {
            text =  " correct !";
            document.getElementById("text").style.color = "green";
            score = score + 1;
            updateLocalStorage()

            console.log(score);
        }
        
        document.getElementById("text").innerHTML = `${text}`;
        document.getElementById("score").innerHTML = `score: ${score}`;
        updateLocalStorage()
  } 


function updateLocalStorage() {
    localStorage.setItem("score", JSON.stringify(score));

  }
