import {Utilities} from '../../../utils/utilities';
import { config } from 'C:/Users/Amiti/WebstormProjects/Shortlist-Hr-UI/protractor.conf.js';
import {AuthenticationPage} from "../../../pages/hrLogin/hr-login.po";
const {defineSupportCode} = require('cucumber');
import {expect} from 'chai';
import {browser} from 'protractor';


defineSupportCode(function ({Before,Given,When,Then,setDefaultTimeout}) {

  let authenticationpage: AuthenticationPage;
  let utils: Utilities;

  setDefaultTimeout(20 * 10000);
  Before( function (event, callback) {
    authenticationpage = new AuthenticationPage();
    utils = new Utilities();
    browser.get(config.baseUrl);
    setTimeout(callback, 30000);
  });


  Given(/^I am on amiti page$/, () => {
    console.log(authenticationpage.verifyLoginPageTitle());
    //return expect(authenticationpage.verifyLoginPageTitle()).to.eventually.equal("AmitiOnlineTest");
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
    return;
  });

})






