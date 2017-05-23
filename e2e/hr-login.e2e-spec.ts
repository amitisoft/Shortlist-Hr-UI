
import {AuthenticationSteps} from "./steps/hr-login.steps";
import { browser } from 'protractor';

  import { defineSupportCode } from 'cucumber';

import {TestManagerSteps} from "./steps/testManager.steps";




  defineSupportCode(function ({Given,When,Then}) {
    const search: AuthenticationSteps = new AuthenticationSteps();

    const testmanagerstep: TestManagerSteps = new TestManagerSteps();

    Given(/^I am on amiti page$/, () => {
      browser.get('http://hr-ui.com.s3-website.ap-south-1.amazonaws.com/signin');
     return browser.sleep(5000);
      //return expect(browser.getTitle()).to.eventually.equal('AmitiOnlineTest');

    });
    When(/^I click on login button$/, () => {
      browser.sleep(2000);
      return search.clickLogin();
    });
    When(/^I type username$/, () => {
      browser.sleep(2000);
      return search.hrUsername("hradmin@gmail.com");
    });
    When(/^I enter password$/, () => {
      browser.sleep(2000);
      let user = search.hrPassword("hradmin");
      console.log(user);
    });

    Then(/^I click on submit button$/, () => {
      browser.sleep(2000);
      browser.waitForAngular();
      return search.clickSubmit();
    });

    Then(/^I verify status$/, () => {

       return browser.sleep(10000);

    });


    })





