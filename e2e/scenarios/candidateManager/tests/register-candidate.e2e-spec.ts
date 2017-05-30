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

  Then(/^I verify the candidate "(.*?)" as "(.*?)"$/, (colunm,row) => {
    browser.sleep(10000);
    return candidateManagerPage.verifyCandidateTableRow(colunm,row);
  });

  Then(/^I verify the email "(.*?)"$/, (ab) => {

  });

  Then(/^I verify the mobileNo "(.*?)"$/, () => {
  });

  When(/^I type the candidate FirstName "(.*?)" in search field$/, () => {
  });

  Then(/^I verify the searched candidate "(.*?)"$/, () => {
  });

  When(/^I type the candidate LastName "(.*?)" in search field$/, () => {
  });

  Then(/^I verify the searched candidate "(.*?)"$/, () => {
  });

  When(/^I type the candidate email "(.*?)" in search field$/, () => {
  });

  Then(/^I verify the searched candidate "(.*?)"$/, () => {
  });

  When(/^I type the candidate phoneNumber "(.*?)" in search field$/, () => {
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






