import {FixedAsciiString} from "./fixed-ascii-string.js";
import {Struct} from "./struct.js";
import {U8} from "./u8.js";
import {U16} from "./u16.js";

// const a = new Uint8Array([10,20,30,40]);
// const fixed = FixedAsciiString(10).init(a.buffer, 0);
// fixed.set("hhhh");
// console.log(fixed.get());

const Person = new Struct({
	age: U8,
	id: U16,
	firstName: FixedAsciiString(8),
	secondName: FixedAsciiString(8),
});

console.log(Person)

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
