//sets const with a random number in it 
  //Math.ceil() method rounds a number rounded UP to the nearest integer.
    //Math.random() * 10 Return a random number between 0 and 10:
let num1 = Math.ceil(Math.random() * 10)
let num2 = Math.ceil(Math.random() * 10)

let questionEl = document.getElementById("question");
let inputEl = document.getElementById("input");

//manipulating the question element
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
    let correctAns = num1 * num2;
        
    document.getElementById("sum-el").textContent = correctAns;

  } 

  //----------------------------------------------------------------
  const formEl = document.getElementById("form");
  const scoreEl = document.getElementById("score");

  let score = JSON.parse(localStorage.getItem("score"));

  if (!score) {
    score = 0;
    
  }

  scoreEl.textContent = `score: ${score}`;


  formEl.addEventListener("submit", () => {
      //making the correct answer 
      const add = num1 + num2;
      const subtract = num1 - num2;
      const divide = num1 / num2;
      const multiply = num1 * num2;


     //getting the input value and make it a stringify
     const userAns =  +inputEl.value;
     let text;

    // If inputValue is qual to correctAns
    if (userAns === add || userAns === subtract 
        || userAns === divide || userAns === multiply) {
            
            text =  " correct !  🎉";
            document.getElementById("text").style.color = "green";
            document.getElementById("text").textContent = `${text}`;

            score++;
            
            

            updateLocalStorage()
            
    } else {

            text = "Input is wrong";
            document.getElementById("text").style.color = "red";
            document.getElementById("text").textContent = `${text}`;

            score--;
            
            updateLocalStorage()
    }
    updateLocalStorage()
})

function updateLocalStorage() {
    localStorage.setItem("score", JSON.stringify(score));
  
    scoreEl.textContent = `score: ${score}`;
  }
