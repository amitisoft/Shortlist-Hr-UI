// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

exports.config = {

  allScriptsTimeout: 60000,
  getPageTimeout: 90000,
  specs: [
   // './e2e/features/hr-login.feature',
    './e2e/features/*.feature',
  //'./e2e/features/test-manager.feature'
  ],
  capabilities: {
    'browserName': 'chrome',
    //shardTestFiles: true,
  //  maxInstances: 2
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  cucumberOpts: {
    compiler: "ts:ts-node/register",
    strict: true,
    format: ['pretty'],
    //require: ['./e2e/**/hr-login.e2e-spec.ts'],
    require: ['./e2e/**/*.e2e-spec.ts','./e2e/support/*.ts'],
    tags: '@Login or @CreateTest'
    //tags: '@CreateTest'
  },
  onPrepare: function() {
    browser.ignoreSynchronization = true;
    browser.driver.manage().window().maximize();
  },
  beforeLaunch: function() {
    require('ts-node').register({
      project: 'e2e/tsconfig.e2e.json'
    });

  },

};
