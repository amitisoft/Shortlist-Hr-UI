import { Component, OnInit } from '@angular/core';
import { CategorymanagerService } from '../../categorymanager/categorymanager.service';

@Component({
  selector: 'amiti-createquestion',
  templateUrl: './createquestion.component.html',
  styleUrls: ['./createquestion.component.css']
})
export class CreatequestionComponent implements OnInit {

    items: any[] = [];

  constructor(private categoryMngService: CategorymanagerService) { }

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



}
