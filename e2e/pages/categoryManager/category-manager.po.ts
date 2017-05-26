import {ProtractorDriver} from '../../utils/protractor-driver';
import {expect} from 'chai';

export class CategoryManagerPage {
  private protractorDriver: ProtractorDriver = new ProtractorDriver();

  private hrDashboardPanelXPath = "//amiti-hr-dashboard/amiti-dashboardpanel";
  private categoryManagerTabXPath = "html/body/amiti-root/div/div/div/amiti-hr-dashboard/amiti-dashboardpanel/div/div[2]/nav/ul/li[3]/a";
  private categoryTextFieldXPath = "//input[@id='categoryname']";
  private descriptionTextFieldXPath = "//textarea[@id='categorydescription']";
  private createCategoryTabXPath= "html/body/amiti-root/div/div/div/amiti-hr-dashboard/div/amiti-categorymanager/div[1]/div[2]/button";
  private addButtonXPath = "//button[@class='btn btn-primary']";
  private clearButtonXPath = "//button[class='btn btn-success']";


  waitHrDashboard() {
    return this.protractorDriver.checkElementVisibleUsingXPath(this.hrDashboardPanelXPath);
  }
  clickCategoryManagerTab() {
    this.protractorDriver.clickUsingXPath(this.categoryManagerTabXPath);
  }

  clickCreateCategoryManagerTab() {
    this.protractorDriver.clickUsingXPath(this.createCategoryTabXPath);
  }
  enterCategory(category: string) {
    this.protractorDriver.sendKeysUsingXPath(this.categoryTextFieldXPath, category);
  }

  enterCategoryDescription(description: string) {
    this.protractorDriver.sendKeysUsingXPath(this.descriptionTextFieldXPath, description);
  }
  clickAddButton() {
    this.protractorDriver.clickUsingXPath(this.addButtonXPath);
  }
  clickClearButton() {
    this.protractorDriver.clickUsingXPath(this.clearButtonXPath);
  }

}
