exports.config = {

    suites: {
      smoke: [
        './features/sample.feature'
      ]
    },

    maxInstances: 10,

    sync: true,

    logLevel: 'silent',

    coloredLogs: true,

    bail: 0,

    screenshotPath: './errorShots/',

    baseUrl: '',

    waitforTimeout: 10000,

    connectionRetryTimeout: 60000,

    connectionRetryCount: 3,

    framework: 'cucumber',

    services: ['selenium-standalone'],

    cucumberOpts: {
      require: [
        './step_definitions/sample.stepDefinition.js'
      ],
      compiler: ['js:babel-core/register'],
      backtrace: true,   // <boolean> show full backtrace for errors
      dryRun: false,      // <boolean> invoke formatters without executing steps
      colors: true,       // <boolean> disable colors in formatter output
      snippets: true,     // <boolean> hide step definition snippets for pending steps
      timeout: 60000,     // <number> timeout for step definitions
      ignoreUndefinedDefinitions: false, // <boolean> Enable this config to treat undefined definitions as warnings.
    },

    onPrepare: function () {
      let fs = require('fs');
      if (!fs.existsSync(__dirname + '/reports/screenshots')) {
        if (!fs.existsSync(__dirname + '/reports')) {
          fs.mkdirSync(__dirname + '/reports');
        }
        fs.mkdirSync(__dirname + '/reports/screenshots');
      }
    },

    afterStep: function (step) {
      if (step.isFailed()) {
        const stepName = step.step.name;
        const featureName = step.step.scenario.feature.name;
        const screenShot = `./reports/screenshots/${Date.now()}-${featureName}-${stepName}.png`;
        console.log('Adding screenshot: ' + screenShot);
        browser.saveScreenshot(screenShot);
      }
    }
  };
