import {Utilities} from '../../../utils/utilities';
import {CadidateManagerPage} from "../../../pages/candidateManager/candidate-manager.po";
import {expect} from 'chai';
import {browser} from 'protractor';

const {defineSupportCode} = require('cucumber');

defineSupportCode(function ({Before,Given,When,Then,setDefaultTimeout}) {

  let cadidateManagerPage: CadidateManagerPage = new CadidateManagerPage();
  let utils: Utilities = new Utilities();

  setDefaultTimeout(5 * 10000);

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

  Then(/^I verify successful alert message$/, () => {
    //console.log(browser.switchTo().alert().getText());
    //console.log(utils.getAlertText());
    return utils.acceptAlert();
  });

});






