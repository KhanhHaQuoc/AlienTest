const determineBtn = document.getElementById("determinebutton");
const defaultResultBox = document.getElementsByClassName("resultbox");

determineBtn.addEventListener("click", function () {    
  const defaultAns = document.getElementsByClassName("form-select");      
  const textResult = document.getElementById("text-result");


  const imgResult = document.getElementById("image-result")
 
  if (
    defaultAns[0].value == 2 &&
    defaultAns[1].value == 3 &&
    defaultAns[2].value == 1
  ) {
    textResult.textContent = "You're an alien";
    imgResult.setAttribute("src", "./assets/alien.png");
  } else if (
    defaultAns[0].value == 2 &&
    defaultAns[1].value == 1 &&
    defaultAns[2].value == 2
  ) {
    textResult.textContent = "You're bizarre";
    imgResult.setAttribute("src", "./assets/bizarre.jpg");
  } else {
    textResult.textContent = "You're normal";
    imgResult.setAttribute("src", "./assets/normal.jfif");
  }

  defaultResultBox[0].appendChild(textResult);
  defaultResultBox[0].appendChild(imgResult);
});