import { Component, OnInit } from '@angular/core';
import { CategorymanagerService } from '../categorymanager.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'amiti-viewcategory',
  templateUrl: './viewcategory.component.html',
  styleUrls: ['./viewcategory.component.css'],

})
export class ViewcategoryComponent implements OnInit {
    id: number;
    items: any[] = [];

    constructor(private categoryMngService: CategorymanagerService,
        private router: Router,
        private route: ActivatedRoute) { }

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
            });
    }

    deleteCategory(item: any,index: number) {
        if(confirm('Are you sure to delete ?')){
        //this.categoryMngService.deletecategory(item);
        this.items.splice(index, 1);
        }
    }


}
