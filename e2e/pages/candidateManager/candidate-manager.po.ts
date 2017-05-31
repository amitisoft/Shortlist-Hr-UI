import {$, element,by,browser} from 'protractor';
import {ProtractorDriver} from '../../utils/protractor-driver';
import {Utilities} from '../../utils/utilities';
import {expect} from 'chai';

let path = require('path');

export class CandidateManagerPage {
  private protractorDriver: ProtractorDriver = new ProtractorDriver();
  private utils: Utilities = new Utilities();

  private candidateDataTabXPath= '//*[@ng-reflect-router-link="cadidateTest"]';
  private uploadCandidateButtonXPath= "//*[@routerlink='uploadlist']";
  private uploadButtonText = "UPLOAD";
  private browseButtonId= "files";
  private registerCandidateButtonXPath = "//*[@routerlink='register']";
  private candidateFNameFieldXPath = "//*[@id='firstname']";
  private candidateLNameFieldXPath = "//*[@id='lastname']";
  private candidateEmailFieldXPath = "//*[@name='email']";
  private candidateMobNoFieldXPath = "//*[@id='mobile']";
  private candidateAdressFieldXPath = "//*[@id='address']";
  private registerButtonText = "Register";
  private updateButtonText = "Update";
  private candidateTableXPath = "//amiti-hr-dashboard/div/amiti-cadidatedata/div[2]/div[2]/amiti-listdata/div[2]/div/div/table";
  private fNameSearchFieldXPath = "//*[@name='firstName']";
  private lNameSearchFieldXPath = "//*[@name='lastName']";
  private emailSearchFieldXPath = "//*[@name='email']";
  private phNoSearchFieldXPath = "//*[@name='phoneNumber']";
  private searchButtonText = "Search";
  private cancelButtonText = "Cancel";
  private searchResetButtonText = "Reset";
  private candidateEditButtonXpath = "//*[@title='Edit']";
  private candidateDeleteButtonXpath = "//*[@title='Delete']";
  private candidateDataAttribute = "ng-reflect-model";


  selectCandidateDashBoard() {
    return this.protractorDriver.clickUsingXPath(this.candidateDataTabXPath);
  }

  selectUploadCandidates() {
    return this.protractorDriver.clickUsingXPath(this.uploadCandidateButtonXPath);
  }

  clickUploadButton() {
    return this.protractorDriver.clickUsingButtonText(this.uploadButtonText);
  }

  addCandidateFilePath() {
    let absolutePath = path.resolve(__dirname, "C:/Users/Amiti/WebstormProjects/Shortlist-Hr-UI/CandidateFormat.xlsx");
    return this.protractorDriver.sendKeysUsingId(this.browseButtonId,absolutePath);
  }

  selectRegisterCandidate() {
    return this.protractorDriver.clickUsingXPath(this.registerCandidateButtonXPath);
  }

  enterCandidateFName(fName) {
    return this.protractorDriver.sendKeysUsingXPath(this.candidateFNameFieldXPath,fName);
  }

  enterCandidateLName(lName) {
    return this.protractorDriver.sendKeysUsingXPath(this.candidateLNameFieldXPath,lName);
  }

  enterCandidateEmail(email) {
    return this.protractorDriver.sendKeysUsingXPath(this.candidateEmailFieldXPath,email);
  }

  enterCandidateAddress(adress) {
    return this.protractorDriver.sendKeysUsingXPath(this.candidateAdressFieldXPath,adress);
  }

  enterCandidateMobileNo(mobNo) {
    return this.protractorDriver.sendKeysUsingXPath(this.candidateMobNoFieldXPath,mobNo);
  }

  clickRegisterButton() {
    return this.protractorDriver.clickUsingButtonText(this.registerButtonText);
  }

  clickUpdateButton() {
    return this.protractorDriver.clickUsingButtonText(this.updateButtonText);
  }


  checkRegisterButtonEnabled() {
    return this.protractorDriver.checkButtonEnabledUsingText(this.registerButtonText);
  }

  verifyCandidateTableName(Name) {
    return this.utils.verifyTableDataisPresent(this.candidateTableXPath,1,Name).then(function (isPresent) {
      expect(isPresent).to.be.true;
    });
  }

  verifyCandidateTableEmail(email) {
    return this.utils.verifyTableDataisPresent(this.candidateTableXPath,2,email).then(function (isPresent) {
      expect(isPresent).to.be.true;
    });
  }

  verifyCandidateTablePhNo(no) {
    return this.utils.verifyTableDataisPresent(this.candidateTableXPath,3,no).then(function (isPresent) {
      expect(isPresent).to.be.true;
    });
  }

  enterSearchFName(fName) {
    return this.protractorDriver.sendKeysUsingXPath(this.fNameSearchFieldXPath,fName);
  }

  clearFName() {
    return this.protractorDriver.clearUsingXPath(this.fNameSearchFieldXPath);
  }

  enterSearchLName(lName) {
    return this.protractorDriver.sendKeysUsingXPath(this.lNameSearchFieldXPath,lName);
  }

  clearLName() {
    return this.protractorDriver.clearUsingXPath(this.lNameSearchFieldXPath);
  }

  enterSearchEmail(email) {
    return this.protractorDriver.sendKeysUsingXPath(this.emailSearchFieldXPath,email);
  }

  clearEmail() {
    return this.protractorDriver.clearUsingXPath(this.emailSearchFieldXPath);
  }

  enterSearchPhNo(phNo) {
    return this.protractorDriver.sendKeysUsingXPath(this.phNoSearchFieldXPath,phNo);
  }

  clearPhNo() {
    return this.protractorDriver.clearUsingXPath(this.phNoSearchFieldXPath);
  }

  clickSearchButton() {
    return this.protractorDriver.clickUsingButtonText(this.searchButtonText);
  }

  getFName(): any {
    return this.protractorDriver.getAttributeUsingXPath(this.candidateFNameFieldXPath,this.candidateDataAttribute);
  }

  getLName() {
    return this.protractorDriver.getAttributeUsingXPath(this.candidateLNameFieldXPath,this.candidateDataAttribute);
  }

  getEmail() {
    return this.protractorDriver.getAttributeUsingXPath(this.candidateEmailFieldXPath,this.candidateDataAttribute);
  }

  getPhNo() {
    return this.protractorDriver.getAttributeUsingXPath(this.candidateMobNoFieldXPath,this.candidateDataAttribute);
  }

  getAdress() {
    return this.protractorDriver.getAttributeUsingXPath(this.candidateAdressFieldXPath,this.candidateDataAttribute);
  }

  clickCancelButton() {
    return this.protractorDriver.clickUsingButtonText(this.cancelButtonText);
  }

  clickCandidateEditButton() {
    return this.protractorDriver.clickUsingXPath(this.candidateEditButtonXpath);
  }

  clickCandidateDeleteButton() {
    return this.protractorDriver.clickUsingXPath(this.candidateDeleteButtonXpath);
  }

  clickSearchResetButton() {
    return this.protractorDriver.clickUsingButtonText(this.searchResetButtonText);
  }

}
