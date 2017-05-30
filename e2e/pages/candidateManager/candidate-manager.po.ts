import {$, element,by,browser} from 'protractor';
import {ProtractorDriver} from '../../utils/protractor-driver';
import {Utilities} from '../../utils/utilities';
import {expect} from 'chai';

let path = require('path');

export class CadidateManagerPage {
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
  private candidateTableXPath = "//amiti-hr-dashboard/div/amiti-cadidatedata/div[2]/div[2]/amiti-listdata/div[2]/div/div/table";
  private fNameSearchFieldXPath = "//*[@name='firstName']";
  private lNameSearchFieldXPath = "//*[@name='lastName']";
  private emailSearchFieldXPath = "//*[@name='email']";
  private phNoSearchFieldXPath = "//*[@name='phoneNumber']";
  private searchButtonText = "Search";
  private cancelButtonText = "Cancel";


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

  checkRegisterButtonEnabled() {
    return this.protractorDriver.checkButtonEnabledUsingText(this.registerButtonText);
  }

  getTableRow() {
    return this.utils.getTableColumnIndex("//amiti-hr-dashboard/div/amiti-cadidatedata/div[2]/div[2]/amiti-listdata/div[2]/div/div/table","Name").then(function (text) {
      return text;

    });
  }

  enterSearchFName(fName) {
    return this.protractorDriver.sendKeysUsingXPath(this.fNameSearchFieldXPath,fName);
  }

  enterSearchLName(lName) {
    return this.protractorDriver.sendKeysUsingXPath(this.lNameSearchFieldXPath,lName);
  }

  enterSearchEmail(email) {
    return this.protractorDriver.sendKeysUsingXPath(this.emailSearchFieldXPath,email);
  }

  enterSearchPhNo(phNo) {
    return this.protractorDriver.sendKeysUsingXPath(this.phNoSearchFieldXPath,phNo);
  }

  clickSearchButton() {
    return this.protractorDriver.clickUsingButtonText(this.searchButtonText);
  }

  getFName() {
    return this.protractorDriver.getTextUsingXPath(this.candidateFNameFieldXPath);
  }

  getLName() {
    return this.protractorDriver.getTextUsingXPath(this.candidateLNameFieldXPath);
  }

  getEmail() {
    return this.protractorDriver.getTextUsingXPath(this.candidateEmailFieldXPath);
  }

  getPhNo() {
    return this.protractorDriver.getTextUsingXPath(this.candidateMobNoFieldXPath);
  }

  getAdress() {
    return this.protractorDriver.getTextUsingXPath(this.candidateAdressFieldXPath);
  }

  clickCancelButton() {
    return this.protractorDriver.clickUsingButtonText(this.cancelButtonText);
  }


}
