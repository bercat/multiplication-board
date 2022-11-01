//sets const with a random number in it 
  //Math.ceil() method rounds a number rounded UP to the nearest integer.
    //Math.random() * 10 Return a random number between 0 and 10:
let num1 = Math.ceil(Math.random() * 10)
let num2 = Math.ceil(Math.random() * 10)


//getting the question element
const questionEl = document.getElementById("question");

 //getting the input element by id with the value
 let inputEl = document.getElementById("input");


//getting the score element by id
const scoreEl = document.getElementById("score");

let score = JSON.parse(localStorage.getItem("score"));


score = 0;

scoreEl.innerText = `${score}`;

//manipulating the question element
    //getting the random numbers from num1 and num2 and calculation value
    questionEl.textContent = `Select a button to calculate the numbers ${num1} and ${num2}`;

function add() {

    console.log('button is clicked')
    let correctAns = num1 + num2

    document.getElementById("sum-el").textContent = correctAns;

}

function subtract() {

    console.log('button is clicked')
    let correctAns = num1 - num2

    document.getElementById("sum-el").textContent = correctAns;

}

function divide() {
   
    console.log('button is clicked')
    let correctAns = num1 / num2

    document.getElementById("sum-el").textContent = correctAns;

}

function multiply() {

    console.log('button is clicked')

        //making the correct answer 
        let correctAns = num1 * num2;
        
        document.getElementById("sum-el").textContent = correctAns;

  } 

function userAns() {

     //getting the input value
     const userAns = inputEl.value;

     // If inputValue is Not a Number or less than one or greater than 10
     let text;

    // If inputValue is Not a Number or not equal to correctAns
    if (isNaN(inputEl) || userAns != correctAns) {
                
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
        
        document.getElementById("text").textContent = `${text}`;
        document.getElementById("score").textContent = `score: ${score}`;
        document.getElementById("sum-el").textContent = correctAns;
        updateLocalStorage()
}

function updateLocalStorage() {
    localStorage.setItem("score", JSON.stringify(score));

  }
