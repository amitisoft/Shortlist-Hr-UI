import { browser, by, element, protractor, $ } from "protractor";
import { By } from "@angular/platform-browser";
import { expect } from "chai";

export class ProtractorHelper {

  /**
   * The waitForAngularEnabled call disables implicit waiting for http and timeout tasks.  We were having trouble before
   * disabling this with components never resolving however.
   * Since there is browser setup stuff in this constructor it is required for this type of test code which is not
   * great.  Todo look for a better solution.
   * @see http://www.protractortest.org/#/api?view=ProtractorBrowser.prototype.waitForAngularEnabled
   */
  constructor(){
    //see JS doc for info on this line.
    browser.waitForAngularEnabled(false);
  }

  /**
   * Sets up the browser to the correct URL to use
   *
   * @param url URL to access on browser set up
   */
  navigateTo(url: string) {

    browser.get(url);
    browser.driver.manage().window().maximize();
  }

  /**
   * Uses the browser back to navigate back.
   */
  goBack() {
    browser.driver.navigate().back();
  }

  /**
   * Reloads the page using java script
   */
  refreshPage() {
    browser.driver.navigate().refresh();
  }

  /**
   * Returns the current url.
   *
   * @return current url
   */
  getUrl() {
    return browser.driver.getCurrentUrl();
  }

  /**
   * Verifies that the current url is the same as the expected url
   *
   * @param url to check against
   */
  verifyUrl(url: string) {
    this.getUrl().then(function (realUrl) {
      expect(realUrl).to.contain(url);
    });
  }

  /**
   * Returns the web element at the provided By locator.
   *
   * @param by By locator of element
   * @return webElement at location
   */
  getWebElementUsingBy(by: By) {
    return element(by);
  }

  /**
   * Method that return a WebElement based on provided xpath
   *
   * @param xPath xpath to use to find element
   */
  getWebElementUsingXPath(xPath: string) {
    return this.getWebElementUsingBy(by.xpath(xPath));
  }

  /**
   * Verifies if the specified locator exists on the current page.
   *    *
   * @param by By locator to verify
   * @return <code>true</code> if by locator present, fails test if by locator is not present
   */
  verifyElementPresentUsingBy(by: By) {
    this.getWebElementUsingBy(by).isPresent().then(function (isPresent) {
      return expect(isPresent).to.be.true;
    });
  }

  /**
   * Verifies if the specified xpath exists on the current page.
   *
   * @param xPath xpath to verify
   * @return <code>true</code> if xpath present, fails test if xpath is not present
   */
  verifyElementPresentUsingXPath(xPath: string) {
    return this.verifyElementPresentUsingBy(by.xpath(xPath));
  }

  /**
   * Verifies if the specified By locator is visible on the current page.
   *
   * @param by by locator to verify
   */
  verifyElementVisibleUsingBy(by: By) {
    this.getWebElementUsingBy(by).isDisplayed().then(function (isVisible) {
      return expect(isVisible).to.be.true;
    });
  }

  /**
   * Verifies if the specified xpath is visible on the current page.
   *
   * @param xPath xpath to verify
   */
  verifyElementVisibleUsingXPath(xPath: string) {
    this.verifyElementVisibleUsingBy(by.xpath(xPath));
  }


  /**
   * Verifies text at a specified xpath
   *
   * @param by By to verify
   * @param expectedText expected value
   */
  verifyTextUsingBy(by: By, expectedText: string){
    this.verifyElementPresentUsingBy(by);
    this.getWebElementUsingBy(by).getText().then((text) => {
      expect(text).to.contain(expectedText);
    });
  }

  /**
   * Verifies attribute at a specified xpath
   *
   * @param by By to verify
   * @param attribute attribute to search
   * @param expectedText expected value
   */
  verifyAttributeUsingBy(by: By, attribute: string = "value", expectedText: string){
    this.verifyElementPresentUsingBy(by);
    this.getWebElementUsingBy(by).getAttribute(attribute).then((text) => {
      expect(text).to.contain(expectedText);
    });
  }

  /**
   * Get the text contained in a given element searched by xpath.
   *
   * @param xPath xPath to search.
   * @returns text result
   */
  getTextUsingXPath(xPath: string){
    return element(by.xpath(xPath)).getText();
  }

  /**
   * Get the attribute in a given element searched by xpath.
   *
   * @param xPath xPath to search.
   * @param attribute attribute to search, defaults to value
   * @returns text result
   */
  getAttributeUsingXPath(xPath: string, attribute: string = "value"){
    return element(by.xpath(xPath)).getAttribute(attribute);
  }

  /**
   * Verifies text at a specified xpath
   *
   * @param xPath xpath to verify
   * @param expectedText  expected value
   * @return true if expectedResult at specified xpath matches actualText, fails the test otherwise
   */
  verifyTextUsingXPath(xPath: string, expectedText: string){
    this.verifyTextUsingBy(by.xpath(xPath), expectedText);
  }

  /**
   * Verifies that text exists at a specified xpath ignoring casing
   *
   * @param xpath xpath to verify
   * @param expectedText string to verify against
   * @return <code>true</code> if text at specified xpath matches, fails the test otherwise.
   */
  verifyTextIgnoreCaseUsingXPath(xpath: string, expectedText: string) {
    let actualText;
    this.verifyElementPresentUsingBy(xpath);
    this.getWebElementUsingBy(by).getText().then(function(text){
      actualText = text;
    }).then(function(){
      expect(actualText.toLowerCase()).to.contain(expectedText.toLowerCase());
    });
  }

  /**
   *
   * @param by By locator type to click
   */
  clickUsingBy(by: By) {
    this.getWebElementUsingBy(by).click();
  }

  /**
   *
   * @param  xPath xpath to click
   */
  clickUsingXPath(xPath: string) {
    this.clickUsingBy(by.xpath(xPath));
  }

  /**
   * Simulates typing keys into the specified xpath.
   *
   * @param by   By locator of  field to send keys to
   * @param keys keys to send to xpath
   */
  sendKeysUsingBy(by: By, keys: string) {
    this.getWebElementUsingBy(by).sendKeys(keys);
  }

  /**
   * Simulates typing keys into the specified xpath
   *
   * @param xPath xpath of text field to send keys to
   * @param keys  keys to send to xpath
   */
  sendKeysUsingXPath(xPath: string, keys: string) {
    this.getWebElementUsingBy(by.xpath(xPath)).sendKeys(keys);
  }

  /**
   * Simulates typing keys into the specified xpath using the Keys class
   *
   * @param xPath xpath of text field to send keys to
   * @param key   keys to send to xpath
   */
  sendKeys(xPath: string, key: any) {
    this.sendKeysUsingXPath(xPath, key.toString());
  }

  /**
   * Sends \n to the provided xpath.
   * This is the equivalent to tabbing through a page and then clicking the Enter key on the selected link
   *
   * @param xPath xpath of element
   */
  pressEnterOnLocatorUsingXPath(xPath: string) {
    this.sendKeys(xPath, protractor.Key.ENTER);
  }

  /**
   * Clears the content of the passed element.
   *
   * @param by By locator to clear
   */
  clearUsingBy(by: By) {
    this.getWebElementUsingBy(by).clear();
  }

  /**
   * Simulates clearing a text field at the specified xpath
   *
   * @param xPath xpath of text field to clear
   */
  clearUsingXPath(xPath: string) {
    this.clearUsingBy(by.xpath(xPath));
  }

  waitForElementXPath(xPath: string) {
    return browser.wait(() => {
      return this.getWebElementUsingXPath(xPath).isPresent()
        .then((isPresent) => {
          return !!isPresent;
        });
    });
  }

  /**
  *
  * @param  buttonText Text of button to click
  */
  clickUsingButtonText(buttonText: string) {
    this.clickUsingBy(by.buttonText(buttonText));
  }

  /**
   * Simulates typing keys into the specified id attribute
   *
   * @param id attribute of text field to send keys to
   * @param keys keys to send to id
   */
  sendKeysUsingId(id: string, keys: string) {
    this.getWebElementUsingBy(by.id(id)).sendKeys(keys);
  }

  /**
   * Simulates typing keys into the specified css value
   *
   * @param css css value of element field to send keys to
   * @param keys keys to send to css
   */
  sendKeysUsingCss(css: string, keys: string) {
    this.getWebElementUsingBy(by.css(css)).sendKeys(keys);
  }

  /**
   * Method that return a WebElement based on provided id Attribute
   *
   * @param id id attribute use to find element
   */
  getWebElementUsingId(id: string) {
    return this.getWebElementUsingBy(by.id(id));
  }

  /**
   * Method that return a WebElement based on provided id Attribute
   *
   * @param id id attribute use to find element
   */
  getWebElementUsingTagName(tagName: string) {
    return this.getWebElementUsingBy(by.tagName(tagName));
  }


  /**
   * Simulates typing keys into the specified id attribute
   *
   * @param name attribute of element to send keys to
   * @param keys keys to send to name
   */
  sendKeysUsingName(name: string, keys: string) {
    this.getWebElementUsingBy(by.name(name)).sendKeys(keys);
  }

  /**
   *
   * @param  name attribute of element to click
   */
  clickUsingName(name: string) {
    this.clickUsingBy(by.name(name));
  }

  /**
   *
   * @param  CSS text of element to click
   */
  clickUsingCss(cssString: string) {
    this.clickUsingBy(by.css(cssString));
  }

}
