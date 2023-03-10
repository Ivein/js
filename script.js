const Stroka = "Это строка";
console.log(32 + "43" + 1);
const Arr = [
  "Барт очень хотел этого",
  "Ноутбук с новым процессором",
  "Комп с новой видяхой",
  "Телефон тянет Genshin ААААА мама я в раю!",
  "Тебе до конца жизни не нужно больше работать ураа(нет)",
];

for (let i = 0; i < Arr.length; i++) {
  console.log(Arr[i]);
}
console.log(undefined == undefined);

let range = {
  from: 1,
  to: 5,
};

range[Symbol.iterator] = function () {
  return {
    current: this.from,
    last: this.to,

    next() {
      if (this.current <= this.last) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    },
  };
};

for (let n of range) {
  console.log(n);
}

let str = "Hello";

let Iterator = str[Symbol.iterator]();

while (true) {
  let result = Iterator.next();
  if (result.done) break;
  console.log(result.value);
}

let TypoArr = {
  0: "Bart",
  1: "Lysa",
  2: "Marge",
  3: "Homer",
  length: 4,
};

let TryeArr = Array.from(TypoArr);

console.log(TryeArr.shift());

let Daddy = new Map();

Daddy.set("Derek", 1).set(true, "Вход разрешен").set(false, "Вход запрешен");
console.log(Daddy.get("Derek"));
console.log(Daddy.delete("Derek"));
console.log(Daddy.has("Derek"));
console.log(Daddy.get(true));
Daddy.set(NaN, "Вот это магия");
console.log(Daddy.get(false));
console.log(Daddy.entries());

let ThisObject = {
  Vampire: 1,
  Balder: 2,
  Vertigo: 3,
  banchi: 4,
  Banchi: 123456,
  New: 1212,
};
console.log(ThisObject.Banchi);

let NewMap = new Map(Object.entries(ThisObject));

console.log(NewMap);

let New_Arrr = Object.fromEntries(NewMap.entries());
console.log(New_Arrr);
console.log(New_Arrr.Vampire);

let ger = new Set();

ger.add(321);
let PereborV = Object.entries(ThisObject);
console.log(PereborV);

let Solarys = {
  Jey: 300,
  Rafik: 200,
  Buba: 0,
  Zerno: 3000,
};

function sumSalaries(salaries) {
  let result = [];
  for (let value of Object.values(salaries)) {
    result.push(value);
  }
  let result2 = result.map((i) => (x += i), (x = 0)).reverse()[0];
  if (result2 !== false) {
    return result2;
  } else {
    return 0;
  }
}

sumSalaries(Solarys);
function sum(numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
let numbers = [];
console.log(sum(numbers));
let number = [31, 31, 341, 1, 4, 1];

console.log(number.reduce((a, b) => a + b, 0));
