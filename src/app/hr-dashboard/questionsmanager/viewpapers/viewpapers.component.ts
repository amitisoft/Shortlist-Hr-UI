import { Component, OnInit } from '@angular/core';
import { CategorymanagerService } from '../../categorymanager/categorymanager.service';

@Component({
  selector: 'amiti-viewpapers',
  templateUrl: './viewpapers.component.html',
  styleUrls: ['./viewpapers.component.css']
})
export class ViewpapersComponent implements OnInit {
    items: any[] = [];
    category: any[] = [];

    constructor(private categoryMngService: CategorymanagerService) { }

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
            }); console.log(this.category);
  }

  deletePaper(item: any, index: number) {
      if (confirm('Are you sure to delete Paper ?')) {
          //this.categoryMngService.deletecategory(item);
          this.items.splice(index, 1);
      }
  }
}
