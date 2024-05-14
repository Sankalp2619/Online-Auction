let Btn = document.querySelector('#btn');
Btn.addEventListener('click',popUp);
Btn.addEventListener('click',inputMsg);

function popUp(){
    alert('You logged in Successfully');
}
function inputMsg(){
    let name = prompt('Enter your name');
    Btn.textContent = name + " Logged in";
    Btn.setAttribute('disabled',false);
}
// Btn.addEventListener('click',inputMsg);

// function inputMsg(){
//     let name = prompt('Enter the name of Student');
//     Btn.textContent = name + "Logged in successfuly";
// }



var time = prompt("Hey What's the time: ");
if (time>0 && time<12){
    alert("Good morning!");
}
else if(time>12 && time<17){
    alert("Good afternoon!");
} 
else if(time>17 && time<25){
    alert("Good Evening!");
}
else{
    alert("Good Night");
}
