// getting element : button
const btn = document.querySelector('.button');

// score
let score = 0;
let number = 1;

// adding new div
const divAdd = function() {
  score++;
  // creating new div
  const newDiv = document.createElement('div');
  // numbering boxes
  newDiv.textContent = number;
  newDiv.classList.add("box");

  if (score % 6 == 0) {
// adding circle css style for div
    newDiv.classList.add("circle");
    score = 0;
  }

number++;
  // adding this element like last child : last on the list
  document.querySelector("#container").appendChild(newDiv);
}

//listing for click on button
btn.addEventListener("click", divAdd);
