import {U8} from "./u8";

const a = new Uint8Array([10,20,30,40]);
const view = new DataView(a.buffer);
// a[0] = 11;
// console.log(view.getInt8(0,));
view.setUint8(0, 200, );
console.log(a.buffer)
console.log([...a]);
// const n = U8.init(a.buffer, 0);
// n.set(1);

// console.log(buf.buffer);
// console.log(n.get());

// const a1 = new Uint8Array([1,2,3,4,5,6,7,8]);
//
// // [1, 2, 3, 4, 5, 6, 7, 8]
// console.log([...a1]);
// console.log(a1.buffer);
//
// const a2 = new Uint16Array(a1.buffer);
//
// // [513, 1027, 1541, 2055]
// console.log([...a2]);
// console.log(a2.buffer);
//
// const a3 = new Uint32Array(a1.buffer);
//
// // [67305985, 134678021]
// console.log([...a3]);
// console.log(a3.buffer);
