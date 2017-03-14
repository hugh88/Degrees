const Matrix = require("matrix-js");

let A = Matrix([
    [1,1,0,1,0],
    [1,0,1,0,0],
    [0,1,0,0,0],
    [1,0,0,0,1],
    [0,0,0,1,0]
]);
//Code here
function degree(mtrx,v){
let sum = 0;
let degreelist = mtrx(v-1);
 for(x=0;x<degreelist.length;x++){
   sum = sum + degreelist[x];
}
return sum;

function degreecentrality(mtrx,v){
  let neighbor = mtrx.size().pop(0) - 1;
  return degree(mtrx,v)/neighbor;

}

//Challenge

//Run test code with ctrl+shift+p  then type in "script"
console.log(degree(A,3));
console.log(degreecentrality(A,2));
