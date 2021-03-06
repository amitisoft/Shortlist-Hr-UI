exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './e2e/scenarios/*/features/*.feature'
  ],
  capabilities: {
    'browserName': 'chrome'
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  cucumberOpts: {
    compiler: "ts:ts-node/register",
    strict: true,
    format: ['pretty'],
    require: ['./e2e/scenarios/*/tests/*.e2e-spec.ts'],
   // tags: '@Login or @CreateQuestion'
  },
  onPrepare: function() {
    browser.driver.manage().window().maximize();
  }
};
