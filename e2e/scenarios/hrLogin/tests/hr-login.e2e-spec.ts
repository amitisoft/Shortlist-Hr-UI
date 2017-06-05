import {Utilities} from '../../../utils/utilities';
import { config } from '../../../../protractor.conf.js';
import {AuthenticationPage} from "../../../pages/hrLogin/hr-login.po";
import {expect} from 'chai';
import {browser} from 'protractor';

const {defineSupportCode} = require('cucumber');

defineSupportCode(function ({Before,Given,When,Then,setDefaultTimeout}) {

  let authenticationpage: AuthenticationPage;
  let utils: Utilities;

  setDefaultTimeout(5 * 10000);

  Before( function (event, callback) {
    authenticationpage = new AuthenticationPage();
    utils = new Utilities();
    //utils.navigatesToLandingPage('/');
    //browser.get(config.baseUrl);
    callback();
  });


  Given(/^I am on amiti page$/, () => {
    utils.navigatesToLandingPage('/');
  });

  When(/^I click on login button$/, () => {
    return authenticationpage.clickLoginButton();
  });

  When(/^I type username$/, () => {
    return authenticationpage.enterUsername("hradmin@gmail.com");
  });

  When(/^I enter password$/, () => {
    return authenticationpage.enterPassword("hradmin");
  });

  Then(/^I click on submit button$/, () => {
      return authenticationpage.clickSubmitButton();
  });

  Then(/^I verify the Dashboards/, () => {
    return authenticationpage.waitForDashboardPanel();
  });

});






