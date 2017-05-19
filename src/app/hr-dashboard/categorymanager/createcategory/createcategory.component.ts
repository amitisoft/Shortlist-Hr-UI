import { Component, OnInit , OnDestroy , ViewChild} from '@angular/core';
import { CategorymanagerService } from '../categorymanager.service';
import { NgForm, FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { categoryManagerModel } from '../categorymanager.model';
import { Response } from '@angular/http';

import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'amiti-createcategory',
  templateUrl: './createcategory.component.html',
  styleUrls: ['./createcategory.component.css'],
  providers: [CategorymanagerService]
})
export class CreatecategoryComponent implements OnInit, OnDestroy {
    @ViewChild('f') catForm: NgForm;
   // subscription: Subscription;
    editedCategory: categoryManagerModel; // service name

    categoryForm: FormGroup;
    editMode = false;
    id: string;
    
    items: any[] = [];

    constructor(private categoryMngService: CategorymanagerService, private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.params
           .subscribe(
           (params: Params) => {
               this.id = params['id'];
               this.editMode = params['id'] != null;
                this.initForm();
               }
           )
    }
initForm() {
    if(this.editMode){
        this.categoryMngService.getcategoryDetails(this.id)
            .subscribe(
            data => {
                this.items=data;
                console.log(this.items);
            }
            );
    }
}
    


  onCreateCategory(categoryname: string, categorydescription: string) {
    var categoryInfo:any = {categoryname: categoryname, categorydescription: categorydescription};
    console.log(categoryInfo);
      this.categoryMngService.sendData(categoryInfo)
      .subscribe(
          (response) => {
              alert('data submitted auccessfully');
              this.onClear();
              if(this.editMode){
                this.router.navigate(['../../viewcategory'], { relativeTo: this.route });
              }else{
              this.router.navigate(['../viewcategory'], { relativeTo: this.route });
            }

            if (response.status == 200) {
                    
                   
            }
        }

      );
    }

  onClear() {
      this.catForm.reset();
      this.editMode = false;
  }

  ngOnDestroy() {
      //this.subscription.unsubscribe();
  }
}
