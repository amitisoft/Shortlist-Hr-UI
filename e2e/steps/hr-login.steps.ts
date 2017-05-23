import {AuthenticationPage} from "../pages/hr-login.po";

export class AuthenticationSteps {


  private authenticationPage: AuthenticationPage = new AuthenticationPage();


  clickLogin(){
    this.authenticationPage.clickLoginButton();
  }
  hrUsername(user: string) {
    this.authenticationPage.enterUsername(user);

  }

  hrPassword(pass: string) {
    this.authenticationPage.enterPassword(pass);

  }

  clickSubmit() {
    this.authenticationPage.clickSubmitButton();

  }
 // this.authenticationPage.enterPassword(user);
  //this.authenticationPage.clickSubmitButton();

 // waitForLogoutSuccess() {
   // return this.authenticationPage.waitForLogoutSuccess();
  //}
}
