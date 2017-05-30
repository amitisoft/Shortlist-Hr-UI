import {Utilities} from '../../../utils/utilities';
import {CadidateManagerPage} from "../../../pages/candidateManager/candidate-manager.po";
import {expect} from 'chai';
import {browser} from 'protractor';

const {defineSupportCode} = require('cucumber');

defineSupportCode(function ({Before,Given,When,Then,setDefaultTimeout}) {

  let cadidateManagerPage: CadidateManagerPage = new CadidateManagerPage();
  let utils: Utilities = new Utilities();

  setDefaultTimeout(10 * 10000);

  When(/^I click on register candidate button$/, () => {
    return cadidateManagerPage.selectRegisterCandidate();
  });

  When(/^I add firstname "(.*?)"$/, (fName) => {
    return cadidateManagerPage.enterCandidateFName(fName);
  });

  When(/^I add lastname "(.*?)"$/, (LName) => {
    return cadidateManagerPage.enterCandidateLName(LName);
  });

  When(/^I add email "(.*?)"$/, (email) => {
    return cadidateManagerPage.enterCandidateEmail(email);
  });

  When(/^I add mobile number "(.*?)"$/, (mobNo) => {
    return cadidateManagerPage.enterCandidateMobileNo(mobNo);
  });

  When(/^I add address "(.*?)"$/, (adress) => {
    return cadidateManagerPage.enterCandidateAddress(adress);
  });

  When(/^I click register button$/, () => {
    return cadidateManagerPage.clickRegisterButton();
  });

  Then(/^I verify Register button is disabled$/, () => {
    cadidateManagerPage.checkRegisterButtonEnabled().then(function(isEnabled){
      return expect(isEnabled).to.be.false;
    })
  });

  Then(/^I verify Register button is enabled$/, () => {
    cadidateManagerPage.checkRegisterButtonEnabled().then(function(isEnabled){
      return expect(isEnabled).to.be.true;
    })
  });

  Then(/^I verify the candidate Name "(.*?)"$/, (str) => {
    browser.sleep(10000);
    return utils.getTableRowIndex("//amiti-hr-dashboard/div/amiti-cadidatedata/div[2]/div[2]/amiti-listdata/div[2]/div/div/table",1,"Rajni kanth").then(
      function(val){
        console.log("value",val);
      });
  });

  Then(/^I verify the email "(.*?)"$/, () => {
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






