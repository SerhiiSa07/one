function checkNumber(number) {
    const result=[];
    if (number>0){
      result.push(true)
      }
    else
    {result.push(false)
    }
    if(number%2===0){result.push(true)}
    else{result.push(false)}
    if(number%10===0){result.push(true)}
    else {result.push(false)}
    return result;
}