import {Utilities} from '../../../utils/utilities';
import {CandidateManagerPage} from "../../../pages/candidateManager/candidate-manager.po";
import {expect} from 'chai';
import {browser} from 'protractor';
import {TableDefinition} from 'cucumber'

const {defineSupportCode } = require('cucumber');

defineSupportCode(function ({Before,Given,When,Then,setDefaultTimeout}) {

  let candidateManagerPage: CandidateManagerPage = new CandidateManagerPage();
  let utils: Utilities = new Utilities();

  setDefaultTimeout(10 * 10000);

  When(/^I click on register candidate button$/, () => {
    return candidateManagerPage.selectRegisterCandidate();
  });

  When(/^I add firstname "(.*?)"$/, (fName) => {
    return candidateManagerPage.enterCandidateFName(fName);
  });

  When(/^I add lastname "(.*?)"$/, (LName) => {
    return candidateManagerPage.enterCandidateLName(LName);
  });

  When(/^I add email "(.*?)"$/, (email) => {
    candidateManagerPage.clearEmail();
    return candidateManagerPage.enterCandidateEmail(email);
  });

  When(/^I add mobile number "(.*?)"$/, (mobNo) => {
    return candidateManagerPage.enterCandidateMobileNo(mobNo);
  });

  When(/^I click register button$/, () => {
    return candidateManagerPage.clickRegisterButton();
  });

  Then(/^I verify Register button is disabled$/, () => {
    return candidateManagerPage.checkRegisterButtonEnabled().then(function(isEnabled){
      expect(isEnabled).to.be.false;
    })
  });

  Then(/^I verify Register button is enabled$/, () => {
    candidateManagerPage.checkRegisterButtonEnabled().then(function(isEnabled){
      return expect(isEnabled).to.be.true;
    });
  });

  Then(/^I verify the candidateName "(.*?)"$/, (name) => {
    return browser.sleep(10000).then(function () {
      candidateManagerPage.clickResetButton().then(function () {
        browser.sleep(5000);
        candidateManagerPage.verifyCandidateNameIsPresent(name);
      });
    });
  });

  Then(/^I verify the email "(.*?)"$/, (email) => {
    return candidateManagerPage.verifyCandidateEmailIsPresent(email);
  });

  Then(/^I verify the mobileNo "(.*?)"$/, (no) => {
    return candidateManagerPage.verifyCandidatePhNoIsPresent(no);
  });

  When(/^I type the candidate FirstName "(.*?)" and search$/, (searchFName) => {
    return candidateManagerPage.clickResetButton().then(function () {
      candidateManagerPage.enterSearchFName(searchFName).then(function () {
        candidateManagerPage.clickSearchButton();
      });
    });
  });

  Then(/^I verify the searched candidate "(.*?)"$/, (name) => {
    browser.sleep(5000);
    return candidateManagerPage.verifyCandidateNameIsPresent(name);
  });

  When(/^I type the candidate LastName "(.*?)" and search$/, (searchLName) => {
    return candidateManagerPage.clickResetButton().then(function () {
      candidateManagerPage.enterSearchLName(searchLName).then(function () {
        candidateManagerPage.clickSearchButton();
      });
    });
  });

  When(/^I type the candidate email "(.*?)" and search$/, (eMail) => {
    return candidateManagerPage.clickResetButton().then(function () {
      candidateManagerPage.enterSearchEmail(eMail).then(function () {
        candidateManagerPage.clickSearchButton();
      });
    });
  });


  When(/^I type the candidate phoneNumber "(.*?)" and search$/, (phNo) => {
    return candidateManagerPage.clickResetButton().then(function () {
      candidateManagerPage.enterSearchPhNo(phNo).then(function () {
        candidateManagerPage.clickSearchButton();
      });
    });
  });

  When(/^I click edit for candidate$/, () => {
    browser.sleep(6000);
    return candidateManagerPage.clickCandidateEditButton();
  });

  Then(/^I verify the candidate firstname "(.*?)"$/, (fName) => {
    browser.sleep(6000);
    return candidateManagerPage.getFName().then(function (data) {
      expect(data).to.equal(fName);
    });
  });

  Then(/^I verify the candidate lastname "(.*?)"$/, (lName) => {
    return candidateManagerPage.getLName().then(function (data) {
      expect(data).to.equal(lName);
    });
  });

  Then(/^I verify the candidate email "(.*?)"$/, (email) => {
    return candidateManagerPage.getEmail().then(function (data) {
      expect(data).to.equal(email);
    });
  });

  Then(/^I verify the candidate PhoneNumber "(.*?)"$/, (phNo) => {
    return candidateManagerPage.getPhNo().then(function (data) {
      expect(data).to.equal(phNo);
    });
  });

  When(/^I change the candidate phoneNumber "(.*?)"$/, (phNo) => {
    candidateManagerPage.clearPhNo();
    return candidateManagerPage.enterCandidateMobileNo(phNo);
  });

  When(/^I change the candidate email "(.*?)"$/, (email) => {
    candidateManagerPage.clearEmail();
    return candidateManagerPage.enterCandidateEmail(email);
  });

  When(/^I change the candidate LastName "(.*?)"$/, (lName) => {
    candidateManagerPage.clearLName();
    return candidateManagerPage.enterCandidateLName(lName);
  });

  When(/^I verify the data of Rajni/, (cTable: TableDefinition ) => {
    browser.sleep(6000);
    let rowData = cTable.rowsHash();
    return candidateManagerPage.verifyCandidateNameIsPresent(rowData['fName']+" "+rowData['lName']).then(function () {
      candidateManagerPage.verifyCandidateEmailIsPresent(rowData['email']).then(function() {
        candidateManagerPage.verifyCandidatePhNoIsPresent(rowData['phNo']);
      });
    });
  });

  Then(/^I click update button$/, () => {
    return candidateManagerPage.clickUpdateButton();
  });

  When(/^I click cancel button$/, () => {
    return candidateManagerPage.clickCancelButton();
  });

  When(/^I refresh the page$/, () => {
    return candidateManagerPage.clickResetButton().then(function () {
      browser.sleep(4000);
      candidateManagerPage.clickSearchButton();
    });
  });

  When(/^I click firstname field$/, () => {
    return candidateManagerPage.clickFNameField();
  });

  When(/^I click lastname field$/, () => {
    return candidateManagerPage.clickLNameField();
  });

  When(/^I click email field$/, () => {
    return candidateManagerPage.clickEmailField();
  });

  When(/^I click phno field$/, () => {
    return candidateManagerPage.clickMobileNoField();
  });

  Then(/^I verify the fname field error text "(.*)"$/, (fName) => {
    return candidateManagerPage.getFNameFieldError().then(function (data) {
      expect(data).to.equal(fName);
    });
  });

  Then(/^I verify the lname field error text "(.*)"$/, (lName) => {
    return candidateManagerPage.getLNameFieldError().then(function (data) {
      expect(data).to.equal(lName);
    });
  });

  Then(/^I verify the email field error text "(.*)"$/, (email) => {
    return candidateManagerPage.getEmailFieldError().then(function (data) {
      expect(data).to.equal(email);
    });
  });

  Then(/^I verify the mobileNo field error text "(.*)"$/, (mobNo) => {
    return candidateManagerPage.getMobNoFieldError().then(function (data) {
      expect(data).to.equal(mobNo);
    });
  });

  Then(/^I verify mobile number error is not present$/, () => {
    return candidateManagerPage.checkMobNoFieldError().then(function (isPresent) {
      expect(isPresent).to.equal(false);
    });
  });

  Then(/^I verify email error text is not present$/, () => {
    return candidateManagerPage.checkEmailFieldError().then(function (isPresent) {
      expect(isPresent).to.equal(false);
    });
  });

  Then(/^pause$/, () => {
    browser.pause();
    return browser.pause();
  });

});






