let Btn = document.querySelector("#submit");
Btn.addEventListener('click',pop);
Btn.addEventListener('click',showText);
function pop(){
  alert('You Signed in Successfully');
}
function showText(){
  Btn.textContent = "You signed in";
  Btn.setAttribute('disabled',false);
}