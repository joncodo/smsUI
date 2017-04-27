"use strict";

const config = require("./config.json");

const koa = require("koa");
const serve = require("koa-static");
const Router = require("koa-router");
const fs = require("fs");

const routes = new Router();

const app = koa();

exports.app = app;

// Load a static HTML file
function loadHtml() {
	return new Promise((resolve, reject) => {
		fs.readFile("./dist/index.html", {
			"encoding": "utf8"
		}, (err, data) => {
			if (err) return reject(err);
			resolve(data);
		});
	});
};

if (process.env.NODE_ENV === "production") {
	routes.get(/^\/(.*)(?:\/|$)/, function* get(next) {
		this.body = yield loadHtml();
	});

	app.use(serve("./dist"));
}

// app.use(routes.middleware());

console.log(`${config.site.name} is now listening on port ${config.site.port}`);
app.listen(config.site.port);

process.on("SIGINT", function exit() {
	process.exit();
});
