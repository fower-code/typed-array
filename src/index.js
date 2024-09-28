import {FixedAsciiString} from "./fixed-ascii-string.js";
import {Struct} from "./struct.js";
import {U8} from "./u8.js";
import {U16} from "./u16.js";
import {Tuple} from "./tuple";

// const a = new Uint8Array([10,20,30,40]);
// const fixed = FixedAsciiString(10).init(a.buffer, 0);
// fixed.set("hhhh");
// console.log(fixed.get());

export const Color = Tuple(U8, U8, U8);

const Person = new Struct({
	age: U8,
	id: U16,
	firstName: FixedAsciiString(8),
	secondName: FixedAsciiString(8),
	color: Color
});

// console.log(Person)

const bob = Person.create({
	age: 42,
	id: 531,
	firstName: "Bob",
	secondName: "Elton",
   color: [0xFF, 0x00, 0x00]
});

console.log(bob.color[0]);
console.log(bob.firstName, bob.color[0]);
console.log(bob.firstName, bob.secondName);
console.log(bob.age, bob.id)
console.log(bob.buffer)

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
