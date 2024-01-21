let score = "33abc"

// console.log(typeof score)
// console.log(typeof(score))

let valueInNumber = Number(score)
// console.log(typeof valueInNumber)
// console.log(valueInNumber)



// *******************OPERATIONS***********************
let number = 10
let isNumber = -number
// console.log(isNumber);

// console.log("Addition",2+3);
// console.log(2-3);
// console.log(2*3);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);


let str = "hello "
let str1 = "how r u"

let str2 = str + str1

// console.log(str2);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");
// console.log(3+2*4/1%5);
// console.log((3+2)*4/1%5);


// INCREMENT
let x = 3;
const y = x++;

// console.log(`x:${x}, y:${y}`);

let a = 3;
const b = ++a;

// console.log(`a:${a}, b:${b}`);

let name = "kittens";
if (name == "puppies") {
  name += " woof";
} else if (name == "kittens") {
  name += " meow";
} else {
  name += "!";
}
//name === "kittens meow";
console.log(name);