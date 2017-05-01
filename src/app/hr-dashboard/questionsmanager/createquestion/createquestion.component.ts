import { Component, OnInit } from '@angular/core';
import { CategorymanagerService } from '../../categorymanager/categorymanager.service';
import { CreateQuestionService } from './createquestion.service';
import { CreateQuestionProperties } from './createquestion.properties';

import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'amiti-createquestion',
  templateUrl: './createquestion.component.html',
  styleUrls: ['./createquestion.component.css'],
  providers:[CreateQuestionService,CreateQuestionProperties]
})
export class CreatequestionComponent implements OnInit {

  items: any[] = [];

  constructor(private categoryMngService: CategorymanagerService,
      private http: Http, private createQuestion: CreateQuestionService) { }

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


  questionData:any;

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

  multipleAnswers:any;

  //constructor() { }

 

  addQuestion(form: NgForm) {

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

      this.correctOptions = [];

      if(form.value.option1IsCorrect){
        this.correctOptions.push(
          'option1'
        );
      }
      if(form.value.option2IsCorrect){
        this.correctOptions.push(
          'option2'
        );
      }
      if(form.value.option3IsCorrect){
        this.correctOptions.push(
          'option3'
        );
      }
      if(form.value.option4IsCorrect){
        this.correctOptions.push(
          'option4'
        );
      }

      if(this.correctOptions.length>1){
        this.multipleAnswers = true;
      }else{
        this.multipleAnswers = false;
      }

      this.questionData = {
        question: form.value.question,
        option1: form.value.option1,
        option2: form.value.option2,
        option3: form.value.option3,
        option4: form.value.option4,
        category: form.value.singleSelect,
        correctoptions: this.correctOptions,
        multipleAnswers: this.multipleAnswers
      };

      this.createQuestion.saveQuestion(this.questionData)
          .subscribe(
        (response) => {
                if (response.status == 200) {
                    alert('data submitted auccessfully');
                    form.reset();
                    this.show1 = false;
                    this.show2 = false;
                    this.show3 = false;
                    this.show4 = false;
                }
        }
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
