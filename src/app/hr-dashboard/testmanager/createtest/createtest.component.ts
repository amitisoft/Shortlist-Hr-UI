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

@Component({
    selector: 'amiti-createtest',
  templateUrl: './createtest.component.html',
  styleUrls: ['./createtest.component.css'],
  providers: [CreateTestService]
})
export class CreatetestComponent implements OnInit {
    items: any[] = []; // for getting array
    emailData = [];
    getData: any;
    convertedEmailData = [];
    saveStatus: boolean = false;
    listOfSelectedEmails = [];
    arrayOfSelectedEmails = [];
    constructor(private autoCompleteService: CreateTestService, myElement: ElementRef) {
        this.elementRef = myElement;
    }

    ngOnInit() {

    }

    addEmail(form: NgForm) {
        this.emailData.push({
            emails: form.value.emailTextArea
        });
        this.autoCompleteService.saveEmail(this.emailData).subscribe(
            (response) => {
                if (response.status == 200) {
                    this.saveStatus = true;
                }
            }
        );

    }

    sendTestLink(form: NgForm) {
        this.arrayOfSelectedEmails = form.value.queryResults.split(',');
        this.listOfSelectedEmails.push({
            listedEmails: form.value.queryResults
        });
        this.autoCompleteService.sendEmail(this.listOfSelectedEmails).subscribe(
            (response) => {
                if (response.status == 200) {
                    this.saveStatus = true;
                }
            }
        );
    }

    getEmail() {
        const myArray = [];
        this.autoCompleteService.getEmail().subscribe(
            data => {
                for (let key in data) {
                    myArray.push(data[key][0].emails);
                }
                this.items = myArray;
            }
        );

        console.log(this.items);
    }

    public query = '';
    public countries = [];
    public filteredList = [];
    public elementRef;
    public selected = [];
    queryResults: any;
    public sampleSelect = ['hi', 'hello'];

    /* constructor(myElement: ElementRef) {
         this.elementRef = myElement;
     }*/

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
        this.countries = this.items;
        if (this.query !== "") {
            this.filteredList = this.countries.filter(function (el) {
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

}

