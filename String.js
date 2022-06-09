function splitString(str) {
    const arrayString = [];
    let iString = str;

    if (str.length % 2 === 1){
      iString = `${str}_`
    }
    console.log(iString)

    for (let i = 0; i < iString.length; i++){
      arrayString.push(iString[i] + iString[++i])
    }
    return arrayString
  }