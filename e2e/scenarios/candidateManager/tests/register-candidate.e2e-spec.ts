import {Utilities} from '../../../utils/utilities';
import {CandidateManagerPage} from "../../../pages/candidateManager/candidate-manager.po";
import {expect} from 'chai';
import {browser} from 'protractor';

const {defineSupportCode} = require('cucumber');

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
    return candidateManagerPage.enterCandidateEmail(email);
  });

  When(/^I add mobile number "(.*?)"$/, (mobNo) => {
    return candidateManagerPage.enterCandidateMobileNo(mobNo);
  });

  When(/^I add address "(.*?)"$/, (adress) => {
    return candidateManagerPage.enterCandidateAddress(adress);
  });

  When(/^I click register button$/, () => {
    return candidateManagerPage.clickRegisterButton();
  });

  Then(/^I verify Register button is disabled$/, () => {
    candidateManagerPage.checkRegisterButtonEnabled().then(function(isEnabled){
      return expect(isEnabled).to.be.false;
    })
  });

  Then(/^I verify Register button is enabled$/, () => {
    candidateManagerPage.checkRegisterButtonEnabled().then(function(isEnabled){
      return expect(isEnabled).to.be.true;
    });
  });

  Then(/^I verify the candidateName "(.*?)"$/, (name) => {
    browser.sleep(10000);
    return candidateManagerPage.verifyCandidateTableName(name);
  });

  Then(/^I verify the email "(.*?)"$/, (email) => {
    return candidateManagerPage.verifyCandidateTableEmail(email);
  });

  Then(/^I verify the mobileNo "(.*?)"$/, (no) => {
    return candidateManagerPage.verifyCandidateTablePhNo(no);
  });

  When(/^I type the candidate FirstName "(.*?)" and search$/, (searchFName) => {
    candidateManagerPage.enterSearchFName(searchFName);
    return candidateManagerPage.clickSearchButton();
  });

  Then(/^I verify the searched candidate "(.*?)"$/, (name) => {
    browser.sleep(6000);
    candidateManagerPage.verifyCandidateTableName(name);
    return candidateManagerPage.clickSearchResetButton();
  });

  When(/^I type the candidate LastName "(.*?)" and search$/, (searchLName) => {
    candidateManagerPage.enterSearchLName(searchLName);
    return candidateManagerPage.clickSearchButton();
  });

  When(/^I type the candidate email "(.*?)" and search$/, (eMail) => {
    candidateManagerPage.enterSearchEmail(eMail);
    return candidateManagerPage.clickSearchButton();
  });

  When(/^I type the candidate phoneNumber "(.*?)" and search$/, (phNo) => {
    candidateManagerPage.enterSearchPhNo(phNo);
    return candidateManagerPage.clickSearchButton();
  });

  When(/^I click edit for candidate$/, () => {
    browser.sleep(5000);
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

  Then(/^I verify the candidate adress is empty$/, () => {
    return candidateManagerPage.getAdress().then(function (data) {
      expect(data).to.be.empty;
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

  When(/^I verify the updated data of candidate$/, () => {
  });

  When(/^I click candidate data tab$/, () => {
    return candidateManagerPage.selectCandidateDashBoard();
  });

  Then(/^I click update button$/, () => {
    return candidateManagerPage.clickUpdateButton();
  });

});






