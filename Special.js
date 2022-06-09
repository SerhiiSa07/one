function isSpecialNumber(n) {
  let c = String(n)
  const s = '012345';
    for (const i of c) {
      if(!s.includes(i)){
        return 'NOT!!'
      }
    }
    return 'Special!!'
}