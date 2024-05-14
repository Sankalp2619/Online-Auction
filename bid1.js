let Bid = document.querySelector("#box5bbtn1");
Bid.addEventListener('click',inputEntry1);

function inputEntry1(){
    let en1 = prompt("Enter your bidding amount: ");
    alert("Your bidding amount has been saved!");
    let en2 = prompt("Enter your bidding amount: ")


    
    if (en1>en2){
    
        Bid.textContent = "Last Bid at ₹"+en1;
    
        alert("You have done with the bidding😍");
    
        // Btn.setAttribute("disabled",false);
    
    }
    
    else if(en1<en2){
    
        Bid.textContent = "Last Bid at ₹"+en2;
    
        alert("You have done with the bidding😍");
    
        // Btn.setAttribute("disabled",false);
    
    }
    
    else{
    
        alert("This price has been bidded already");
    
    }
}