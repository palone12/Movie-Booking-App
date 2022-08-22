let count = -1;
function change() {
  count = count + 1;
  const seat = document.querySelectorAll(".seat");
  // if(seat.style.backgroundColor="green"){
  //     seat.style.backgroundColor = "red";
  // }
  const value = document.getElementById("");
  for (let i = 0; i < seat.length; i++) {
    seat[i].addEventListener("click", () => {
      seat[i].style.backgroundColor = "red";
      
    });
  }
  console.log(count);
}
const booking = document.querySelector(".seat-booking");
let isShow = true;
function hide() {
  if (isShow) {
    booking.style.display = "none";
    isShow = false;
  } else {
    booking.style.display = "block";
    isShow = true;
  }
}

function bookNow(){
    const btn =document.getElementById("btn")
     const confirm = document.getElementById("confirm-bookig");
     const div = document.createElement("div");
     const email = document.createElement('input');
     const phone =document.createElement('input');
     const textEmail = document.createTextNode('Email');
     const textphone = document.createTextNode('Phone');
     const button =document.createElement('button');
     button.innerHTML="Confirm"
     
     div.appendChild(textEmail);
     div.appendChild(email);
     div.appendChild(textphone);
     div.appendChild(phone);
     div.appendChild(button);
     
     confirm.append(div);

     div.style.margin='50px';
     
     confirm.removeChild(btn);
     const price = count*100;
     const display =document.createTextNode(`Your total is ${price}`)
     div.appendChild(display)
     button.addEventListener(()=>{
        const msg =document.createTextNode("Your booking was succesfull");
        confirm.append(msg);
        confirm.remove(div)
     })


     
}
