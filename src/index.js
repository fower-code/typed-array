const a1 = new Uint8Array([1,2,3,4]);

console.log(a1);
console.log([...a1]);
console.log(a1.buffer);

const a2 = new Uint8Array(a1.buffer, 2, 1);

console.log(a2);
console.log([...a2]);
console.log(a2.buffer);
