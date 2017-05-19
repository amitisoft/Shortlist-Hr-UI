import { Component, OnInit } from '@angular/core';
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

    constructor(private autoCompleteService: CreateTestService, private categoryManagerService: CategorymanagerService, windowRef: WindowRefService, private _notificationService: NotificationsService) {      
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
        this.emailData = {
            emails: form.value.queryResults,
            emailsubject : form.value.subject,
            jobPosition : form.value.singleSelect,
            emailbody:form.value.mailbody,
            category:form.value.categoryQueryResults
        };
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