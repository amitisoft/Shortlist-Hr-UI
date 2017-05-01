//import { Component, OnInit } from '@angular/core';

//@Component({
//  selector: 'amiti-createtest',
//  templateUrl: './createtest.component.html',
//  styleUrls: ['./createtest.component.css']
//})
//export class CreatetestComponent implements OnInit {

//  constructor() { }

//  ngOnInit() {
//  }

//}


import { Component, OnInit, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CreateTestService } from './createtest.service';
import { Response } from '@angular/http';
import { CategorymanagerService } from '../../categorymanager/categorymanager.service';
import { CreatetestProperties } from './createtest.properties';

@Component({
    selector: 'amiti-createtest',
  templateUrl: './createtest.component.html',
  styleUrls: ['./createtest.component.css'],
  providers: [CreateTestService,CreatetestProperties]
})

export class CreatetestComponent implements OnInit {
    items: any[] = []; // for getting array
    categoryItems:any=[];
    emailData:any;
    getData: any;
    convertedEmailData = [];
    saveStatus: boolean = false;
    listOfSelectedEmails = [];
    arrayOfSelectedEmails = [];
    queryResults: any;
    categoryQueryResults: any;
    constructor(private autoCompleteService: CreateTestService,
        myElement: ElementRef, private categoryManagerService: CategorymanagerService) {
        this.elementRef = myElement;
    }

    ngOnInit() {

    }

    sendTestLink(form:NgForm){
        if(!form.value.queryResults || !form.value.subject || !form.value.singleSelect || !form.value.mailbody || !form.value.categoryQueryResults){
            alert('Please provide required inputs');
            return false;
        }

        this.emailData = {
            emailsList: form.value.queryResults,
            emailSubject : form.value.subject,
            postApplied : form.value.singleSelect,
            emailBody:form.value.mailbody,
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

    public query = '';
    public emailsList = [];
    public filteredList = [];
    public elementRef;
    public selected = [];

     //auto complete for email starts here

    filter() {
        const myArray = [];
        this.autoCompleteService.getEmail().subscribe(
            data => {
                for (let key in data) {
                    myArray.push(data[key][0].emails);
                }
                this.items = myArray;
            }
        );
        this.emailsList = this.items;
        if (this.query !== "") {
            this.filteredList = this.emailsList.filter(function (el) {
                return el.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
            }.bind(this));
        } else {
            this.filteredList = [];
        }
    }

    select(item) {
        this.selected.push(item);
        this.query = '';
        this.filteredList = [];
        this.queryResults = this.selected.toString();
        console.log(this.selected.toString());
    }

    remove(item) {
        this.selected.splice(this.selected.indexOf(item), 1);
        this.queryResults = this.selected.toString();
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

    //auto complete for email ends here


    //auto complete for category starts here
    public categoryQuery = '';
    public categoryList = [];
    public categoryFilteredList = [];
    public categoryElementRef;
    public categorySelected = [];

    categoryFilter() {
        const myCategoryArray = [];
        this.categoryManagerService.getOwnData().subscribe(
            data => {
                for (let key in data) {
                    if(data[key].CATEGORYNAME){
                        myCategoryArray.push(data[key].CATEGORYNAME);
                    }
                }
                this.categoryItems = myCategoryArray;
            }
        );
        this.categoryList = this.categoryItems;
        if (this.categoryQuery !== "") {
            this.categoryFilteredList = this.categoryList.filter(function (el) {
                return el.toLowerCase().indexOf(this.categoryQuery.toLowerCase()) > -1;
            }.bind(this));
        } else {
            this.categoryFilteredList = [];
        }
    }
    selectCategory(item) {
        this.categorySelected.push(item);
        this.categoryQuery = '';
        this.categoryFilteredList = [];
        this.categoryQueryResults = this.categorySelected.toString();
        console.log(this.categorySelected.toString());
    }

    removeCategory(item) {
        this.categorySelected.splice(this.categorySelected.indexOf(item), 1);
        this.categoryQueryResults = this.categorySelected.toString();
    }

    //auto complete for category ends here
}
