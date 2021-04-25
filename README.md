# Step Counter
Step Counter is a simple step counter interface, built with [Express.js](https://expressjs.com/), and [D3.js](https://d3js.org/). 

The data behind the counter is currently static, however it could be quickly adapted to use live data. The barchart (representing number of steps taken each hour), and the circles (the number of steps taken each day) are created dynamically using D3. The purpose of this project is to gain familiarity with D3, therefore, it is heavily commented. 

![https://github.com/sandypockets/step-counter-d3/blob/main/docs/demo-screenshot.png?raw=true](https://github.com/sandypockets/step-counter-d3/blob/main/docs/demo-screenshot.png?raw=true)

## Getting Started

1. Fork and clone the repository
2. From the directory root, run `npm install`
3. Run the `npm start` command to start the server. The Step Counter can then be viewed in your browser, at [`localhost:3000`](http://localhost:3000)

## Dependencies
D3 is included in the `public/scripts/` directory. Only EJS related dependencies require installation. 

- [Cookie Parser](https://www.npmjs.com/package/cookie-parser): `~1.4.4`
- [Debug](https://www.npmjs.com/package/debug): `~2.6.9`
- [EJS](https://www.npmjs.com/package/ejs) `~2.6.1`
- [Express](https://www.npmjs.com/package/express): `~4.16.1`
- [HTTP Errors](https://www.npmjs.com/package/http-errors): `~1.6.3`
- [Morgan](https://www.npmjs.com/package/morgan): `~1.9.1`

## Contributing

1. Fork the project and clone it to you local machine
2. Create your Feature Branch `git checkout -b feature/AmazingNewFeature`
3. Commit your Changes `git commit -m 'Add some AmazingNewFeature'`
4. Push to the Branch `git push origin feature/AmazingNewFeature`
5. Open a Pull Request