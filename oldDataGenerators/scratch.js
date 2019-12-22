const testWrite = (count) => {
  let strTotal = '';
  for(let i = 0; i < count; i++) {
    let tempStr = '';
    for(let z = 0; z < 100; z++) {
      tempStr += '0';
    }
    strTotal += tempStr + '\n';
  }
};

console.time('250k');
test = testWrite(400000);
console.timeEnd('250k');
