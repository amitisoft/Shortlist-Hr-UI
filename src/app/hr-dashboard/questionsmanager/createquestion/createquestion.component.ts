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

  option1Value: any;
  option2Value: any;
  option3Value: any;
  option4Value: any;

  question: any;
  option:any;
  show: boolean = false;


  correctOptions = [];

  multipleAnswers:any;

  checkbox1IsValid:boolean = false;
  checkbox2IsValid:boolean = false;
  checkbox3IsValid:boolean = false;
  checkbox4IsValid:boolean = false;
  checkboxIsValid:boolean = false;

  //constructor() { }

 

  addQuestion(form: NgForm) {
      if (!this.question || !this.option1Value || !this.option2Value || !this.option3Value || !this.option4Value) {
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
          Qsn: form.value.question,
          Option1: form.value.option1Value,
          Option2: form.value.option2Value,
          Option3: form.value.option3Value,
          Option4: form.value.option4Value,
          Category: form.value.singleSelect,
          Crct_ans: this.correctOptions,
          Multi_flag: this.multipleAnswers
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

  showOption(option,e) {
      if (e.target.checked) {
         this['option'+option] = this['option'+option+'Value'];
         this['show'+option] = true;
         this['checkbox'+option+'IsValid'] = true;
      } else {
           this['show'+option] = false;
           this['checkbox'+option+'IsValid'] = false;
      }
      if(this.checkbox1IsValid||this.checkbox2IsValid||this.checkbox3IsValid||this.checkbox4IsValid){
        this.checkboxIsValid = true;
      }else{
        this.checkboxIsValid = false;
      }
  }


}
