import { Component, OnInit, ElementRef } from '@angular/core';
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
    emailsList:any = [];
    allCategoriesArray = [];
    private _window: Window;   
    private selected = [];
    private categoryList = [];
    private categoryFilteredList = [];
    private categoryElementRef;
    private categorySelected = [];

    constructor(private autoCompleteService: CreateTestService, private categoryManagerService: CategorymanagerService, windowRef: WindowRefService, private _notificationService: NotificationsService, private elementRef: ElementRef) {      
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
        this.categoryManagerService.getOwnData().subscribe(
            data => {
                for (let key in data) {
                    if(data[key]['categoryname']){
                        this.allCategoriesArray.push(data[key]['categoryname']);
                    }
                }   
                this.categoryList = this.allCategoriesArray;                        
            }
        );
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

    wrapFunction(form:NgForm){
        var frm = form;
        // var sendExamLinkMail = this.elementRef.nativeElement.select("#sendExamLink");
        var sendExamLinkMail = <HTMLInputElement>document.getElementById("sendExamLink");
        console.log(sendExamLinkMail);
        var mailBody = "<html><head><style>#outlook a{padding:0;} .ReadMsgBody{width:100%;} .ExternalClass{width:100%;} .ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div{line-height:100%;} body, table, td, p, a, li, blockquote{-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;} table, td{mso-table-lspace:0pt;mso-table-rspace:0pt;} td ul li{font-size:16px;} body{margin:0;padding:0;} img{max-width:100%;border:0;line-height:100%;outline:none;text-decoration:none;} table{border-collapse:collapse !important;} .content{width:100%;max-width:600px;} .content img{height:auto;min-height:1px;} #bodyTable{margin:0;padding:0;width:100% !important;} #bodyCell{margin:0;padding:0;} #bodyCellFooter{margin:0;padding:0;width:100% !important;padding-top:25px;padding-bottom:25px;background-color:#25282f;} body{margin:0;padding:0;min-width:100%!important;} #templateContainerHeader{font-size:14px;padding-top:0;padding-bottom:0;} #templateContainerFootBrd{border-bottom:1px solid #e2e2e2;border-left:1px solid #e2e2e2;border-right:1px solid #e2e2e2;border-radius:0 0 4px 4px;background-clip:padding-box;border-spacing:0;height:10px;width:100% !important;} #templateContainer{border-top:1px solid transparent;border-left:1px solid #e2e2e2;border-right:1px solid #e2e2e2;border-radius:4px 4px 0 0;background-clip:padding-box;border-spacing:0;} #templateContainerMiddle{border-left:1px solid #e2e2e2;border-right:1px solid #e2e2e2;} #templateContainerMiddleBtm{border-left:1px solid #e2e2e2;border-right:1px solid #e2e2e2;border-bottom:1px solid #e2e2e2;border-radius:0 0 4px 4px;background-clip:padding-box;border-spacing:0;} h1{color:#2e2e2e;display:block;font-family:Helvetica;font-size:26px;line-height:1.385em;font-style:normal;font-weight:normal;letter-spacing:normal;margin-top:0;margin-right:0;margin-bottom:15px;margin-left:0;text-align:left;} h2{color:#2e2e2e;display:block;font-family:Helvetica;font-size:22px;line-height:1.455em;font-style:normal;font-weight:normal;letter-spacing:normal;margin-top:0;margin-right:0;margin-bottom:15px;margin-left:0;text-align:left;} h3{color:#545454;display:block;font-family:Helvetica;font-size:18px;line-height:1.444em;font-style:normal;font-weight:normal;letter-spacing:normal;margin-top:0;margin-right:0;margin-bottom:15px;margin-left:0;text-align:left;} h4{color:#545454;display:block;font-family:Helvetica;font-size:14px;line-height:1.571em;font-style:normal;font-weight:normal;letter-spacing:normal;margin-top:0;margin-right:0;margin-bottom:15px;margin-left:0;text-align:left;} h5{color:#545454;display:block;font-family:Helvetica;font-size:13px;line-height:1.538em;font-style:normal;font-weight:normal;letter-spacing:normal;margin-top:0;margin-right:0;margin-bottom:15px;margin-left:0;text-align:left;} h6{color:#545454;display:block;font-family:Helvetica;font-size:12px;line-height:2.000em;font-style:normal;font-weight:normal;letter-spacing:normal;margin-top:0;margin-right:0;margin-bottom:15px;margin-left:0;text-align:left;} p{display:block;font-family:Helvetica;font-size:15px;line-height:1.500em;font-style:normal;font-weight:normal;letter-spacing:normal;margin-top:0;margin-right:0;margin-bottom:0.938em;margin-left:0;text-align:left;color:#56565a;} .textCenter{text-align:center;}.margin-btm-six{margin-bottom:6px;font-size:13px;} .fw-lg-20{width:120px;display:inline-block;} .unSubContent a:visited{color:#a1a1a1;text-decoration:underline;font-weight:normal;} .unSubContent a:focus{color:#a1a1a1;text-decoration:underline;font-weight:normal;} .unSubContent a:hover{color:#a1a1a1;text-decoration:underline;font-weight:normal;} .unSubContent a:link{color:#a1a1a1;text-decoration:underline;font-weight:normal;} .unSubContent a .yshortcuts{color:#a1a1a1;text-decoration:underline;font-weight:normal;} .unSubContent h6{color:#a1a1a1;font-size:12px;line-height:1.5em;margin-bottom:0;} .bodyContent{color:#505050;font-family:Helvetica;font-size:14px;line-height:150%;padding-top:2.143em;padding-right:3.5em;padding-left:3.5em;padding-bottom:0.714em;text-align:left;} .bodyContentBtns{color:#505050;font-family:Helvetica;font-size:14px;line-height:150%;padding-top:1.357em;padding-bottom:1.357em;padding-right:3.5em;padding-left:3.5em;text-align:center;} .bodyContentBtns p{margin-bottom:0;} .bodyContentImage{color:#505050;font-family:Helvetica;font-size:14px;line-height:150%;padding-top:0;padding-right:3.571em;padding-left:3.571em;padding-bottom:2em;text-align:left;} .bodyContentImage h4{color:#4E4E4E;font-size:13px;line-height:1.154em;font-weight:normal;margin-bottom:0;} .bodyContentImage h5{color:#828282;font-size:12px;line-height:1.667em;margin-bottom:0;} a:visited{color:#3386e4;text-decoration:none;} a:focus{color:#3386e4;text-decoration:none;} a:hover{color:#3386e4;text-decoration:none;} a:link{color:#3386e4;text-decoration:none;} a .yshortcuts{color:#3386e4;text-decoration:none;} .bodyContent img{height:auto;max-width:498px;} .footerContent{color:#808080;font-family:Helvetica;font-size:10px;line-height:150%;padding-top:2.000em;padding-right:2.000em;padding-bottom:2.000em;padding-left:2.000em;text-align:left;} .footerContent a:link, .footerContent a:visited, .footerContent a .yshortcuts, .footerContent a span{color:#606060;font-weight:normal;text-decoration:underline;} #templateContainerImageFull{border-left:1px solid #e2e2e2;border-right:1px solid #e2e2e2;} .bodyContentImageFull p{font-size:0 !important;margin-bottom:0 !important;} .brdBottomPadd-lg{border-bottom:1px solid #f0f0f0;} .brdBottomPadd-lg .bodyContent{padding-bottom:2.286em;} .brdBottomPadd{border-bottom:1px solid #f0f0f0;} .brdBottomPadd .bodyContent{padding-bottom:0em;} a.btn-large{display:block !important;width:100%;margin-top:0 !important;text-align:center !important;} a.green-btn{background:#5098ea;display:inline-block;color:#FFFFFF;border-top:10px solid #5098ea;border-bottom:10px solid #5098ea;text-decoration:none;font-size:14px;margin-top:1.0em;border-radius:3px 3px 3px 3px;background-clip:padding-box;} a.green-btn:hover{background:#3cd278;color:#FFFFFF;border-top:10px solid #3cd278;border-bottom:10px solid #3cd278;} a.grey-btn{background:#c0c0c0;display:inline-block;color:#FFFFFF;border-top:10px solid #c0c0c0;border-bottom:10px solid #c0c0c0;text-decoration:none;font-size:14px;margin-top:1.0em;border-radius:3px 3px 3px 3px;background-clip:padding-box;} a.blue-btn{background:#2ca7d3;display:inline-block;color:#FFFFFF;border-top:10px solid #c0c0c0;border-bottom:10px solid #c0c0c0;text-decoration:none;font-size:14px;margin-top:1.0em;border-radius:3px 3px 3px 3px;background-clip:padding-box;} a.red-btn{background:#e05555;display:inline-block;color:#FFFFFF;border-top:10px solid #e05555;border-bottom:10px solid #e05555;text-decoration:none;font-size:14px;margin-top:1.0em;border-radius:3px 3px 3px 3px;background-clip:padding-box;} .bodyContentNewsLetterDate{color:#505050;font-family:Helvetica;font-size:14px;line-height:150%;padding-top:1.571em;padding-right:1.714em;padding-left:1.714em;padding-bottom:0;text-align:left;} .bodyContentNewsLetter{color:#505050;font-family:Helvetica;font-size:14px;line-height:150%;padding-top:0em;padding-right:3.5em;padding-left:3.5em;padding-bottom:0.714em;text-align:left;} .two-column{text-align:center;font-size:0;} .two-column img{max-width:100%;} .two-column .column{width:100%;max-width:33%;display:inline-block;vertical-align:top;color:#505050;font-family:Helvetica;font-size:14px;line-height:150%;margin-bottom:0em;text-align:center;} .two-column .text{padding:0 0.500em;} .two-column .columnspace{width:100%;max-width:8%;display:inline-block;vertical-align:top;color:#505050;font-family:Helvetica;font-size:14px;line-height:150%;} @media only screen and (max-width:480px), screen and (max-device-width:480px){h1{font-size:34px !important;} h2{font-size:30px !important;} h3{font-size:24px !important;} h4{font-size:18px !important;} h5{font-size:16px !important;} h6{font-size:14px !important;} p{font-size:18px !important;} .brdBottomPadd .bodyContent{padding-bottom:0em !important;} .brdBottomPadd-lg .bodyContent{padding-bottom:2.286em !important;} .bodyContent{padding:6% 5% 1% 6% !important;} td[class='bodyContentBtns']{padding:5% 6% 5% 6% !important;} .bodyContentNewsLetter{padding:6% 5% 2% 6% !important;} .bodyContent img{max-width:100% !important;} .bodyContentImage{padding:3% 6% 6% 6% !important;} .bodyContentImage img{max-width:100% !important;} .bodyContentImage h4{font-size:16px !important;} .bodyContentImage h5{font-size:15px !important;margin-top:0;} .bodyContentNewsLetterDate h5{font-size:14px !important;} } @media only screen and (max-width:550px), screen and (max-device-width:550px){body[yahoo] .hide{display:none!important;} body[yahoo] .buttonwrapper{background-color:transparent!important;} body[yahoo] .button{padding:0px!important;} body[yahoo] .button a{background-color:#e05443;padding:15px 15px 13px!important;} body[yahoo] .unsubscribe{font-size:14px;display:block;margin-top:0.714em;padding:10px 50px;background:#2f3942;border-radius:5px;text-decoration:none!important;} }</style></head><body>"+sendExamLinkMail.innerHTML+"</body></html>";      
        console.log(mailBody);  

        var mailAddress = [];
        var mailAddr = form.value.queryResults;
        mailAddress = mailAddr.split(',');  

        this.emailData = {
            "body":{
                emails: mailAddress,
                emailsubject : form.value.subject,
                jobPosition : form.value.singleSelect,
                emailbody:form.value.mailbody,
                category:form.value.categoryQueryResults,
                sendExamLinkBody: mailBody
            }            
        };

        console.log(this.emailData);

        
        this.autoCompleteService.sendEmail(this.emailData).subscribe(
            (data) => {},
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