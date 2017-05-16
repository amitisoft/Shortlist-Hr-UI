import { Component, OnInit, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CreateTestService } from './createtest.service';
import { Response } from '@angular/http';
import { CategorymanagerService } from '../../categorymanager/categorymanager.service';

@Component({
    selector: 'amiti-createtest',
  templateUrl: './createtest.component.html',
  styleUrls: ['./createtest.component.css'],
  providers: [CreateTestService]
})

export class CreatetestComponent implements OnInit {
    categoryItems:any=[];
    emailData:any;
    getData: any;
    convertedEmailData = [];
    saveStatus: boolean = false;
    listOfSelectedEmails = [];
    arrayOfSelectedEmails = [];
    queryResults: any;
    categoryQueryResults: any;
    allEmailsArray = [];
    allCategoriesArray = [];
    constructor(private autoCompleteService: CreateTestService,
        myElement: ElementRef, private categoryManagerService: CategorymanagerService) {
        this.elementRef = myElement;
    }

    ngOnInit() {
        //Getting all registered user emails 
        this.autoCompleteService.getEmail().subscribe(
            data => {
                for (let key in data) {
                    this.allEmailsArray.push(data[key][0].emails);
                }
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
                this.categoryItems = this.allCategoriesArray;
            }
        );
    }

    sendTestLink(form:NgForm){
        var frm = form;
/*        if(!form.value.queryResults || !form.value.subject || !form.value.singleSelect || !form.value.mailbody || !form.value.categoryQueryResults){
            alert('Please provide required inputs');
            return false;
        }*/

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
            this.emailData = {
                emails: form.value.queryResults,
                emailsubject : form.value.subject,
                jobPosition : form.value.singleSelect,
                emailbody:form.value.mailbody,
                category:form.value.categoryQueryResults
            };

            this.autoCompleteService.sendEmail(this.emailData).subscribe(
                (response) => {
                    if (response.status == 200) {
                        this.saveStatus = true;
                        alert('data submitted auccessfully');
                        this.categoryQueryResults = '';
                        this.queryResults = '';
                        this.selected = [];
                        this.categorySelected = [];
                        document.getElementsByClassName('fr-element fr-view')[0].innerHTML = '';
                        form.reset();
                    }
                }
            );
        }

    private query = '';
    private emailsList = [];
    private filteredList = [];
    private elementRef;
    private selected = [];

    private categoryQuery = '';
    private categoryList = [];
    private categoryFilteredList = [];
    private categoryElementRef;
    private categorySelected = [];

     //auto complete code starts here

    filter(emails,query,filteredList,emailsList) {
    
        this.emailsList = this.allEmailsArray;
        this.categoryList = this.allCategoriesArray;
        if (this[query] !== "") {
            this[filteredList] = this[emailsList].filter(function (el) {
                return el.toLowerCase().indexOf(this[query].toLowerCase()) > -1;
            }.bind(this));
        } else {
            this[filteredList] = [];
        }
    }

/*    filter(emailsParam,queryParam,filteredListParam,emailsListParam) {
    
        this.emailsList = this.allEmailsArray;
        this.categoryList = this.allCategoriesArray;
        if (this[queryParam] !== "") {
            this[filteredListParam] = this[emailsParam].filter(function (el) {
                return el.toLowerCase().indexOf(this[queryParam].toLowerCase()) > -1;
            }.bind(this));
        } else {
            this[filteredListParam] = [];
        }
    }*/

    select(item,query,selected,filteredList,queryResults, catEmailList) {
        this[selected].push(item);
        this[catEmailList].splice(this[catEmailList].indexOf(item), 1);
        this[query] = '';
        this[filteredList] = [];
        this[queryResults] = this[selected].toString();
    }

/*    select(item,query,selected,filteredList,queryResults) {
        for(let x in this[selected]){
            if(x === item){
                alert("This Email is already selected.");
            }
            else{
                this[selected].push(item);
            }
        }
        this[query] = '';
        this[filteredList] = [];
        this[queryResults] = this[selected].toString();
    }*/

    remove(item,selected,queryResults, catEmailList) {
        this[selected].splice(this[selected].indexOf(item), 1);
        this[catEmailList].push(item);
        this[queryResults] = this[selected].toString();
    }

    handleClick(event) {
        var clickedComponent = event.target;
        var inside = false;
        do {
            if (clickedComponent === this.elementRef.nativeElement) {
                inside = true;
            }
            clickedComponent = clickedComponent.parentNode;
        } while (clickedComponent);
        if (!inside) {
            this.filteredList = [];
        }
    }

    //auto complete code ends here
}
