// document.addEventListener("DOMContentLoaded", () => {


// });

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const arr = [5,6,1,4,3,9,2,5,6,9,8,3,7,1,207,99,652,45,31,256,789,100]

function sorting(arr){
  let tempI = 0
  let tempJ = 0 
  for(let i = 0 ; i < arr.length; i++){
    for(let j = 0; j < arr.length; j++){
      if(arr[i] < arr[j]){
        tempI = arr[i]
        tempJ = arr[j]
        arr[j] = tempI
        arr[i] = tempJ 
      }
    }
  }
  return arr
}

function selectionSort(arr) {
  for(let i = 0; i < arr.length; i++){    
  let temp = arr[i]
	let smallest = i;
    for (let j = i+1; j < arr.length; j++){
      if(arr[j] < arr[smallest]){
        smallest = j
      }     
    }
    arr[i] = arr[smallest]
    arr[smallest] = temp   
  }
  return arr
}

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort(array) {
	if (array.length === 1) {
		return array;
	}
	// Split Array in into right and left

	return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {}

const answer = mergeSort(numbers);
console.log(answer);

console.log(sorting(arr));

console.log(selectionSort(arr));
