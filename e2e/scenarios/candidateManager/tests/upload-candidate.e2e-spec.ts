import {Utilities} from '../../../utils/utilities';
import {CadidateManagerPage} from "../../../pages/candidateManager/candidate-manager.po";
import {expect} from 'chai';
import {browser} from 'protractor';

const {defineSupportCode} = require('cucumber');

defineSupportCode(function ({Before,Given,When,Then,setDefaultTimeout}) {

  let cadidateManagerPage: CadidateManagerPage = new CadidateManagerPage();
  let utils: Utilities = new Utilities();

  setDefaultTimeout(10 * 10000);

  Given(/^I am on candidate data page$/, () => {
    return cadidateManagerPage.selectCandidateDashBoard();
  });

  When(/^I click on upload candidate button$/, () => {
    return cadidateManagerPage.selectUploadCandidates();
  });

  When(/^I add the candidates data file directory$/, () => {
    return cadidateManagerPage.addCandidateFilePath();
  });

  When(/^I click Upload$/, () => {
    return cadidateManagerPage.clickUploadButton();
  });

  Then(/^I verify alert message "(.*)"$/, (alertText) => {
    return utils.verifyAlertText(alertText);
  });

  Then(/^I accept the alert$/, () => {
    return utils.acceptAlert();
  });

});






