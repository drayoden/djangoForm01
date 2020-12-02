### django form test with fetch api
---
* transition from materialize to tailwindCSS:
  * npm stuff -> init, install tailwindcss
  * created project/src directories and added styles.css (source file)
  * destination will be form/static/css/styles.css
  * package.json -- create build script (buildcss):
    * `"buildcss": "tailwind build src/styles.css -o form/static/css/styles.css"`
  * tailwind.config.js -- create custom elements in here:
    * `npx tailwindcss init` -- can also use `npx tailwindcss init --full` -- this includes everything!
---
* form.FetchAPI -- see index.html -> form 'onsubmit', app.js -> formcontact.reset(). This seems to work but does not disable input elements or the submit button. It does display the innerHTML.







