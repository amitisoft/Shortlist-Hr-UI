import { Component, OnInit } from '@angular/core';
import { CategorymanagerService } from '../../categorymanager/categorymanager.service';

import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'amiti-createquestion',
  templateUrl: './createquestion.component.html',
  styleUrls: ['./createquestion.component.css']
})
export class CreatequestionComponent implements OnInit {

    items: any[] = [];

    constructor(private categoryMngService: CategorymanagerService, private http: Http) { }

  ngOnInit() {

      this.categoryMngService.getOwnData()
          .subscribe(
          //for loopping // data => this.items = data
          data => {
              const myArray = [];
              for (let key in data) {
                  myArray.push(data[key]);
              }
              this.items = myArray;
          }
          );
  }


  questionData = [];

  show1: boolean = false;
  show2: boolean = false;
  show3: boolean = false;
  show4: boolean = false;

  option1: any;
  option2: any;
  option3: any;
  option4: any;
  question: any;

  correctOptions = [];

  //constructor() { }

 

  addQuestion(form: NgForm) {

      console.log(form.value.singleSelect);

      if (!this.question || !this.option1 || !this.option2 || !this.option3 || !this.option4) {
          alert('please provide required fields');
          return false;
      }

      if (!form.value.option1IsCorrect && !form.value.option2IsCorrect && !form.value.option3IsCorrect && !form.value.option4IsCorrect) {
          alert('please select one checkbox');
          return false;
      }

      if (!form.value.singleSelect){
          alert('Select atleast one category ');
          return false;
      }

      this.correctOptions.push({
          option1: form.value.option1IsCorrect,
          option2: form.value.option2IsCorrect,
          option3: form.value.option3IsCorrect,
          option4: form.value.option4IsCorrect
      });

      this.questionData.push({
          question: form.value.question,
          option1: form.value.option1,
          option2: form.value.option2,
          option3: form.value.option3,
          option4: form.value.option4,
          category: form.value.singleSelect,
          correctoptions: this.correctOptions
      });

      console.log(this.questionData);
      this.http.post(' https://amitionlinetest.firebaseio.com/createquestion.json', this.questionData).subscribe(
          (response) => alert('Question Added'),
          (error) => console.log(error)
      );

      

  }

  showOption1(e) {
      if (e.target.checked) {
          this.option1 = this.option1;
          this.show1 = true;
      } else {
          this.show1 = false;
      }
  }

  showOption2(e) {
      if (e.target.checked) {
          this.option2 = this.option2;
          this.show2 = true;
      } else {
          this.show2 = false;
      }
  }

  showOption3(e) {
      if (e.target.checked) {
          this.option3 = this.option3;
          this.show3 = true;
      } else {
          this.show3 = false;
      }
  }

  showOption4(e) {
      if (e.target.checked) {
          this.option4 = this.option4;
          this.show4 = true;
      } else {
          this.show4 = false;
      }
  }


}
