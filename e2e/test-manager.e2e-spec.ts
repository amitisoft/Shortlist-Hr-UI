import { browser,protractor} from 'protractor/built/index';
import {TestManagerSteps} from "./steps/testManager.steps";

import { defineSupportCode } from 'cucumber';
import {TestManagerPage} from "./pages/test-manager.po";

//let chai = require('chai').use(require('chai-as-promised'));
//let expect = chai.expect;
import { ProtractorBrowser}from 'protractor';


defineSupportCode(function ({Given,When,Then}) {

      const testmanagersteps: TestManagerSteps = new TestManagerSteps();

        Given(/^I am on the Dashboard page$/, () => {
          browser.sleep(10000);
          return testmanagersteps.waitForHrDashboard();
        });

        When(/^I select the CREATE TEST button$/, () => {
          browser.driver.sleep(500);
          return testmanagersteps.clickTestManger();

        //return expect(browser.getTitle()).to.eventually.equal('AmitiOnlineTest');
        });
        When(/^I Enter email field$/, () => {
          browser.sleep(10000);
          testmanagersteps.enterEmail("kiran@amitisoft.com")
          browser.sleep(20000);
          return browser.actions().sendKeys(protractor.Key.ENTER).perform().then(function (click) {
            testmanagersteps.clearEmail();
            browser.sleep(10000);
            testmanagersteps.enterEmail("mahesh@amiti.in");
            browser.sleep(10000);
            return browser.actions().sendKeys(protractor.Key.ENTER).perform();
          });
         });

        When(/^I Enter Subject field$/, () => {

         return testmanagersteps.enterSubject("Online Examination");
         });

         When(/^I Enter Post Applied$/, () => {

          return testmanagersteps.enterSelectCategory();
         });

         When(/^I Click on Bold Button$/, () => {

          return testmanagersteps.clickBoldButtonMail();
         });

         When(/^I Enter Mail Body field$/, () => {
            browser.sleep(10000);
          return testmanagersteps.enterMailText("HI AM PRASHANTH\nhi this prashanth");

        });
          When(/^I Select Exam category$/, () => {
           browser.sleep(10000);

           testmanagersteps.enterCategoryText("java");
           browser.sleep(20000);
           return browser.actions().sendKeys(protractor.Key.ENTER).perform().then(function (click) {
            testmanagersteps.clearCategory();
            browser.sleep(10000);
            testmanagersteps.enterCategoryText("javascript");
            return browser.actions().sendKeys(protractor.Key.ENTER).perform()
            });

        });

          When(/^I verify$/, () => {

           return browser.sleep(10000);

        });

})
