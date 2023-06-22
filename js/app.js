/* SELECT ELEMENTS */
const $ = document;
const userInput = $.querySelector(".username-input");
const userInputMaxLength = userInput.getAttribute('maxlength');

userInput.addEventListener('keyup',function(){
  /* show number of maxlength */
  userInput.nextElementSibling.innerHTML = userInputMaxLength - userInput.value.length;
  /* change color of maxlength and @ sign */
  if(userInput.value){
    userInput.nextElementSibling.classList.add('active-color');
    userInput.previousElementSibling.classList.add('active-color')
  }else{
    userInput.nextElementSibling.classList.remove('active-color');
    userInput.previousElementSibling.classList.remove('active-color');
  }
})

/* change color of border in focus and blur state */
userInput.addEventListener('focus',function(){
  userInput.parentElement.classList.add('focused-filed')
})
userInput.addEventListener('blur',function(){
  userInput.parentElement.classList.remove('focused-filed')
})