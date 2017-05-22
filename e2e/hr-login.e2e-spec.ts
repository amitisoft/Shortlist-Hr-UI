
import {AuthenticationSteps} from "./steps/hr-login.steps";
import { browser } from 'protractor';

  import { defineSupportCode } from 'cucumber';

import {TestManagerSteps} from "./steps/testManager.steps";




  defineSupportCode(function ({Given,When,Then}) {
    const search: AuthenticationSteps = new AuthenticationSteps();

    const testmanagerstep: TestManagerSteps = new TestManagerSteps();

    Given(/^I am on amiti page$/, () => {
      // browser.get('http://localhost:4200/');
     return browser.sleep(5000);
      //browser.pause();
     // return search.waitForSignInDashboard();
      //return expect(browser.getTitle()).to.eventually.equal('AmitiOnlineTest');

    });
    When(/^I click on login button$/, () => {
     // browser.sleep(2000);
      return search.clickLogin();

    });
    When(/^I type username$/, () => {
      browser.sleep(2000);
      return search.username("hradmin@gmail.com");
    });
    When(/^I enter password$/, () => {
      browser.sleep(2000);
      let user = search.password("hradmin");
      console.log(user);
    });

    Then(/^I click on submit button$/, () => {
      browser.sleep(2000);
      browser.waitForAngular();
      return search.submit();
    });

   // Then(/^I select the CREATE TEST button$/, () => {
     // browser.waitForAngular();
      //return testmanagerstep.clickTestManger();
      //console.log(click);

      //return expect(browser.getTitle()).to.eventually.equal('AmitiOnlineTest');
    //});
    Then(/^I verify status$/, () => {
      browser.pause(5859);
       return browser.sleep(10000);


      //  return search.waitForHrDashboard();
    });


    });






