import {Utilities} from "../../../utils/utilities";
import {TestManagerPage} from "../../../pages/testManager/test-manager.po";
const {defineSupportCode} = require('cucumber');
import {expect} from 'chai';
import {TableDefinition} from "cucumber";
import { $ } from 'protractor';
import { browser,protractor } from 'protractor';


//let chai = require('chai').use(require('chai-as-promised'));
//let expect = chai.expect;
import { ProtractorBrowser}from 'protractor';


defineSupportCode(function ({Given,When,Then}) {

      const testmanagerpage: TestManagerPage = new TestManagerPage();

        /*Given(/^I am on the Dashboarda page$/, () => {
          browser.sleep(10000);
        //   expect(browser.getTitle()).to.eventually.equal('AmitiOnlineTest');
          return testmanagerpage.waitHrDashboard();
        });*/

        When(/^I select the CREATE TEST button$/, () => {
          browser.driver.sleep(500);
          return testmanagerpage.clickTestManagerTab();

        //return expect(browser.getTitle()).to.eventually.equal('AmitiOnlineTest');
        });
        When(/^I Enter email field$/, () => {
          browser.sleep(10000);
          testmanagerpage.enterEmail("kiran@amitisoft.com")
          browser.sleep(20000);
          return browser.actions().sendKeys(protractor.Key.ENTER).perform().then(function (click) {
            testmanagerpage.clearEmailField();
            browser.sleep(10000);
            testmanagerpage.enterEmail("mahesh@amiti.in");
            browser.sleep(10000);
            return browser.actions().sendKeys(protractor.Key.ENTER).perform();
          });
         });
 /*   When(/^I verify$/, () => {
    browser.sleep(20000);

    return expect(testmanagerpage.selectselCat).to.eventually.equal('kiran@amitisoft.com');
  });*/

        When(/^I Enter Subject field$/, () => {

         return testmanagerpage.enterSubject("Online Examination");
         });

         When(/^I Enter Post Applied$/, () => {

          return testmanagerpage.selectCategoryDropdown();
         });

         When(/^I Click on Bold Button$/, () => {

          return testmanagerpage.clickBoldButton();
         });

         When(/^I Enter Mail Body field$/, () => {
            browser.sleep(10000);
          return testmanagerpage.enterMailBody("HI AM PRASHANTH\nhi this prashanth");

        });
          When(/^I Select Exam category$/, () => {
            testmanagerpage.enterCategory("java");
           browser.sleep(20000);
           return browser.actions().sendKeys(protractor.Key.ENTER).perform().then(function (click) {
             testmanagerpage.clearCategoryField();

             testmanagerpage.enterCategory("javascript");
            return browser.actions().sendKeys(protractor.Key.ENTER).perform()
            });

        });




})
