Here’s the no‑bullshit way to get Bootstrap styling into your Angular 19 app without an `npm install`:

1. **Drop the CDN link in your `index.html`**
   Open `src/index.html` and in the `<head>` add:

   ```html
   <link
     href="https://cdn.jsdelivr.net/npm/bootstrap@5.4.3/dist/css/bootstrap.min.css"
     rel="stylesheet"
     integrity="sha384-XXXXXXXXXXXXX"
     crossorigin="anonymous"
   />
   ```

   That gives you all of Bootstrap’s CSS instantly.

2. **(Optional) Add Bootstrap JS/poppers**
   If you need any of Bootstrap’s JavaScript plugins (dropdowns, modals, tooltips), slap these right before your closing `</body>` tag:

   ```html
   <script
     src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
     integrity="sha384-YYYYYYYYYYYYY"
     crossorigin="anonymous"
   ></script>
   <script
     src="https://cdn.jsdelivr.net/npm/bootstrap@5.4.3/dist/js/bootstrap.min.js"
     integrity="sha384-ZZZZZZZZZZZZZ"
     crossorigin="anonymous"
   ></script>
   ```

3. **Use the classes in your components**
   No special imports or Angular modules—just drop Bootstrap classes in your templates:

   ```html
   <button class="btn btn-primary">Click me</button>
   ```

4. **(Advanced) Overriding Bootstrap variables**
   If you want to tweak Bootstrap’s SASS variables without installing it via NPM, you’ll need to download the Bootstrap source SCSS files manually into your `src/assets` (or whatever) and then configure your `angular.json` to include them in the “styles” array. But that’s more work than just `npm install bootstrap`, so unless you really have a vendetta against NPM, stick with the CDN.

That’s it. CDN in `index.html`, use the classes, done. No `npm i bootstrap`, no headaches.
