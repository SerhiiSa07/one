function getArraysSum(arr1, arr2) {
    if (arr1.length === 0){
      return 0;
    }
     let sum1 = 0;
     let sum2 = 0;
     let result = 0;

   for(let i = 0; i < arr1.length; i++){
     sum1 += arr1[i];
   }
   for (let i =0; i < arr2.length; i++){
     sum2 += arr2[i];
   }
   result = sum1 + sum2;
   return result;
 }