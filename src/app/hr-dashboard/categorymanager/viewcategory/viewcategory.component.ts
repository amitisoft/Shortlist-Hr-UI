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
            }
            );
    }

    onEditCategory(index: number) {
       
        this.categoryMngService.startedEditing.next(index);
        this.router.navigate(['../createcategory'], { relativeTo: this.route });
       // this.router.navigate(['../', this.id, 'createcategory'], { relativeTo: this.route });
       
    }

    deleteCategory(index: number) {
        this.items.splice(index, 1);
        
    }

    onDeleteCategory() {
        

    }

}
