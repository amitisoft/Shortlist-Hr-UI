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
    })
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

  When(/^I type the candidate FirstName "(.*?)" in search field$/, (searchFName) => {
    candidateManagerPage.enterSearchFName(searchFName);
    return candidateManagerPage.clickSearchButton();
  });

  Then(/^I verify the searched candidate "(.*?)"$/, (name) => {
    browser.sleep(10000);
    candidateManagerPage.verifyCandidateTableName(name);
    return candidateManagerPage.selectCandidateDashBoard();
  });

  When(/^I type the candidate LastName "(.*?)" in search field$/, (searchLName) => {
    candidateManagerPage.enterSearchLName(searchLName);
    return candidateManagerPage.clickSearchButton();
  });

  When(/^I type the candidate email "(.*?)" in search field$/, (eMail) => {
    candidateManagerPage.enterSearchEmail(eMail);
    return candidateManagerPage.clickSearchButton();
  });

  When(/^I type the candidate phoneNumber "(.*?)" in search field$/, (phNo) => {
    candidateManagerPage.enterSearchPhNo(phNo);
    return candidateManagerPage.clickSearchButton();
  });

  When(/^I click edit for candidate "(.*?)"$/, () => {
  });

  Then(/^I verify the candidate firstname "(.*?)"$/, () => {
  });

  Then(/^I verify the candidate lastname "(.*?)"$/, () => {
  });

  Then(/^I verify the candidate email "(.*?)"$/, () => {
  });

  Then(/^I verify the candidate PhoneNumber "(.*?)"$/, () => {
  });

  Then(/^I verify the candidate adress is empty$/, () => {
  });

  When(/^I change the candidate phoneNumber "(.*?)"$/, () => {
  });

  When(/^I change the candidate email "(.*?)"$/, () => {
  });

  When(/^I change the candidate LastName "(.*?)"$/, () => {
  });

  When(/^I click register button$/, () => {
  });

  When(/^I click candidate data tab$/, () => {
  });

  When(/^I verify the updated data of candidate$/, () => {
  });




});






