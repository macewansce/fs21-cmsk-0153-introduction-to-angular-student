
## 1. Comments

**What it is:** Notes in your code that JavaScript ignores. Use them to explain what’s going on.

* `//` starts a single‑line comment.
* `/* ... */` wraps a multi‑line comment.

**Symbols:**

* `//` means “ignore this line from here on.”
* `/*` opens, `*/` closes. Everything in between is skipped.

```js
// This is a one‑line comment

/*
  This is a 
  multi‑line comment
*/
```

---

## 2. Variables

**What it is:** Containers for storing data you want to use later.

**Types of declarations:**

* `let` – you can change its value later.
* `const` – constant; once set, it can’t change.
* `var` – old way; avoid it until you know hoisting.

**Syntax breakdown (`let x = 5;`):**

* `let` – keyword to create a variable you can reassign.
* `x` – your variable’s name (identifier).
* `=` – assignment operator (sets value).
* `5` – the value you’re storing.
* `;` – semicolon: end of statement (you can also skip it, but better to include).

**Example:**

```js
let name = "Alice";    // name holds the text Alice
const pi = 3.14;       // pi will always be 3.14
// var oldVar = true; // don’t use var unless you know why
```

---

## 3. Data Types

**What it is:** The kind of data stored in variables.

| Type      | Description             | Example           |
| --------- | ----------------------- | ----------------- |
| String    | Text, wrapped in quotes | `"hello"`, `'a'`  |
| Number    | Any number              | `42`, `3.1415`    |
| Boolean   | true or false           | `true`, `false`   |
| Null      | “Nothing”               | `null`            |
| Undefined | Not set yet             | `undefined`       |
| Object    | Collection of key/value | `{ name: "Bob" }` |
| Array     | Ordered list            | `[1, 2, 3]`       |

**Symbols explained:**

* `"` or `'` – wrap text (string).
* `{ }` – object container.
* `:` separates a key from its value inside objects.
* `,` separates items in arrays or properties in objects.
* `[ ]` – array container.

**Example:**

```js
let message = "Hi there";      // String
let count = 10;                // Number
let isOpen = false;            // Boolean
let nothing = null;            // Null
let notDefined;                // Undefined (no value yet)
let user = {                   // Object
  id: 1,                       // id key, value 1
  name: "Charlie"              // name key, value "Charlie"
};
let list = [ "a", "b", "c" ];  // Array of strings
```

---

## 4. Operators

**What it is:** Symbols that perform actions on values.

* **Math:** `+` (add), `-` (subtract), `*` (multiply), `/` (divide), `%` (remainder)
* **Assignment:** `=` (set), `+=` (add then set), `-=` (subtract then set), etc.
* **Comparison:** `==` vs `===`, `!=` vs `!==`, `>`, `<`, `>=`, `<=`

  * `==` checks value only, `===` checks value + type (use this).
* **Logical:** `&&` (and), `||` (or), `!` (not)

**Example:**

```js
let a = 5 + 3;     // 8
a += 2;            // now a is 10
let ok = (a === 10) && (a % 2 === 0); // true
```

---

## 5. Conditionals (If‑Else)

**What it is:** Make decisions in your code.

**Syntax breakdown:**

```js
if (condition) {      // condition goes in parentheses
  // run this block if true
} else if (other) {   // optional extra check
  // run this if other is true
} else {              // optional “fallback”
  // run this if none of the above
}
```

* `( )` around the condition.
* `{ }` wrap the code block to run.
* `else if` and `else` are optional.

**Example:**

```js
let temp = 30;
if (temp > 25) {
  console.log("It's hot!");
} else if (temp < 10) {
  console.log("Brr, it's cold!");
} else {
  console.log("Nice weather.");
}
```

---

## 6. Loops

**What it is:** Repeat code multiple times.

### for‑loop

```js
for (let i = 0; i < 5; i++) {
  // repeat this block 5 times
}
```

* `i = 0` – start value.
* `i < 5` – keep going while true.
* `i++` – after each run, add 1 to i (`++` is shorthand for `i = i + 1`).

### while‑loop

```js
while (condition) {
  // run as long as condition is true
}
```

### do‑while

```js
do {
  // always run this at least once
} while (condition);
```

**Example (for):**

```js
for (let i = 1; i <= 3; i++) {
  console.log("Count:", i);
}
// Output:
// Count: 1
// Count: 2
// Count: 3
```

---

## 7. Functions

**What it is:** Reusable blocks of code you call by name.

**Declaration syntax:**

```js
function greet(name) {     // name in parentheses is a parameter
  console.log("Hey, " + name + "!");
}
```

* `function` – keyword to declare.
* `greet` – function name.
* `(name)` – parameters (inputs).
* `{ }` – code block.

**Calling a function:**

```js
greet("Dana");             // runs the code, prints "Hey, Dana!"
```

**Arrow function (shorter):**

```js
const add = (x, y) => {
  return x + y;
};
```

* `=>` means “does this.”
* `return` sends a value back.

**Example:**

```js
function square(n) {
  return n * n;    // returns the result of n times n
}

const result = square(4); // result is 16
```

---

## 8. Arrays

**What it is:** Ordered lists of values.

**Basic syntax:**

```js
let fruits = ["apple", "banana", "cherry"];
```

* `[` starts, `]` closes.
* Items separated by `,`.
* Access by index: `fruits[0]` is `"apple"` (indexes start at 0).

**Common methods:**

* `.push(item)` – add to end.
* `.pop()` – remove last.
* `.shift()` – remove first.
* `.unshift(item)` – add to front.

**Example:**

```js
let nums = [1, 2, 3];
nums.push(4);      // nums is now [1,2,3,4]
let first = nums.shift(); // first = 1, nums is [2,3,4]
```

---

## 9. Objects

**What it is:** Collections of key/value pairs, like a mini‑database.

**Syntax:**

```js
let car = {
  make: "Toyota",
  model: "Camry",
  year: 2020
};
```

* `{` opens, `}` closes.
* `key: value` pairs.
* Pairs separated by `,`.

**Accessing:**

* Dot notation: `car.make` → `"Toyota"`.
* Bracket notation: `car["year"]` → `2020`.

**Example:**

```js
car.color = "blue";          // adds a new key/value
console.log(car.model);      // prints "Camry"
delete car.year;             // removes the year property
```

---

## 10. Putting It Together

```js
// 1. Declare
const user = { name: "Jess", age: 25 };

// 2. Function
function birthday(person) {
  person.age += 1;           // use += to add 1
  console.log(person.name + " is now " + person.age);
}

// 3. Loop through an array
const guests = ["Alice", "Bob", "Jess"];
for (let i = 0; i < guests.length; i++) {
  greet(guests[i]);          // reuse that greet function
}

// 4. Branching
if (user.age >= 18) {
  console.log("Access granted");
} else {
  console.log("Not old enough");
}
```

---

### Tips for zero‑experience coders

* **Syntax matters.** Missing a `{`, `;`, or `)` can break everything.
* **Indent your code.** Makes it way easier to read.
* **Play around.** Break stuff on purpose and see the error—helps you learn.

