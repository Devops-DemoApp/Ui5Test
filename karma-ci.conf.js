module.exports = function (config) {
	require("./karma.conf")(config)
	config.set({

		preprocessors: {

			"{webapp,webapp/!(test)}/*.js":["coverage"]"
			
			
		},

		coverageReporter: {
			includeAllSources: true,
			reporters: [{
					type: "html",
					dir: "coverage"
				}, {
					type: "text"
				}

			],
			checks: {
				each: {
					statement: 100,
					branches: 100,
					function: 100,
					Lines: 100
				}

			}
		},
		reporters: ["progress", "coverage"],

		browsers: ["ChromeHeadless"],
		singleRun: true
	});
};