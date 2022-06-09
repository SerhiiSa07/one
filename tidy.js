function isTidy(number) {
    let c = String(number);
    if(c.length === 1){
      return true;
    }
    for (let i = 1; i < c.length; i++){
      if (c[i]<c[i - 1]){
        return false;
      }
    }
    return true;
  }
