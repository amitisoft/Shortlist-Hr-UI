import { Component, OnInit } from '@angular/core';
import { CategorymanagerService } from '../../categorymanager/categorymanager.service';
import { ViewpapersService } from './viewpapers.service';

@Component({
  selector: 'amiti-viewpapers',
  templateUrl: './viewpapers.component.html',
  styleUrls: ['./viewpapers.component.css'],
  providers: [ViewpapersService]
})
export class ViewpapersComponent implements OnInit {
    items: any[] = [];
    category: any[] = [];
    papers: any[] = [];
    paperQuestions: any[] = [];

    selectedCategory: any;

    constructor(private categoryMngService: CategorymanagerService, private paperService: ViewpapersService) { }

    ngOnInit() {
        this.categoryMngService.getOwnData()
            .subscribe(
            //for loopping // data => this.category = data
            data => {
                const myArray = [];
                for (let key in data) {
                    myArray.push(data[key]);
                }
                this.category = myArray;


            },
            error => { console.log(error) },
            () => {
                this.selectedCategory = this.category[0]['categoryname'];
                this.changeCategory(this.category[0]['categoryname']);
            });

        console.log(this.category);
        console.log();



            //this.paperService.getPaperList()
            //    .subscribe((data: any) => {
            //        this.papers = data.questionPaper;
            //       console.log(this.papers);
            //    }

            //    ); 

    }

    changeCategory(catName: string) {
        this.paperService.getPaperList(catName)
            .subscribe((data: any) => {
                this.papers = data.questionPaperNames;
                console.log(this.papers);
            }

            ); 
    }

  deletePaper(item: any, index: number) {
      if (confirm('Are you sure to delete Paper ?')) {
          //this.categoryMngService.deletecategory(item);
          this.items.splice(index, 1);
      }
    }

  onViewPaper() {

      this.paperService.viewPaperQuestions()
          .subscribe((data: any) => {
              this.paperQuestions = data;
              
              console.log(this.paperQuestions);
          }

          ); 

  }

  onEditPaper() {

  }
}
