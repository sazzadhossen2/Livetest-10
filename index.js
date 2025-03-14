//1
for(let i =1;i<=20;i++){
  if(i%2 !==0){
    console.log(i)
  }
}


//2

function sumArray(arr){
  return arr.reduce((sum,num)=>sum+num,0);
}
console.log(`sum : ${sumArray([1,2,3,4])}`);


//3
function  mergeArrays(arr1, arr2) {
  return arr1.concat(arr2)
}

console.log(`mergeArrays : ${mergeArrays([1,2,3,4],[5,6,7,8])}`);