import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CategorymanagerService } from '../../categorymanager/categorymanager.service';
import { Http } from '@angular/http';

@Component({
  selector: 'amiti-viewquestions',
  templateUrl: './viewquestions.component.html',
  styleUrls: ['./viewquestions.component.css']
})
export class ViewquestionsComponent implements OnInit {


    items: any[] = [];
    questions: any[] = [];

    createQuestionClicked: boolean = false;

    constructor(private router: Router, private route: ActivatedRoute,
        private categoryMngService: CategorymanagerService , private http: Http) { }

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

        return this.http.get(' https://amitionlinetest.firebaseio.com/createquestion.json')
            .map(response => response.json())
            .subscribe(
            data => {
                const myArray = [];
                for (let key in data) {
                    myArray.push(data[key]);
                }
                this.questions = myArray;
                console.log(this.questions);
            }
            );

  }

  onCreateQuestions(clicked: boolean) {
     
      this.router.navigate(['createquestion'], { relativeTo: this.route });
      this.createQuestionClicked = clicked;
  }



}
