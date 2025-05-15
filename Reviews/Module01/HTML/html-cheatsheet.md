# Ultimate Beginner HTML Cheat Sheet

Forget the fluff—this is the real-deal HTML crash course for people who’ve never touched code. Every term is explained. Every symbol is broken down. No assumptions, no skipping. Just straight-up clarity.

---

## 1. What is HTML?

**Plain talk:** HTML stands for *HyperText Markup Language*. It's a way to describe what goes on a webpage—like titles, paragraphs, images, and links. You’re not “programming,” you’re labeling stuff.

---

## 2. The Basic Layout (aka Skeleton)

Every HTML document starts with the same bones. Here’s the structure:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My Page</title>
  </head>
  <body>
    <p>Hello, world!</p>
  </body>
</html>
```

### What everything means:

* `<!DOCTYPE html>` – This line tells the browser, “Hey, this is HTML5.”
* `<html>` – This is the wrapper for the entire page. Everything goes inside.
* `<head>` – This section holds settings and info the user doesn’t see (like the title in the browser tab).
* `<title>` – This is the text that shows up in the browser tab.
* `<body>` – This is the visible part. Stuff users actually read or click on.

---

## 3. What is a Tag?

**A tag is a keyword inside angle brackets** like `<p>` or `<h1>`. Tags are instructions to the browser.

### Tags usually come in pairs:

```html
<p>This is a paragraph.</p>
```

* `<p>` – Opening tag. It starts the paragraph.
* `</p>` – Closing tag. It ends the paragraph. The `/` means "stop doing this thing."

### Some tags don’t close (called “self-closing” or “void” tags):

```html
<img src="dog.jpg" alt="dog">  <!-- no closing tag needed -->
<br> <!-- line break -->
```

---

## 4. Attributes = Extra Info for a Tag

Attributes live inside the opening tag and give more info.

```html
<a href="https://google.com" target="_blank">Visit Google</a>
```

### Breakdown:

* `<a>` – This is the tag. It means "make a link."
* `href` – Stands for *hyperlink reference*. It’s the URL you’re linking to.
* `"https://google.com"` – The actual web address.
* `target="_blank"` – This means “open the link in a new tab.”

### Format:

```html
<tag attribute="value">Content</tag>
```

Spaces separate attributes. The `=` connects name and value. Quotes go around the value.

---

## 5. Headings & Paragraphs

Use headings to organize your content.

```html
<h1>Main Heading</h1>
<h2>Sub Heading</h2>
<p>This is a paragraph of text.</p>
```

* `<h1>` to `<h6>` – Big to small headings.
* `<p>` – Paragraph. Always use for chunks of text.

---

## 6. Text Styling Tags

| Tag        | Meaning                     |
| ---------- | --------------------------- |
| `<strong>` | Bold text (important stuff) |
| `<em>`     | Italic text (emphasis)      |
| `<br>`     | Line break (start new line) |
| `<hr>`     | Horizontal line (divider)   |

Example:

```html
<p>This is <strong>bold</strong> and <em>italic</em>.</p>
<p>Line one<br>Line two</p>
<hr>
```

---

## 7. Links (Click Me Stuff)

```html
<a href="https://youtube.com">Go to YouTube</a>
```

* `<a>` – Anchor tag. Makes the link.
* `href` – The destination URL.

---

## 8. Images (Show a Picture)

```html
<img src="cat.jpg" alt="A cute cat" width="300">
```

* `<img>` – Shows an image.
* `src` – Source: the image file path.
* `alt` – Description of the image (shows if image fails, and helps screen readers).
* `width` – How wide (in pixels).

---

## 9. Lists (Bullet Points & Numbering)

### Bullet List (unordered)

```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
```

### Numbered List (ordered)

```html
<ol>
  <li>Step 1</li>
  <li>Step 2</li>
</ol>
```

* `<ul>` – Unordered list (bullets).
* `<ol>` – Ordered list (numbers).
* `<li>` – List item.

---

## 10. Tables (Grid Data)

```html
<table>
  <tr>
    <th>Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Chris</td>
    <td>28</td>
  </tr>
</table>
```

* `<table>` – Starts the table.
* `<tr>` – Table row.
* `<th>` – Table header cell (bold).
* `<td>` – Table data cell (normal).

---

## 11. Forms (User Input)

```html
<form action="/submit" method="post">
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required>
  <button type="submit">Submit</button>
</form>
```

* `<form>` – The container. `action` is where the data goes. `method` is how it sends ("post" hides data, "get" shows it in URL).
* `<label>` – Text label for input.
* `<input>` – Where user types. `type` defines what kind (text, email, password, etc).
* `<button>` – Click to submit.

---

## 12. Comments (Notes You Can See in the Code Only)

```html
<!-- This is a comment -->
```

* Anything inside `<!--` and `-->` gets ignored by the browser.
* Use it to make notes or temporarily hide code.

---

## 13. Special Characters (aka Entities)

Sometimes you need symbols that HTML uses. Use these:

| You Want | Write This | Shows As |
| -------- | ---------- | -------- |
| <        | `&lt;`     | <        |
| >        | `&gt;`     | >        |
| &        | `&amp;`    | &        |
| Space    | `&nbsp;`   |          |

---

## 14. Real-World Tips

* Always close your tags.
* Use quotes for attribute values.
* Use `alt` on images—helps accessibility.
* Indent your code—makes it readable.
* Start with simple examples. Break them, fix them.

---

## Done Reading?

Start writing. Use a free tool like [CodePen](https://codepen.io) or just save an `.html` file and open it in your browser.
