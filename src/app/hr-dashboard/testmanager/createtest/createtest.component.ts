import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CreateTestService } from './createtest.service';
import { Response } from '@angular/http';
import { CategorymanagerService } from '../../categorymanager/categorymanager.service';
import { WindowRefService } from './createtest.service';
import { NotificationsService } from 'angular2-notifications';

@Component({
    selector: 'amiti-createtest',
  templateUrl: './createtest.component.html',
  //styles: [`.simple-notification-wrapper {left: 200px !important;}`],
  styleUrls: ['./createtest.component.css'],
  providers: [CreateTestService, WindowRefService]
})

export class CreatetestComponent implements OnInit {

    emailData:any;
    getData: any;
    convertedEmailData = [];
    questionSuccessStatus: boolean = false;
    questionFailureStatus: boolean = false;
    listOfSelectedEmails = [];
    arrayOfSelectedEmails = [];
    queryResults: any;
    categoryQueryResults: any;
    allEmailsArray:any = [];
    /*------- Category list variables ----------*/
    selectedCategory: any;
    emailsList:any = [];
    allCategoriesArray = [];
    private _window: Window;   
    private selected = [];
    categoryList = [];
    private categoryFilteredList = [];
    private categoryElementRef;
    private categorySelected = [];

    constructor(private autoCompleteService: CreateTestService, private categoryMngService: CategorymanagerService, windowRef: WindowRefService, private _notificationService: NotificationsService, private elementRef: ElementRef) {      
        this._window = windowRef.nativeWindow;    // for fetching window variable reference
    }

    ngOnInit() {
        //Getting all registered user emails 
        this.autoCompleteService.getEmail().subscribe(
            data => {
                for (let key in data) {
                    this.allEmailsArray.push(data[key][0].emails);
                }   
                this.emailsList = this.allEmailsArray;
                console.log("Emails List coppied array: "+this.emailsList);
                console.log("Emails List Original array: "+this.allEmailsArray);              
            }
        );
                
        //Getting all enetred categories                     
        this.categoryMngService.getOwnData()
            .subscribe(
            data => {
                for (let key in data) {
                    this.categoryList.push(data[key]);
                }
                console.log(this.categoryList[0]);
            },
            error => {console.log(error)},
            () => {
                //this.selectedCategory = this.categoryList[0]['categoryname'];
            });
        
        
        console.log(this._window);
    }


    // ---------------------- auto complete Begins ------------------------
    select(item,selected,queryResults, catEmailList) {
        this[selected].push(item);
        this[catEmailList].splice(this[catEmailList].indexOf(item), 1);
        this[queryResults] = this[selected].toString();
    }

    remove(item,selected,queryResults, catEmailList) {
        this[selected].splice(this[selected].indexOf(item), 1);
        this[catEmailList].push(item);
        this[queryResults] = this[selected].toString();
    }


    // ---------------------- Send Create Test Form Begins ----------------------
    sendTestLink(form:NgForm){
        var frm = form;
        if(!form.value.mailbody){
            var retVal = confirm("The mail has no body, Do you want to continue ?");
            if( retVal == true ){
                this.wrapFunction(frm);
            }
            else{
                return false;
            }
        }else{
            this.wrapFunction(frm);
        }  
    }

    wrapFunction(form: NgForm) {
        var frm = form;
        // var sendExamLinkMail = this.elementRef.nativeElement.select("#sendExamLink");
        var sendExamLinkMail = <HTMLInputElement>document.getElementById("sendExamLink");
        console.log(sendExamLinkMail);
        //var mailBody = "<html><head><style>#outlook a{padding:0;} .ReadMsgBody{width:100%;} .ExternalClass{width:100%;} .ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div{line-height:100%;} body, table, td, p, a, li, blockquote{-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;} table, td{mso-table-lspace:0pt;mso-table-rspace:0pt;} td ul li{font-size:16px;} body{margin:0;padding:0;} img{max-width:100%;border:0;line-height:100%;outline:none;text-decoration:none;} table{border-collapse:collapse !important;} .content{width:100%;max-width:600px;} .content img{height:auto;min-height:1px;} #bodyTable{margin:0;padding:0;width:100% !important;} #bodyCell{margin:0;padding:0;} #bodyCellFooter{margin:0;padding:0;width:100% !important;padding-top:25px;padding-bottom:25px;background-color:#25282f;} body{margin:0;padding:0;min-width:100%!important;} #templateContainerHeader{font-size:14px;padding-top:0;padding-bottom:0;} #templateContainerFootBrd{border-bottom:1px solid #e2e2e2;border-left:1px solid #e2e2e2;border-right:1px solid #e2e2e2;border-radius:0 0 4px 4px;background-clip:padding-box;border-spacing:0;height:10px;width:100% !important;} #templateContainer{border-top:1px solid transparent;border-left:1px solid #e2e2e2;border-right:1px solid #e2e2e2;border-radius:4px 4px 0 0;background-clip:padding-box;border-spacing:0;} #templateContainerMiddle{border-left:1px solid #e2e2e2;border-right:1px solid #e2e2e2;} #templateContainerMiddleBtm{border-left:1px solid #e2e2e2;border-right:1px solid #e2e2e2;border-bottom:1px solid #e2e2e2;border-radius:0 0 4px 4px;background-clip:padding-box;border-spacing:0;} h1{color:#2e2e2e;display:block;font-family:Helvetica;font-size:26px;line-height:1.385em;font-style:normal;font-weight:normal;letter-spacing:normal;margin-top:0;margin-right:0;margin-bottom:15px;margin-left:0;text-align:left;} h2{color:#2e2e2e;display:block;font-family:Helvetica;font-size:22px;line-height:1.455em;font-style:normal;font-weight:normal;letter-spacing:normal;margin-top:0;margin-right:0;margin-bottom:15px;margin-left:0;text-align:left;} h3{color:#545454;display:block;font-family:Helvetica;font-size:18px;line-height:1.444em;font-style:normal;font-weight:normal;letter-spacing:normal;margin-top:0;margin-right:0;margin-bottom:15px;margin-left:0;text-align:left;} h4{color:#545454;display:block;font-family:Helvetica;font-size:14px;line-height:1.571em;font-style:normal;font-weight:normal;letter-spacing:normal;margin-top:0;margin-right:0;margin-bottom:15px;margin-left:0;text-align:left;} h5{color:#545454;display:block;font-family:Helvetica;font-size:13px;line-height:1.538em;font-style:normal;font-weight:normal;letter-spacing:normal;margin-top:0;margin-right:0;margin-bottom:15px;margin-left:0;text-align:left;} h6{color:#545454;display:block;font-family:Helvetica;font-size:12px;line-height:2.000em;font-style:normal;font-weight:normal;letter-spacing:normal;margin-top:0;margin-right:0;margin-bottom:15px;margin-left:0;text-align:left;} p{display:block;font-family:Helvetica;font-size:15px;line-height:1.500em;font-style:normal;font-weight:normal;letter-spacing:normal;margin-top:0;margin-right:0;margin-bottom:0.938em;margin-left:0;text-align:left;color:#56565a;} .textCenter{text-align:center;}.margin-btm-six{margin-bottom:6px;font-size:13px;} .fw-lg-20{width:120px;display:inline-block;} .unSubContent a:visited{color:#a1a1a1;text-decoration:underline;font-weight:normal;} .unSubContent a:focus{color:#a1a1a1;text-decoration:underline;font-weight:normal;} .unSubContent a:hover{color:#a1a1a1;text-decoration:underline;font-weight:normal;} .unSubContent a:link{color:#a1a1a1;text-decoration:underline;font-weight:normal;} .unSubContent a .yshortcuts{color:#a1a1a1;text-decoration:underline;font-weight:normal;} .unSubContent h6{color:#a1a1a1;font-size:12px;line-height:1.5em;margin-bottom:0;} .bodyContent{color:#505050;font-family:Helvetica;font-size:14px;line-height:150%;padding-top:2.143em;padding-right:3.5em;padding-left:3.5em;padding-bottom:0.714em;text-align:left;} .bodyContentBtns{color:#505050;font-family:Helvetica;font-size:14px;line-height:150%;padding-top:1.357em;padding-bottom:1.357em;padding-right:3.5em;padding-left:3.5em;text-align:center;} .bodyContentBtns p{margin-bottom:0;} .bodyContentImage{color:#505050;font-family:Helvetica;font-size:14px;line-height:150%;padding-top:0;padding-right:3.571em;padding-left:3.571em;padding-bottom:2em;text-align:left;} .bodyContentImage h4{color:#4E4E4E;font-size:13px;line-height:1.154em;font-weight:normal;margin-bottom:0;} .bodyContentImage h5{color:#828282;font-size:12px;line-height:1.667em;margin-bottom:0;} a:visited{color:#3386e4;text-decoration:none;} a:focus{color:#3386e4;text-decoration:none;} a:hover{color:#3386e4;text-decoration:none;} a:link{color:#3386e4;text-decoration:none;} a .yshortcuts{color:#3386e4;text-decoration:none;} .bodyContent img{height:auto;max-width:498px;} .footerContent{color:#808080;font-family:Helvetica;font-size:10px;line-height:150%;padding-top:2.000em;padding-right:2.000em;padding-bottom:2.000em;padding-left:2.000em;text-align:left;} .footerContent a:link, .footerContent a:visited, .footerContent a .yshortcuts, .footerContent a span{color:#606060;font-weight:normal;text-decoration:underline;} #templateContainerImageFull{border-left:1px solid #e2e2e2;border-right:1px solid #e2e2e2;} .bodyContentImageFull p{font-size:0 !important;margin-bottom:0 !important;} .brdBottomPadd-lg{border-bottom:1px solid #f0f0f0;} .brdBottomPadd-lg .bodyContent{padding-bottom:2.286em;} .brdBottomPadd{border-bottom:1px solid #f0f0f0;} .brdBottomPadd .bodyContent{padding-bottom:0em;} a.btn-large{display:block !important;width:100%;margin-top:0 !important;text-align:center !important;} a.green-btn{background:#5098ea;display:inline-block;color:#FFFFFF;border-top:10px solid #5098ea;border-bottom:10px solid #5098ea;text-decoration:none;font-size:14px;margin-top:1.0em;border-radius:3px 3px 3px 3px;background-clip:padding-box;} a.green-btn:hover{background:#3cd278;color:#FFFFFF;border-top:10px solid #3cd278;border-bottom:10px solid #3cd278;} a.grey-btn{background:#c0c0c0;display:inline-block;color:#FFFFFF;border-top:10px solid #c0c0c0;border-bottom:10px solid #c0c0c0;text-decoration:none;font-size:14px;margin-top:1.0em;border-radius:3px 3px 3px 3px;background-clip:padding-box;} a.blue-btn{background:#2ca7d3;display:inline-block;color:#FFFFFF;border-top:10px solid #c0c0c0;border-bottom:10px solid #c0c0c0;text-decoration:none;font-size:14px;margin-top:1.0em;border-radius:3px 3px 3px 3px;background-clip:padding-box;} a.red-btn{background:#e05555;display:inline-block;color:#FFFFFF;border-top:10px solid #e05555;border-bottom:10px solid #e05555;text-decoration:none;font-size:14px;margin-top:1.0em;border-radius:3px 3px 3px 3px;background-clip:padding-box;} .bodyContentNewsLetterDate{color:#505050;font-family:Helvetica;font-size:14px;line-height:150%;padding-top:1.571em;padding-right:1.714em;padding-left:1.714em;padding-bottom:0;text-align:left;} .bodyContentNewsLetter{color:#505050;font-family:Helvetica;font-size:14px;line-height:150%;padding-top:0em;padding-right:3.5em;padding-left:3.5em;padding-bottom:0.714em;text-align:left;} .two-column{text-align:center;font-size:0;} .two-column img{max-width:100%;} .two-column .column{width:100%;max-width:33%;display:inline-block;vertical-align:top;color:#505050;font-family:Helvetica;font-size:14px;line-height:150%;margin-bottom:0em;text-align:center;} .two-column .text{padding:0 0.500em;} .two-column .columnspace{width:100%;max-width:8%;display:inline-block;vertical-align:top;color:#505050;font-family:Helvetica;font-size:14px;line-height:150%;} @media only screen and (max-width:480px), screen and (max-device-width:480px){h1{font-size:34px !important;} h2{font-size:30px !important;} h3{font-size:24px !important;} h4{font-size:18px !important;} h5{font-size:16px !important;} h6{font-size:14px !important;} p{font-size:18px !important;} .brdBottomPadd .bodyContent{padding-bottom:0em !important;} .brdBottomPadd-lg .bodyContent{padding-bottom:2.286em !important;} .bodyContent{padding:6% 5% 1% 6% !important;} td[class='bodyContentBtns']{padding:5% 6% 5% 6% !important;} .bodyContentNewsLetter{padding:6% 5% 2% 6% !important;} .bodyContent img{max-width:100% !important;} .bodyContentImage{padding:3% 6% 6% 6% !important;} .bodyContentImage img{max-width:100% !important;} .bodyContentImage h4{font-size:16px !important;} .bodyContentImage h5{font-size:15px !important;margin-top:0;} .bodyContentNewsLetterDate h5{font-size:14px !important;} } @media only screen and (max-width:550px), screen and (max-device-width:550px){body[yahoo] .hide{display:none!important;} body[yahoo] .buttonwrapper{background-color:transparent!important;} body[yahoo] .button{padding:0px!important;} body[yahoo] .button a{background-color:#e05443;padding:15px 15px 13px!important;} body[yahoo] .unsubscribe{font-size:14px;display:block;margin-top:0.714em;padding:10px 50px;background:#2f3942;border-radius:5px;text-decoration:none!important;} }</style></head><body>"+sendExamLinkMail.innerHTML+"</body></html>";      
        var mailBody = "<!DOCTYPE html PUBLIC '-//W3C//DTD XHTML 1.0 Transitional//EN' 'http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd'> <!-- saved from url=(0110)http://c0185784a2b233b0db9b-d0e5e4adc266f8aacd2ff78abb166d77.r51.cf2.rackcdn.com/v1_templates/template_06.html --> <html xmlns='http://www.w3.org/1999/xhtml'><head><meta http-equiv='Content-Type' content='text/html; charset=UTF-8'> <title>Invitation</title> <!--[if (gte mso 9)|(IE)]> <style type='text/css'> .bodyContentBtns {padding: 0 !important; } </style> <![endif]--> </head> <body yahoo='' bgcolor='#ffffff'> <input type='hidden' id='candidateEmail' value='' /> <input type='hidden' id='candidateSubject' value='' /> <table width='100%' bgcolor='#3c4856' border='0' cellpadding='10' cellspacing='0'> <tbody><tr> <td> <!--[if (gte mso 9)|(IE)]> <table width='600' align='center' cellpadding='0' cellspacing='0' border='0'> <tr> <td> <![endif]--> <table bgcolor='#ffffff' class='content' align='center' cellpadding='0' cellspacing='0' border='0'> <tbody><tr> <td valign='top' mc:edit='headerBrand' id='templateContainerHeader'> <p style='text-align:center;margin:0;padding:10px 0 10px 0; background-color: #66b8c4;'> <img src='./Invitation_files/logo.png' style='display:inline-block;'> </p> </td> </tr> <tr> <td align='center' valign='top'> <table border='0' cellpadding='0' cellspacing='0' width='100%' id='templateContainer'> <tbody><tr> <td valign='top' class='bodyContent' mc:edit='body_content_newsletter_02'> <h2 style='text-align:center;'><strong>Welcome To Amiti Online Examination.</strong></h2> <br /> <p class='textCenter'>Amiti welcomes you to take an exam as the first step in our recruitment/shortlist process.</p> <p class='textCenter' style='margin-bottom: 0;'>Please confirm the below details & click the button to sign-in using any of your existing google account credentials.</p> </td> </tr> </tbody></table> </td> </tr> <tr style='border-top: 1px solid #e2e2e2;'> <td align='center' valign='top'> <table border='0' cellpadding='0' cellspacing='0' width='100%' id='templateContainer'> <tbody> <tr> <td valign='top' class='bodyContent' mc:edit='body_content_newsletter_02'> <p class='margin-btm-six'><b class='fw-lg-20'>Post applied for: </b> <span>Posts</span></p> <p class='margin-btm-six'><b class='fw-lg-20'>Mail Body: </b> <span>MailBody</span></p> <p class='margin-btm-six'><b class='fw-lg-20'>Exam Category: </b> <span>Categorys</span></p> </td> </tr> </tbody> </table> </td> </tr> <tr> <td align='center' valign='top'> <table border='0' cellpadding='0' cellspacing='0' width='100%' id='templateContainer'> <tbody><tr> <td valign='top' align='center' class='bodyContentBtns'> <table border='0' cellpadding='0' cellspacing='0' width='100%'> <tbody><tr valign='top'> <td class='two-column'> <!--[if (gte mso 9)|(IE)]> <table width='600'> <tr> <td valign='top' height='20'> <img height='20px' style='display: block; margin: 0; padding: 0; border: 0;' src='http://c0185784a2b233b0db9b-d0e5e4adc266f8aacd2ff78abb166d77.r51.cf2.rackcdn.com/blank.png' /> </td> </tr> <tr> <td width='50' valign='top'> <img width='50px' style='display: block; margin: 0; padding: 0; border: 0;' src='http://c0185784a2b233b0db9b-d0e5e4adc266f8aacd2ff78abb166d77.r51.cf2.rackcdn.com/blank.png' /> </td> <td width='166' valign='top'> <![endif]--> <table class='column'> <tbody><tr> <td class='text' mc:edit='body_content_col1' width='100%' style='width:100%;'> <p><img style='display: block; height: 1px;' src='./Invitation_files/d0e045e0f607030c9c422653b1988b5b.jpg' alt='' width='151' height='1'></p> <p><a class='green-btn btn-large' href='TokenID'><strong>sign-in</strong></a></p> <br /> </td> </tr> </tbody></table> <!--[if (gte mso 9)|(IE)]> </td> <td width='50' valign='top'> <img width='50px' style='display: block; margin: 0; padding: 0; border: 0;' src='http://c0185784a2b233b0db9b-d0e5e4adc266f8aacd2ff78abb166d77.r51.cf2.rackcdn.com/blank.png' /> </td> </tr> <tr> <td valign='top' height='20'> <img height='20px' style='display: block; margin: 0; padding: 0; border: 0;' src='http://c0185784a2b233b0db9b-d0e5e4adc266f8aacd2ff78abb166d77.r51.cf2.rackcdn.com/blank.png' /> </td> </tr> </table> <![endif]--> </td> </tr> </tbody></table> </td> </tr> </tbody></table> </td> </tr> <tr> <td align='center' valign='top'> <table border='0' cellpadding='0' cellspacing='0' width='100%' id='templateContainerImageFull' style='min-height:15px;'> <tbody><tr> <td valign='top' class='bodyContentImageFull' mc:edit='body_content_01'> <p style='text-align:center;margin:0;padding:0;'> <img src='./Invitation_files/exam-figures-large.jpg' style='display:block;'> </p> </td> </tr> </tbody></table> </td> </tr> <tr> <td align='center' valign='top'> <!-- BEGIN BODY // --> <table border='0' cellpadding='0' cellspacing='0' width='100%' id='templateContainerMiddleBtm'> <tbody><tr> <td valign='top' class='bodyContent' mc:edit='body_content'> <h4>You will then be able to take the exam once the HR activates your individual exam. Please Ensure that you read and understand the instructions carefully.</h4> <h4>HR will detail you on the next steps.</h4> <h4>All the best.</h4> </td> </tr> <tr align='top'> <td valign='top' class='bodyContentImage'> <table border='0' cellpadding='0' cellspacing='0' valign='top'> <tbody><tr> <td align='left' width='50' valign='top' mc:edit='footer_sigimage' style='margin:0;padding:0;'> <p style='margin-bottom:10px' padding:0;display:block;=''> <img src='./Invitation_files/img_profile.jpg' style='display:block;'> </p> </td> <td width='15' align='left' valign='top' style='width:15px;margin:0;padding:0;'>&nbsp;</td> <td align='left' valign='top' mc:edit='footer_sig' style='margin:0;padding-top:10px;line-height:1;'> <h4><strong>EmailFrom</strong></h4> <h5>Business Development at COG</h5> </td> </tr> </tbody></table> </td> </tr> </tbody></table> <!-- // END BODY --> </td> </tr> <tr> <td align='center' valign='top' id='bodyCellFooter' class='unSubContent'> <table width='100%' border='0' cellpadding='0' cellspacing='0' id='templateContainerFooter'> <tbody><tr> <td valign='top' width='100%' mc:edit='footer_unsubscribe'> <!--<p style='text-align:center;'> <img src='./Invitation_files/cog-03.jpg' style='margin:0 auto 0 auto;display:inline-block;'> </p>--> <h6 style='text-align:center;'>All rights reserved - Amiti Software Pvt Ltd.</h6> </td> </tr> </tbody></table> </td> </tr> </tbody></table> <!--[if (gte mso 9)|(IE)]> </td> </tr> </table> <![endif]--> </td> </tr> </tbody></table> <style type='text/css'> /* /\/\/\/\/\/\/\/\/ CLIENT-SPECIFIC STYLES /\/\/\/\/\/\/\/\/ */ #outlook a{padding:0;} /* Force Outlook to provide a 'view in browser' message */ .ReadMsgBody{width:100%;} .ExternalClass{width:100%;} /* Force Hotmail to display emails at full width */ .ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div {line-height: 100%;} /* Force Hotmail to display normal line spacing */ body, table, td, p, a, li, blockquote{-webkit-text-size-adjust:100%; -ms-text-size-adjust:100%;} /* Prevent WebKit and Windows mobile changing default text sizes */ table, td{mso-table-lspace:0pt; mso-table-rspace:0pt;} /* Remove spacing between tables in Outlook 2007 and up */ td ul li {font-size: 16px; } /* /\/\/\/\/\/\/\/\/ RESET STYLES /\/\/\/\/\/\/\/\/ */ body{margin:0; padding:0;} img{max-width:100%; border:0; line-height:100%; outline:none; text-decoration:none; } table{border-collapse:collapse !important;} .content {width: 100%; max-width: 600px;} .content img { height: auto; min-height: 1px; } #bodyTable{margin:0; padding:0; width:100% !important;} #bodyCell{margin:0; padding:0;} #bodyCellFooter{margin: 0; padding: 0; width: 100% !important; padding-top: 25px; padding-bottom: 25px; background-color: #25282f; } body {margin: 0; padding: 0; min-width: 100%!important;} #templateContainerHeader{font-size: 14px; padding-top: 0; padding-bottom: 0; } #templateContainerFootBrd{border-bottom:1px solid #e2e2e2; border-left:1px solid #e2e2e2; border-right:1px solid #e2e2e2; border-radius: 0 0 4px 4px; background-clip: padding-box; border-spacing: 0; height: 10px; width:100% !important; } #templateContainer{border-top:1px solid transparent; border-left:1px solid #e2e2e2; border-right:1px solid #e2e2e2; border-radius: 4px 4px 0 0 ; background-clip: padding-box; border-spacing: 0; } #templateContainerMiddle {border-left:1px solid #e2e2e2; border-right:1px solid #e2e2e2; } #templateContainerMiddleBtm {border-left:1px solid #e2e2e2; border-right:1px solid #e2e2e2; border-bottom:1px solid #e2e2e2; border-radius: 0 0 4px 4px; background-clip: padding-box; border-spacing: 0; } /** * @tab Page * @section heading 1 * @tip Set the styling for all first-level headings in your emails. These should be the largest of your headings. * @style heading 1 */ h1{color:#2e2e2e; display:block; font-family:Helvetica; font-size:26px; line-height:1.385em; font-style:normal; font-weight:normal; letter-spacing:normal; margin-top:0; margin-right:0; margin-bottom:15px; margin-left:0; text-align:left; } /** * @tab Page * @section heading 2 * @tip Set the styling for all second-level headings in your emails. * @style heading 2 */ h2{color:#2e2e2e; display:block; font-family:Helvetica; font-size:22px; line-height:1.455em; font-style:normal; font-weight:normal; letter-spacing:normal; margin-top:0; margin-right:0; margin-bottom:15px; margin-left:0; text-align:left; } /** * @tab Page * @section heading 3 * @tip Set the styling for all third-level headings in your emails. * @style heading 3 */ h3{color:#545454; display:block; font-family:Helvetica; font-size:18px; line-height:1.444em; font-style:normal; font-weight:normal; letter-spacing:normal; margin-top:0; margin-right:0; margin-bottom:15px; margin-left:0; text-align:left; } /** * @tab Page * @section heading 4 * @tip Set the styling for all fourth-level headings in your emails. These should be the smallest of your headings. * @style heading 4 */ h4{color:#545454; display:block; font-family:Helvetica; font-size:14px; line-height:1.571em; font-style:normal; font-weight:normal; letter-spacing:normal; margin-top:0; margin-right:0; margin-bottom:15px; margin-left:0; text-align:left; } h5{color:#545454; display:block; font-family:Helvetica; font-size:13px; line-height:1.538em; font-style:normal; font-weight:normal; letter-spacing:normal; margin-top:0; margin-right:0; margin-bottom:15px; margin-left:0; text-align:left; } h6{color:#545454; display:block; font-family:Helvetica; font-size:12px; line-height:2.000em; font-style:normal; font-weight:normal; letter-spacing:normal; margin-top:0; margin-right:0; margin-bottom:15px; margin-left:0; text-align:left; } p {display:block; font-family:Helvetica; font-size:15px; line-height:1.500em; font-style:normal; font-weight:normal; letter-spacing:normal; margin-top:0; margin-right:0; margin-bottom:0.938em; margin-left:0; text-align: left; color: #56565a; } .textCenter{text-align: center; } .margin-btm-six {margin-bottom: 6px; font-size: 13px; } .fw-lg-20{width: 120px; display: inline-block; } .unSubContent a:visited { color: #a1a1a1; text-decoration:underline; font-weight:normal;} .unSubContent a:focus   { color: #a1a1a1; text-decoration:underline; font-weight:normal;} .unSubContent a:hover   { color: #a1a1a1; text-decoration:underline; font-weight:normal;} .unSubContent a:link   { color: #a1a1a1 ; text-decoration:underline; font-weight:normal;} .unSubContent a .yshortcuts   { color: #a1a1a1 ; text-decoration:underline; font-weight:normal;} .unSubContent h6 {color: #a1a1a1; font-size: 12px; line-height: 1.5em; margin-bottom: 0; } .bodyContent{color:#505050; font-family:Helvetica; font-size:14px; line-height:150%; padding-top: 2.143em; padding-right:3.5em; padding-left:3.5em; padding-bottom:0.714em; text-align:left; } .bodyContentBtns {color:#505050; font-family:Helvetica; font-size:14px; line-height:150%; padding-top:1.357em; padding-bottom:1.357em; padding-right:3.5em; padding-left:3.5em; text-align:center; } .bodyContentBtns p {margin-bottom: 0; } .bodyContentImage {color:#505050; font-family:Helvetica; font-size:14px; line-height:150%; padding-top:0; padding-right:3.571em; padding-left:3.571em; padding-bottom:2em; text-align:left; } .bodyContentImage h4 {color: #4E4E4E; font-size: 13px; line-height: 1.154em; font-weight:normal; margin-bottom: 0; } .bodyContentImage h5 {color: #828282; font-size: 12px; line-height: 1.667em; margin-bottom: 0; } a:visited { color: #3386e4; text-decoration:none;} a:focus   { color: #3386e4; text-decoration:none;} a:hover   { color: #3386e4; text-decoration:none;} a:link   { color: #3386e4 ; text-decoration:none;} a .yshortcuts   { color: #3386e4 ; text-decoration:none;} .bodyContent img{height:auto; max-width:498px; } .footerContent{color:#808080; font-family:Helvetica; font-size:10px; line-height:150%; padding-top:2.000em; padding-right:2.000em; padding-bottom:2.000em; padding-left:2.000em; text-align:left; } .footerContent a:link, .footerContent a:visited, /* Yahoo! Mail Override */ .footerContent a .yshortcuts, .footerContent a span /* Yahoo! Mail Override */{color:#606060; font-weight:normal; text-decoration:underline; } #templateContainerImageFull { border-left:1px solid #e2e2e2; border-right:1px solid #e2e2e2; } .bodyContentImageFull p { font-size:0 !important; margin-bottom: 0 !important; } .brdBottomPadd-lg { border-bottom: 1px solid #f0f0f0; } .brdBottomPadd-lg .bodyContent { padding-bottom: 2.286em; } .brdBottomPadd { border-bottom: 1px solid #f0f0f0; } .brdBottomPadd .bodyContent { padding-bottom: 0em; } a.btn-large {display: block !important; width: 100%; margin-top: 0 !important; text-align: center !important; } a.green-btn {background: #5098ea; display: inline-block; color: #FFFFFF; border-top:10px solid #5098ea; border-bottom:10px solid #5098ea; text-decoration: none; font-size: 14px; margin-top: 1.0em; border-radius: 3px 3px 3px 3px; background-clip: padding-box; } a.green-btn:hover{background: #3cd278; color: #FFFFFF; border-top:10px solid #3cd278; border-bottom:10px solid #3cd278; } a.grey-btn {background: #c0c0c0; display: inline-block; color: #FFFFFF; border-top:10px solid #c0c0c0; border-bottom:10px solid #c0c0c0; text-decoration: none; font-size: 14px; margin-top: 1.0em; border-radius: 3px 3px 3px 3px; background-clip: padding-box; } a.blue-btn{background: #2ca7d3; display: inline-block; color: #FFFFFF; border-top:10px solid #c0c0c0; border-bottom:10px solid #c0c0c0; text-decoration: none; font-size: 14px; margin-top: 1.0em; border-radius: 3px 3px 3px 3px; background-clip: padding-box; } a.red-btn {background: #e05555; display: inline-block; color: #FFFFFF; border-top:10px solid #e05555; border-bottom:10px solid #e05555; text-decoration: none; font-size: 14px; margin-top: 1.0em; border-radius: 3px 3px 3px 3px; background-clip: padding-box; } .bodyContentNewsLetterDate {color:#505050; font-family:Helvetica; font-size:14px; line-height:150%; padding-top:1.571em; padding-right:1.714em; padding-left:1.714em; padding-bottom:0; text-align:left; } .bodyContentNewsLetter {color:#505050; font-family:Helvetica; font-size:14px; line-height:150%; padding-top:0em; padding-right:3.5em; padding-left:3.5em; padding-bottom:0.714em; text-align:left; } .two-column {text-align: center; font-size: 0; } .two-column img {max-width: 100%; } .two-column .column {width: 100%; max-width: 33%; display: inline-block; vertical-align: top; color:#505050; font-family:Helvetica; font-size:14px; line-height:150%; margin-bottom: 0em; text-align: center; } .two-column .text {padding: 0 0.500em; } .two-column .columnspace {width: 100%; max-width: 8%; display: inline-block; vertical-align: top; color:#505050; font-family:Helvetica; font-size:14px; line-height:150%; } @media only screen and (max-width: 480px), screen and (max-device-width: 480px) {h1 {font-size:34px !important; } h2{font-size:30px !important; } h3{font-size:24px !important; } h4{font-size:18px !important; } h5{font-size:16px !important; } h6{font-size:14px !important; } p {font-size: 18px !important; } .brdBottomPadd .bodyContent { padding-bottom: 0em !important; } .brdBottomPadd-lg .bodyContent { padding-bottom: 2.286em !important; } .bodyContent { padding: 6% 5% 1% 6% !important; } td[class='bodyContentBtns'] { padding: 5% 6% 5% 6% !important; } .bodyContentNewsLetter { padding: 6% 5% 2% 6% !important; } .bodyContent img {max-width: 100% !important; } .bodyContentImage {padding: 3% 6% 6% 6% !important; } .bodyContentImage img {max-width: 100% !important; } .bodyContentImage h4 {font-size: 16px !important; } .bodyContentImage h5 {font-size: 15px !important; margin-top:0; } .bodyContentNewsLetterDate h5 {font-size: 14px !important; } } @media only screen and (max-width: 550px), screen and (max-device-width: 550px) {body[yahoo] .hide {display: none!important;} body[yahoo] .buttonwrapper {background-color: transparent!important;} body[yahoo] .button {padding: 0px!important;} body[yahoo] .button a {background-color: #e05443; padding: 15px 15px 13px!important;} body[yahoo] .unsubscribe { font-size: 14px; display: block; margin-top: 0.714em; padding: 10px 50px; background: #2f3942; border-radius: 5px; text-decoration: none!important;} } </style> </body></html>tml>"
        console.log(mailBody);

        var mailAddress = [];
        var mailAddr = form.value.queryResults;
        mailAddress = mailAddr.split(',');

        this.emailData = {
            emails: ["ashok@amitisoft.com", "kiran@amitisoft.com"],
            emailSubject: form.value.subject,
            jobPosition: form.value.singleSelect,
            emailBody: form.value.mailbody,
            category: form.value.categorySelected,
            emailTemplate: mailBody
        };

        console.log(this.emailData);


        this.autoCompleteService.sendEmail(this.emailData).subscribe(
            (data) => { },
            (error) => {
                this.formReset(frm);
                this.errorNotification();
            },
            () => {
                this.formReset(frm);
                // this.questionSuccessStatus = true;             
                this.successrNotification();
            }
        );
    }


    // ---------------------- Form Reset begins ---------------------
    formReset(form:NgForm){
        this.categoryQueryResults = '';
        this.queryResults = '';
        this.selected = [];
        this.categorySelected = [];
        document.getElementsByClassName('fr-element fr-view')[0].innerHTML = '';
        form.reset();
        //this.notificationShow('questionFailureStatus', 'true', 'failure-alert');
        // window.scrollTo(0,0);
        this._window.scrollTo(0,0);  
    }

        
    // ---------------------- Notification plugin Call begins ---------------------
    public options = {
      timeOut: 0,
      lastOnBottom: true
    };
    errorNotification(){
        this._notificationService.error(
            'Warning!',
            'The email was not sent to below people for some internal problems.',
            {
                showProgressBar: true,
                pauseOnHover: true,
                clickToClose: true,
                maxLength: 0
            }
        )
    }
    successrNotification(){
        this._notificationService.success(
            'Success!',
            'The email was successfully sent.',
            {
                showProgressBar: true,
                pauseOnHover: true,
                timeOut: 2000,
                clickToClose: true,
                maxLength: 0
            }
        )
    }

    
    // ---------------------- Notification custom function -Old begins ---------------------
    notificationShow(questionSuccessFailureStatus, notificationFlag, idName){
        this[questionSuccessFailureStatus] = notificationFlag;
        /*$("#'+idName+'").alert();
        $("#'+idName+'").fadeTo(2000, 500).slideUp(500, function(){
            $("#'+idName+'").slideUp(500);
        });*/   
    }

}