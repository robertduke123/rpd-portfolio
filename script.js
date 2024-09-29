// document.addEventListener("DOMContentLoaded", () => {


// });

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

let counter = 0
let sum = 0

function fibanatchiRecurcion(num) {  
  if(num < 2){
    return num
  }

  return fibanatchiRecurcion(num-1) + fibanatchiRecurcion(num-2)  
}

console.log(fibanatchiRecurcion(6));


function fibanatchiIterative(num) {
  let first = 0
  let second = 1
  if(num === 0){
    return first
  } else if(num <= 2){
    return second
  }
  let sum
	for(let i = 2; i <= num; i++){
    sum = first + second
    first = second
    second = sum
  }
  return sum
}


ffff
// console.log(fibanatchiIterative(7))
