(function () {
	var isClient = typeof window !== "undefined";
	System.config({
		map: {
			"jquery/jquery": "jquery",
			"can/util/util": "can/util/jquery/jquery",
			"benchmark/benchmark": "benchmark",
			"mustache": "can/view/mustache/system",
			"prettify/prettify": "prettify"
		},
		paths: {
			"jquery": isClient ? "jquery/dist/jquery.js" : "../../../../node_modules/jquery/dist/jquery.js",
			"can/*": isClient ? "can/*.js" : "../../../../node_modules/can/*.js",
			"jqueryui" : "lib/jquery-ui.1.10.3.js",
			"moment": "lib/moment.js",
			"grayscale": "lib/grayscale.js",
			"prettify": "prettify.js"
		},
		meta: {
			jquery: { exports: "jQuery" },
			"jqueryui": {deps: ["jquery"]},
			moment: { exports: "moment"},
			prettify: {format: "global"},
			"grayscale" : {format: "global", deps: ["jquery"]},
			"lib/scrollbox" : {format: "global", deps: ["jquery"]}
		},
		ext: {
			ejs: "can/view/ejs/system",
			mustache: "can/view/mustache/system",
			stache: "can/view/stache/system"
		}
	});
})();

System.buildConfig = {
	map: {"can/util/util" : "can/util/domless/domless"}
};
