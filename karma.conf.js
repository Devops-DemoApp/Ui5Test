module.exports = function (config) {

	config.set({

		logLevel: config.LOG_INFO,

		browserConsoleLogOptions: {
			level: 'info'
		},

		frameworks: ['ui5'],

		ui5: {
			url: 'http://localhost:5000',
			mode: 'html',
			testpage: 'webapp/test/integration/opaTests.qunit.html'
		},

		browsers: ['ChromeHeadless'],

		concurrency: 1,

		singleRun: true,

		browserNoActivityTimeout: 600000,

		proxyValidateSSL: false

	});
};