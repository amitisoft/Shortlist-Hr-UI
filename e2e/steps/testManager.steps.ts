import {TestManagerPage} from "../pages/test-manager.po";

export class TestManagerSteps {
  private testmanagerpage: TestManagerPage = new TestManagerPage();

  waitForHrDashboard() {
    return this.testmanagerpage.verifyHrDashboardVisible();
  }
  clickTestManger() {
    return this.testmanagerpage.clickTestManagerTab()
  }
  enterEmail(email: string) {
    return this.testmanagerpage.enterEmail(email);
  }
  enterSubject(subject: string) {
    return this.testmanagerpage.enterSubject(subject);
  }
  enterPostApplied(postapplied: string) {
    return this.testmanagerpage.enterPostApplied(postapplied);
  }
  enterSelectCategory() {
    return this.testmanagerpage.selectCategoryDropdown();
  }
  clickBoldButtonMail() {
    return this.testmanagerpage.clickBoldButton()
  }
  enterMailText(mail: string) {
    return this.testmanagerpage.enterMailBody(mail);
  }
  enterCategoryText(category: string) {
    return this.testmanagerpage.enterCategory(category);
  }
  clearEmail(){
  return this.testmanagerpage.clearEmailField();
  }
  clearCategory() {
    return this.testmanagerpage.clearCategoryField();
  }
  clickCategoryLink() {
    return this.testmanagerpage.clickCategory()
  }

}
