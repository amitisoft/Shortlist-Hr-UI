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

        Given(/^I am on the Test Manager Dashboard page$/, () => {
          browser.sleep(10000);
        //   expect(browser.getTitle()).to.eventually.equal('AmitiOnlineTest');
          return testmanagerpage.waitHrDashboard();
        });

        When(/^I select the CREATE TEST button$/, () => {
          browser.driver.sleep(500);
          return testmanagerpage.clickTestManagerTab();

        //return expect(browser.getTitle()).to.eventually.equal('AmitiOnlineTest');
        });
        When(/^I Enter email field$/, () => {
          browser.sleep(1000);
          testmanagerpage.enterEmail("kiran@amitisoft.com")
          browser.sleep(10000);
          return browser.actions().sendKeys(protractor.Key.ENTER).perform().then(function (click) {
            testmanagerpage.clearEmailField();
            browser.sleep(1000);
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

          browser.sleep(2000);

         return testmanagerpage.enterSubject("Online Examination");
         });

         When(/^I Enter Post Applied$/, () => {
           browser.sleep(2000);
          return testmanagerpage.selectCategoryDropdown();
         });

         When(/^I Click on Bold Button$/, () => {
           browser.sleep(2000);
          return testmanagerpage.clickBoldButton();
         });

         When(/^I Enter Mail Body field$/, () => {
            browser.sleep(10000);
          return testmanagerpage.enterMailBody("HI AM PRASHANTH\nhi this prashanth");

        });


          When(/^I verify bold$/, () => {
            browser.sleep(2000);
            return testmanagerpage.textboldVerify();

          });
          When(/^I Select Exam category$/, () => {
            browser.sleep(20000);
            return testmanagerpage.selectCategoryDrop();


        });
  Then(/^I verify category$/, () => {
    return browser.sleep(20000);
  })



})
