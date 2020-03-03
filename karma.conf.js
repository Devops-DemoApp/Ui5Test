module.exports = function (config) {
	config.set({

		/*frameworks: ["ui5"],

		ui5: {
		  url: "https://openui5.hana.ondemand.com"
		},
		basePath: 'webapp',

		browsers: ["Chrome"]*/
		openui5: {
			path: 'https://openui5.hana.ondemand.com/1.65.1/resources/sap-ui-core.js'
		},

		client: {
			openui5: {
				tests: [
					'test/unit/allTests'
				],
				config: {
					language: 'EN',
					resourceroots: {
						'test': './base/test'
					}
				}
			}
		},

		basePath: 'webapp',

		frameworks: ['qunit', 'openui5'],

		files: [{
			pattern: '**',
			included: false,
			served: true,
			watched: true
		}]

	});

}