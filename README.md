# Express Template

This template is a living, breathing organism. It will be improved upon over time, in an effort to reduce the amount of time to MVP when working with Express. 

### Custom features:

- None (yet!)

## Getting Started

1. Fork the project.
2. Clone the project to your local machine.
3. Run the `npm install` command to install the necessary dependencies. 
4. Run the `npm start` command to start the server. The app can then be viewed in your browser, at [`localhost:3000`](localhost:3000)

If you're new to Express, skip down to the bottom of the README for a TL;DR of the docs and getting started.

### Dependencies

- [Cookie Parser](https://www.npmjs.com/package/cookie-parser): `~1.4.4`
- [Debug](https://www.npmjs.com/package/debug): `~2.6.9`
- [EJS](https://www.npmjs.com/package/ejs) `~2.6.1`
- [Express](https://www.npmjs.com/package/express): `~4.16.1`
- [HTTP Errors](https://www.npmjs.com/package/http-errors): `~1.6.3`
- [Morgan](https://www.npmjs.com/package/morgan): `~1.9.1`

### Dev Dependencies

## Project Roadmap
Planned features to add to the template:

- Navigation
- Footer
- Authentication (without database integration)
- 

### Contributing

1. Fork the project
2. Create your Feature Branch `git checkout -b feature/AmazingNewFeature`
3. Commit your Changes `git commit -m 'Add some AmazingNewFeature'`
4. Push to the Branch `git push origin feature/AmazingNewFeature`
5. Open a Pull Request

### Acknowledgements

---
## New to Express? Get the TL;DR
This project doubles as a perfect sandbox for newer developers. Since it can be challenging to put all the pieces together without knowing what you're looking for, this readme is intentionally verbose. That said, this project assumes some basic knowledge of HTML, CSS, and JavaScript, and of course, reading the docs is never a bad idea either. 

* Skim the EJS GitHub [readme](https://github.com/tj/ejs#ejs), and have a look at the [guide](https://expressjs.com/en/guide/routing.html) on Expressjs.com.

### Views
Views are essentially your pages. The routes, like `index.js`, in the `routes/` directory (along with `app.js`) are responsible for serving up those pages. 

In `routes/index.js` you can see the following route:

```
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
```

The `router.get('/)` portion represents a `GET` request to the `app.js` server. The server's response (`res`) is to `render` the `index` `view`, which is the `views/index.ejs` file.

### Partials
Throughout the app, you'll see partial templates, like `_header`, that are injected into other templates, like `index.ejs`. Representing a partial in a template looks like this: `<%- include('partials/_header') %>` Learn more about partials in the [EJS docs - #Includes](https://github.com/tj/ejs#includes).

These partials go beyond injecting a header alone. Use them to keep your views clean and readable. 

### `templateVars`
When a template, like `index.ejs`, is rendered, you can pass variables to the template. `templateVars` are used to get data from the back-end of your app, to the front-end.

Using the same example again, the template is being passed an object (`{ title: 'Express'}`) as a variable.

```
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
```

With this variable being passed in, the object will be available within the `index.ejs` template. For example, `<p>Welcome to <%= title %></p>` will render as `<p>Welcome to Express</p>`

In case you haven't come across those funky `<%=` `%>` braces, they're unique to Express, and you can learn more about them in this [Stack Overflow](https://stackoverflow.com/questions/48522768/the-difference-between-and-in-ejs) question. Bear in mind, if you're writing multi-line JS in an `.ejs` file, you'll need to start and finish each individual line with those special EJS braces. 