import {browser, by, element, protractor} from 'protractor';
import {By} from '@angular/platform-browser';
import {WebElement} from 'selenium-webdriver';

export class ProtractorDriver {

  /**
   * The waitForAngularEnabled call disables implicit waiting for http and timeout tasks.  We were having trouble before
   * disabling this with components never resolving however.
   * Since there is browser setup stuff in this constructor it is required for this type of test code which is not great.
   * @see http://www.protractortest.org/#/api?view=ProtractorBrowser.prototype.waitForAngularEnabled
   */
  constructor() {
    browser.waitForAngularEnabled(false);
  }

  /**
   * Sets up the browser to the correct URL to use
   *
   * @param {URL} url to access on browser set up
   *
   */
  navigateTo(url: string) {
   return browser.get(url);
  }

  /**
   * Sets up the browser window to maximize
   */
  maximizeWindow() {
    return browser.manage().window().maximize();
  }


  /**
   * Uses the browser back to navigate back.
   */
  goBack() {
    return browser.navigate().back();
  }

  /**
   * Reloads the page
   */
  refreshPage() {
    return browser.navigate().refresh();
  }

  /**
   * Returns the current url.
   *
   * @returns {string} current url
   */
  getUrl() {
    return browser.getCurrentUrl();
  }

  /**
   * Description: Retrieve the source code for the given page
   *
   * @returns {string} the page source
   */
  getPageSource() {
    return browser.getPageSource();
  }

  /**
   * Pauses test for specified milliseconds.
   *
   * @param {number} milliseconds to sleep
   */
  sleep(milliseconds: number) {
    return browser.sleep(milliseconds);
  }

  /**
   * Description: To close current window
   *
   */
  closeWindow() {
    return browser.close();
  }

  /**
   * Returns the WebElement based on provided By locator
   *
   * @param {By} by locator of element
   * @returns {WebElement} webElement at location
   */
  getWebElementUsingBy(by: By) {
    return element(by);
  }

  /**
   * Method that return a WebElement based on provided xPath
   *
   * @param {string} xPath to use to find element
   * @returns {WebElement} webElement at location
   */
  getWebElementUsingXPath(xPath: string) {
    return this.getWebElementUsingBy(by.xpath(xPath));
  }

  /**
   * Get the text contained in a given element searched by locator.
   *
   * @param {By} by to search.
   * @returns {string} result
   */
  getTextUsingBy(by: By) {
    return this.getWebElementUsingBy(by).getText();
  }

  /**
   * Get the text contained in a given element searched by xpath.
   *
   * @param {string} xPath to search
   * @returns {string} result
   */
  getTextUsingXPath(xPath: string) {
    return this.getTextUsingBy(by.xpath(xPath));
  }

  /**
   * Verifies if the specified By locator exists on the current page.
   *
   * @param {By} by to verify
   * @return <code>true</code> if By locator present, fails test if locator is not present
   */
  checkElementPresentUsingBy(by: By) {
    return this.getWebElementUsingBy(by).isPresent().then((isPresent) => {
      return isPresent;
    });
  }

  /**
   * Verifies if the specified xPath exists on the current page.
   *
   * @param {string} xPath to verify
   * @return <code>true</code> if xPath present, fails test if xPath is not present
   */
  checkElementPresentUsingXPath(xPath: string) {
    return this.checkElementPresentUsingBy(by.xpath(xPath));
  }

  /**
   * Verifies if the specified By locator does not exists on the current page.
   *
   * @param {By} by to verify
   * @return <code>true</code> if element not present, false if element is present
   */

  checkElementNotPresentUsingBy(by: By) {
    return this.getWebElementUsingBy(by).isPresent().then((isPresent) => {
      return !isPresent;
    });
  }

  /**
   * Verifies if the specified xPath does not exists on the current page.
   *
   * @param {string} xPath to verify
   * @returns <code>true</code> if element does not present, false if element is present
   */
  checkElementNotPresentUsingXPath(xPath: string) {
    return this.checkElementNotPresentUsingBy(by.xpath(xPath));
  }


  /**
   * Verifies if the specified By locator is visible on the current page.
   *
   * @param {By} by locator to verify
   * @returns <code>true</code> if element visible, false if element not visible
   */
  checkElementVisibleUsingBy(by: By) {
    return this.checkElementPresentUsingBy(by).then((result) => {
      if (result) {
        return this.getWebElementUsingBy(by).isDisplayed().then((isVisible) => {
          return isVisible;
        });
      } else {
        return false;
      }
    });
  }

  /**
   * Verifies if the specified xPath is visible on the current page.
   *
   * @param {string} xPath to verify
   * @returns <code>true</code> if element visible, false if element not visible
   */
  checkElementVisibleUsingXPath(xPath: string) {
    return this.checkElementVisibleUsingBy(by.xpath(xPath));
  }

  /**
   * Verifies if the specified By locator is not visible on the current page.
   *
   * @param by by locator to verify
   * @returns <code>true</code> if element not visible, false if element visible
   */
  checkElementNotVisibleUsingBy(by: By) {
    return this.checkElementPresentUsingBy(by).then((result) => {
      if (result) {
        return this.getWebElementUsingBy(by).isDisplayed().then((isVisible) => {
          return !isVisible;
        });
      } else {
        return false;
      }
    });
  }

  /**
   * Verifies if the specified xPath is not visible on the current page.
   *
   * @param xPath xpath to verify
   * @returns <code>true</code> if element not visible, false if element visible
   */
  checkElementNotVisibleUsingXPath(xPath: string) {
    return this.checkElementNotVisibleUsingBy(by.xpath(xPath));
  }


  /**
   * Verifies if the specified By locator is enabled on the current page.
   *
   * @param {By} by locator to verify
   * @returns <code>true</code> if element enabled, false if element not enabled
   */
  checkElementEnabledUsingBy(by: By) {
    return this.checkElementVisibleUsingBy(by).then((result) => {
      if (result) {
        return this.getWebElementUsingBy(by).isEnabled().then((isEnabled) => {
          return isEnabled;
        });
      } else {
        return false;
      }
    });
  }

  /**
   * Verifies if the specified xPath is enabled on the current page.
   *
   * @param {string} xPath to verify
   * @returns <code>true</code> if element enabled, false if element not enabled
   */
  checkElementEnabledUsingXPath(xPath: string) {
    return this.checkElementEnabledUsingBy(by.xpath(xPath));
  }

  /**
   * Verifies if the specified By locator is not enabled on the current page.
   *
   * @param {By} by locator to verify
   * @returns <code>true</code> if element not enabled, false if element enabled
   */
  checkElementNotEnabledUsingBy(by: By) {
    return this.checkElementVisibleUsingBy(by).then((result) => {
      if (result) {
        return this.getWebElementUsingBy(by).isEnabled().then((isEnabled) => {
          return !isEnabled;
        });
      } else {
        return false;
      }
    });
  }
  /**
   * Verifies if the specified xPath is not enabled on the current page.
   *
   * @param {string} xPath to verify
   * @returns <code>true</code> if element not enabled, false if element enabled
   */
  checkElementNotEnabledUsingXPath(xPath: string) {
    return this.checkElementNotEnabledUsingBy(by.xpath(xPath));
  }

  /**
   * Get the attribute in a given element searched By locator
   *
   * @param {By} by to search.
   * @param {string} attribute to search, defaults to value
   * @returns {string} text result
   */
  getAttributeUsingBy(by: By, attribute: string = 'value') {
     return this.getWebElementUsingBy(by).getAttribute(attribute);
  }

  /**
   * Get the attribute in a given element searched by xPath
   *
   * @param {string} xPath to search.
   * @param {string} attribute to search, defaults to value
   * @returns {string} text result
   */
  getAttributeUsingXPath(xPath: string, attribute: string = 'value') {
    return this.getAttributeUsingBy(by.xpath(xPath), attribute);
  }

  /**
   *
   * @param {By} by locator type to click
   */
  clickUsingBy(by: By) {
    return this.getWebElementUsingBy(by).click();
  }

  /**
   *
   * @param  {string} xPath to click
   */
  clickUsingXPath(xPath: string) {
    return this.clickUsingBy(by.xpath(xPath));
  }

  /**
   * Simulates typing keys into the specified locator.
   *
   * @param {By} by locator of  field to send keys to
   * @param {string} keys to send to locator
   */
  sendKeysUsingBy(by: By, keys: string) {
    return this.getWebElementUsingBy(by).sendKeys(keys);
  }

  /**
   * Simulates typing keys into the specified xPath
   *
   * @param {string} xPath of text field to send keys to
   * @param {string} keys to send to xPath
   */
  sendKeysUsingXPath(xPath: string, keys: string) {
    return this.sendKeysUsingBy(by.xpath(xPath), keys);
  }

  /**
   * Simulates typing keys into the specified locator using the Keys class
   *
   * @param {By} by of element to send keys to
   * @param {any} key to send to locator
   */
  private sendKeys(by: By, key: any) {
    return this.sendKeysUsingBy(by, key.toString());
  }

  /**
   * Sends \n to the provided locator.
   * This is the equivalent to tabbing through a page and then clicking the Enter key on the selected link
   *
   * @param {By} by of element
   */
  pressEnterOnLocatorUsingBy(by: By) {
    return this.sendKeys(by, protractor.Key.ENTER);
  }

  /**
   * Sends \n to the provided xPath.
   * This is the equivalent to tabbing through a page and then clicking the Enter key on the selected link
   *
   * @param {string} xPath of element
   */
  pressEnterOnLocatorUsingXPath(xPath: string) {
    return this.pressEnterOnLocatorUsingBy(by.xpath(xPath));
  }

  /**
   * Clears the content of the passed element
   *
   * @param {By} by locator to clear
   */
  clearUsingBy(by: By) {
    return this.getWebElementUsingBy(by).clear();
  }

  /**
   * Clearing a text field at the specified xPath
   *
   * @param {string} xPath of text field to clear
   */
  clearUsingXPath(xPath: string) {
    return this.clearUsingBy(by.xpath(xPath));
  }

  /**
   * Wait for an element to present on specified locator position
   *
   *
   * @param {By} by of element
   */
  waitForElementVisibleUsingBy(by: By) {
    return browser.wait(() => {
      return this.checkElementVisibleUsingBy(by).then((isPresent) => {
        return isPresent;
      });
    });
  }

  /**
   * Wait for an element to present on specified xPath position
   *
   *
   * @param {string} xPath of element
   */
  waitForElementVisibleUsingXPath(xPath: string) {
    return this.waitForElementVisibleUsingBy(by.xpath(xPath));
  }

  /**
   *
   * @param  buttonText Text of button to click
   */
  clickUsingButtonText(buttonText: string) {
    return this.clickUsingBy(by.buttonText(buttonText));
  }

  /**
   * Simulates typing keys into the specified id attribute
   *
   * @param id attribute of text field to send keys to
   * @param keys keys to send to id
   */
  sendKeysUsingId(id: string, keys: string) {
    return this.getWebElementUsingBy(by.id(id)).sendKeys(keys);
  }

  /**
   * Simulates typing keys into the specified css value
   *
   * @param css css value of element field to send keys to
   * @param keys keys to send to css
   */
  sendKeysUsingCss(css: string, keys: string) {
    return this.getWebElementUsingBy(by.css(css)).sendKeys(keys);
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
   * Method that return a WebElement based on provided tagName
   *
   * @param tagName tagName of an element
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
    return this.getWebElementUsingBy(by.name(name)).sendKeys(keys);
  }

  /**
   *
   * @param  name attribute of element to click
   */
  clickUsingName(name: string) {
    return this.clickUsingBy(by.name(name));
  }

  /**
   *
   * @param  cssString CSS text of element to click
   */
  clickUsingCss(cssString: string) {
    return this.clickUsingBy(by.css(cssString));
  }

  /**
   *
   * @param  cssString CSS text of element to click
   */
  clickUsingDeepCss(cssString: string) {
    return this.clickUsingBy(by.deepCss(cssString));
  }

  /**
   * Get the title of in a given page.
   *
   * @returns {string} result
   */
  getPageTitle() {
    return browser.getTitle();
  }


}
