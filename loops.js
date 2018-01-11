
  const array = [];

  function forLoop(array){

    for(let i = 0 ; i < 25 ; i++){
    if(i === 1){
    array.push('I am 1 strange loop.');
    }else {
      array.push(`I am ${i} strange loops.`);
    }
  } return array;
}

//TODO: Create a function called whileLoop in loops.js. The function should take a
// number as an argument. Using a while loop, count down (using console.log) from
//the passed in number to 0. Then return the string 'done'.

let n=100
function whileLoop(n){

while(n > 0){
  console.log(--n);
}

return 'done';
}


function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array){
do {
  array.pop();
} while (array.length > 0 && maybeTrue());
return array;
}
