### TypeScript Basics for Beginners (Delivered Through an Angular Component)

This is your very first coding experience. You’re here to learn TypeScript from absolute zero. Angular is just the tool we’re using to display what you write — it’s the delivery truck, not the message.

This lesson teaches you:

* What variables are and how to use them
* What types are: `string`, `number`, `boolean`
* How arrays (lists) work and how to loop through them
* What objects are and how to use them
* How to write functions
* What interfaces are and why they matter
* Basic Angular concepts like components, templates, interpolation, loops, and more

Every single line of code is explained. Every keyword, every symbol, every dot and bracket. No fluff, no skipping.

---

## Step 1: Start a New Angular Project

Open the terminal in Visual Studio Code. This is where you type commands to tell Angular what to do.

Type:

```bash
ng new product-viewer
```

Let’s break this down:

* `ng` is the Angular CLI. It’s a tool for building Angular apps.
* `new` tells it you want to create a new project.
* `product-viewer` is the name you’re giving this new app.

You’ll get two prompts:

1. **Add Angular routing?** Pick **No** (we’re not jumping between pages yet).
2. **Stylesheet format?** Choose **CSS** (the most basic one).

Then move into your new project folder:

```bash
cd product-viewer
```

* `cd` stands for "change directory". It’s like double-clicking a folder.

Now start the app:

```bash
ng serve
```

What does this do?

* `serve` tells Angular to compile your code and start a web server.
* It builds your app and makes it available on your local computer.
* You can now view it in a browser at:

```
http://localhost:4200
```

If you see the Angular welcome screen, it’s working.

---

## Step 2: Create a New Angular Component

In Angular, a **component** is a building block. Think of it like a section of your page: a product card, a search box, a button.

Type this:

```bash
ng generate component product
```

Let’s break this down:

* `generate` means "create something new"
* `component` is the type of thing to create
* `product` is the name of your new component

Angular will make 4 files:

* `.ts` (TypeScript logic)
* `.html` (HTML layout)
* `.css` (optional styling)
* `.spec.ts` (test file — ignore for now)

Now you need to show this component in the app.

### Use ProductComponent in AppComponent

1. Open `src/app/app.component.ts`. You're going to edit this file so that it knows how to use the new `ProductComponent` you just created. Right now, the file only defines the root component. We're going to import your new component and tell Angular to show it on the screen by adding it to the list of components being used.

```ts
import { Component } from '@angular/core';
import { ProductComponent } from './product/product.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {}
```

2. Open `src/app/app.component.html`. This is the layout file for the root component. We're going to insert the HTML tag `<app-product>` here, which tells Angular to display the ProductComponent you created earlier.

```html
<app-product></app-product>
```

This tells Angular: "insert the product component here."

3. Open `src/main.ts`. This file is the main entry point for your Angular app. It tells Angular which component to load first when the application starts. We’re going to update it to load the AppComponent (which now includes the ProductComponent inside it).

```ts
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent)
  .catch(err => console.error(err));
```

This launches the app by bootstrapping `AppComponent`.

---

## Step 3: Display a Message

Open `src/app/product/product.component.ts`. Replace the content with:

```ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html'
})
export class ProductComponent {
  title: string = 'Welcome to TypeScript!';
}
```

Explanation:

* `title: string = '...'` — we’re declaring a **variable** named `title`. It’s a `string` (text), and its value is set to 'Welcome to TypeScript!'
* `templateUrl` tells Angular where to find the HTML that should go with this component

Now open `product.component.html`. Type:

```html
<h1>{{ title }}</h1>
```

* `{{ title }}` is called **interpolation**. Angular reads this, finds the `title` variable, and inserts its value into the HTML.

Open your browser. You’ll see: **Welcome to TypeScript!**

---

## Step 4: Variables and Types

Make sure you're working in `src/app/product/product.component.ts`.

Locate the line inside the `ProductComponent` class where you declared the `title` variable earlier. Just below that line — still inside the class, \*\*but not inside any function like \*\*`** or **` — you are going to add three new variables.

Back in `product.component.ts`, add this below `title`:

```ts
productName: string = 'Super Widget';
price: number = 49.99;
available: boolean = true;
```

Let’s break this down:

* `productName` is a variable name
* `:` means "type of data this will hold"
* `string` means text
* `number` is for digits (with or without decimals)
* `boolean` is true/false — like a light switch
* `=` means you are assigning a value to the variable

Update the HTML:

```html
<p>Product: {{ productName }}</p>
<p>Price: ${{ price }}</p>
<p>Available: {{ available }}</p>
```

You should now see all 3 values show up.

---

## Step 5: Functions

Before we do loops, we need to understand how to write a function.

Keep working in `product.component.ts`. You’re now going to define a new function inside the `ProductComponent` class, but **not inside the constructor or another function.** This new function will generate and return a greeting message.

Keep working in `product.component.ts`. You’re now going to define a new function inside the `ProductComponent` class, but **not inside the constructor or another function.** This new function will generate and return a greeting message.

A **function** is a reusable block of code that performs a task. Think of it like a recipe: it takes some input (called **parameters**), does something with it, and gives you a result (called a **return value**).

Here's how we write a function in TypeScript:

```ts
getGreeting(name: string): string {
  return `Hello, ${name}!`;
}
```

Let’s break it down:

* `getGreeting` is the **function name**. You can name functions whatever you want, as long as it follows standard naming rules (no spaces, must start with a letter, etc).
* `(name: string)` is the **parameter list**:

  * `name` is the parameter (input variable).
  * `: string` after `name` tells TypeScript that this input must be a text value (a string).
* `: string` after the parentheses tells TypeScript that this function will return a string.
* Inside the curly braces `{ ... }` is the **function body** — this is where the work happens.
* `return` is a keyword that ends the function and sends back the result.
* `` `Hello, ${name}!` `` is a **template string** — this lets us insert a variable into a sentence.

So when we run `getGreeting('World')`, it will return the string `Hello, World!`.

To use this function in the HTML, write:

```html
<p>{{ getGreeting('World') }}</p>
```

Angular will call the function and replace the `{{ }}` with its result — so the browser will show: **Hello, World!**

Try changing the name and reloading to see the new message. You can also add more functions and experiment!

Functions are reusable blocks of code.

In `.ts`:

```ts
getGreeting(name: string): string {
  return `Hello, ${name}!`;
}
```

Explanation:

* `name: string` is a parameter — a value passed into the function
* `: string` after the parentheses means it returns a string
* `return` gives back the result
* `` `Hello, ${name}` `` is a template string — lets you embed variables in text

In HTML:

```html
<p>{{ getGreeting('World') }}</p>
```

This will say: **Hello, World!**

---

## Step 6: Arrays (Lists)

Stay in `product.component.ts`. You will now define another variable inside the `ProductComponent` class — again, not inside any function.

Add this directly below the variables you created in Step 4.

We’ve worked with individual values like strings and numbers. But what if you want to group several items together — like a list of product names? That’s what an **array** is for.

In `product.component.ts`, add this new variable:

```ts
products: string[] = ['Super Widget', 'Mega Gadget', 'Ultra Gizmo'];
```

What this means:

* `products` is the name of the variable
* `string[]` means this is an array of strings — a list where each item is a text value
* The `=` assigns the array value to the variable
* The array is defined with square brackets `[]`, and inside the brackets are items separated by commas

Now let’s show that list in the HTML. Open `product.component.html` and add this:

```html
<h2>Product List</h2>
<ul>
  <li *ngFor="let product of products">{{ product }}</li>
</ul>
```

Let’s explain what’s going on:

* `<ul>` is an unordered list in HTML
* `<li>` is a list item
* `*ngFor="let product of products"` is Angular’s way of saying: “loop through the array named `products`, and for each item, temporarily name it `product` and repeat this line of HTML.”
* `let product` declares a temporary variable inside the loop
* `of products` means we're looping through the `products` array
* `{{ product }}` prints the value of each product in the list

When you reload the browser, Angular will render the list by repeating the `<li>` element for each product in the `products` array.

The page will show a bulleted list like this:

* Super Widget
* Mega Gadget
* Ultra Gizmo

Each item from the array appears as its own bullet point. This is the result of Angular's `*ngFor` directive dynamically generating those `<li>` elements from the array.

---

## Step 7: Loops (For Loop)

In this step, we’re going to reuse what you learned in Step 5 about arrays and Step 5 about functions to create a new function that fills an array with numbers using a loop. Make sure you're working inside the `ProductComponent` class in `product.component.ts`, but **not inside the constructor or another function**.

We're still in the `product.component.ts` file. Now we’ll use a loop to generate a list of numbers.

⚠️ IMPORTANT: You must write the loop logic inside a function that you define inside the `ProductComponent` class. This prevents placing it in the wrong place like directly in the constructor or outside the class.

A loop is a way to repeat a block of code multiple times. In this case, we want to automatically create a list of numbers from 1 to 5 without typing each one manually. That’s what a **for loop** is used for.

Inside the `ProductComponent` class, add a new function named `generateNumbers()`. This is where we'll place the for loop logic to fill the array. Also, define the `numbers` variable near the top of the class.

```ts
numbers: number[] = [];
```

Now, inside the new `generateNumbers()` function you just defined, add this loop:

```ts
for (let i = 1; i <= 5; i++) {
  this.numbers.push(i);
}
```

Explanation:

* `numbers: number[] = []` creates an empty array that can only hold numbers.
* `for` is the keyword that starts a loop.
* `let i = 1` creates a new variable `i` and starts it at 1.
* `i <= 5` means keep running the loop as long as `i` is less than or equal to 5.
* `i++` adds 1 to `i` after each loop.
* `this.numbers.push(i)` adds the current value of `i` to the numbers array.

After this loop, `numbers` contains \[1, 2, 3, 4, 5].

Now let's display those numbers. In your HTML (`product.component.html`):

```html
<h2>Numbers</h2>
<ul>
  <li *ngFor="let n of numbers">Number: {{ n }}</li>
</ul>
```

Explanation:

* `<ul>` is an unordered list.
* `<li>` creates each bullet item in the list.
* `*ngFor="let n of numbers"` loops through each item in `numbers`.
* `let n` makes a temporary variable for each item.
* `{{ n }}` inserts the current value into the HTML.

You’ll now see a list that looks like:

* Number: 1
* Number: 2
* Number: 3
* Number: 4
* Number: 5

This shows how a for loop can generate a list, and how Angular can render it with `*ngFor`.

In your TypeScript file:

```ts
numbers: number[] = [];

generateNumbers(): void {
  for (let i = 1; i <= 5; i++) {
    this.numbers.push(i);
  }
}

constructor() {
  this.generateNumbers();
}
```

Explanation:

* `numbers` is an empty array to start
* `constructor()` runs once when the component is created
* `for (let i = 1; i <= 5; i++)` is a loop:

  * `let i = 1` — start with i = 1
  * `i <= 5` — keep looping as long as i is 5 or less
  * `i++` — add 1 to i every time
* `this.numbers.push(i)` — add the current number to the list

HTML:

```html
<h2>Numbers</h2>
<ul>
  <li *ngFor="let n of numbers">Number: {{ n }}</li>
</ul>
```

---

## Step 8: Objects

Still in the `product.component.ts` file, we’ll define a new variable named `singleProduct` inside the `ProductComponent` class — again, **not inside any function or constructor**. This variable will be an object, meaning it will hold several related values all together.

An object is a way to group related pieces of data together. Think of it like a real-world item — for example, a product in a store. A product has a name, a price, and maybe a stock status. We want to store all that information in a single variable, and that’s what an object lets us do.

In programming, an object uses curly braces `{}` and stores values as key-value pairs. Each key is like a label, and each value is the data that goes with that label.

In your `.ts` file, let’s define one object:

```ts
singleProduct = {
  name: 'Giga Widget',
  price: 199.99,
  inStock: true
};
```

Explanation:

* `singleProduct` is the name of our variable
* The `{}` means this is an object
* Inside, we have three entries (also called properties or fields):

  * `name: 'Giga Widget'` means the `name` property has the string value `'Giga Widget'`
  * `price: 199.99` sets the `price` to a number
  * `inStock: true` sets the availability to a boolean value `true`

This structure lets us store all the info about one product in one place.

Now to display this on the screen, open `product.component.html` and add:

```html
<p>{{ singleProduct.name }}</p>
<p>{{ singleProduct.price }}</p>
<p>{{ singleProduct.inStock }}</p>
```

Explanation:

* `{{ singleProduct.name }}` means: go into the `singleProduct` object and show the value of its `name` field
* Same for `price` and `inStock`

You should now see all three values appear in the browser — this shows how objects group values and how Angular accesses those values using the dot `.` notation.

An object is a collection of related values.

In your `.ts` file:

```ts
singleProduct = {
  name: 'Giga Widget',
  price: 199.99,
  inStock: true
};
```

Explanation:

* An object uses `{}` to wrap multiple key-value pairs
* Each key (like `name`) is followed by `:` and a value

In HTML:

```html
<p>{{ singleProduct.name }}</p>
<p>{{ singleProduct.price }}</p>
<p>{{ singleProduct.inStock }}</p>
```

This accesses each value from the object.

---

## Step 9: Interfaces (Blueprints for Objects)

You’re still in `product.component.ts`. Near the very top of the file — before the `@Component` decorator — you are going to define an `interface`. Interfaces should always be declared outside the class because they describe structure — not logic.

Before we dive in, let’s understand the difference between an **object** and an **interface**.

An **object** is a structure that holds actual data. Think of it like a filled-out form. It has values inside it.

An **interface**, on the other hand, is like the empty form itself — a **blueprint** or a **contract** that says what kind of fields the object must have, and what types those fields must be. It does not hold any values. It just says: “Here’s what a proper product should look like.”

Interfaces help keep your code clean and predictable by making sure every object follows a certain structure. They’re especially helpful when working with lists of data.

Let’s get more organized. Objects are flexible, but if you're not careful, you might forget to include some values or make mistakes — like writing `prize` instead of `price`. This is where **interfaces** come in.

An **interface** defines the exact shape of an object. It’s like a form that must be filled out correctly.

Add this near the top of your TypeScript file:

```ts
interface Product {
  name: string;
  price: number;
  inStock: boolean;
}
```

Explanation:

* `interface` is a keyword that creates a structure
* `Product` is the name we’re giving to this structure
* Inside the curly braces `{}`, we define what fields an object of type `Product` must have
* Each field has a name (like `name`) and a type (like `string`)

Now use this interface to define a list of products:

```ts
productList: Product[] = [
  { name: 'Mini Widget', price: 10, inStock: true },
  { name: 'Pro Widget', price: 200, inStock: false }
];
```

Explanation:

* `productList` is a variable
* `Product[]` means it’s an array where each item must match the `Product` interface
* Each object inside the array must have all the fields from the interface: `name`, `price`, and `inStock`

Why this matters:

* If you accidentally skip a field or write something in the wrong type, TypeScript will immediately show an error
* This helps prevent bugs and keeps your data consistent

In your HTML file, let’s loop through this list and show the info:

```html
<h2>Product List</h2>
<ul>
  <li *ngFor="let item of productList">
    {{ item.name }} - ${{ item.price }} -
    <span *ngIf="item.inStock">In Stock</span>
    <span *ngIf="!item.inStock">Out of Stock</span>
  </li>
</ul>
```

Explanation:

* `*ngFor` repeats the `<li>` for each item in the `productList` array
* `{{ item.name }}` prints the name from each product object
* `*ngIf` is used to conditionally show one of two messages based on whether `item.inStock` is true or false

---

## You Did It

You learned:

* How to create and run an Angular app
* Every major TypeScript building block
* How Angular templates work
* How to bind variables, loop through lists, and build UI from logic

Now go break it. Change things. Experiment. That’s how you actually learn.

## Must Study

TypeScript review for JS developers:

  * https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html
