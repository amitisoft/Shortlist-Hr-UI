// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

exports.config = {

  allScriptsTimeout: 11000,
  getPageTimeout: 60000,
  specs: [
    './e2e/features/*.feature'
  ],
  capabilities: {
    'browserName': 'chrome'
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200/hrdashboard',
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  cucumberOpts: {
    compiler: "ts:ts-node/register",
    strict: true,
    format: ['pretty'],
    require: ['./e2e/**/*.e2e-spec.ts','./e2e/support/*.ts'],
    tags: '@Login or @CreateQuestion'
  },
  onPrepare: function() {
    browser.driver.manage().window().maximize();
  },
  beforeLaunch: function() {
    require('ts-node').register({
      project: 'e2e/tsconfig.e2e.json'
    });

  },

};
