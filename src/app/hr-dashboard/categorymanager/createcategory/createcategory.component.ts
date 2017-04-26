import { Component, OnInit , OnDestroy , ViewChild} from '@angular/core';
import { CategorymanagerService } from '../categorymanager.service';
import { NgForm, FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { categoryManagerModel } from '../categorymanager.model';
import { Response } from '@angular/http';

import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'amiti-createcategory',
  templateUrl: './createcategory.component.html',
  styleUrls: ['./createcategory.component.css'],
  providers: [CategorymanagerService]
})
export class CreatecategoryComponent implements OnInit, OnDestroy {
    @ViewChild('f') catForm: NgForm;
    subscription: Subscription;
    editedCategory: categoryManagerModel; // service name

    categoryForm: FormGroup;
    editMode = false;
    id: number;
    
    items: any[] = [];

    constructor(private categoryMngService: CategorymanagerService, private route: ActivatedRoute) { }

    ngOnInit() {

        this.route.params
            .subscribe(
            (params: Params) => {
                this.id = +params['id'];
                this.editMode = params['id'] != null;
                console.log(this.editMode);
                }
            )

       // this.initForm();


        this.subscription = this.categoryMngService.startedEditing
            .subscribe(
            (index: number) => {
                this.id = index;
                this.editMode = true;
                this.editedCategory = this.categoryMngService.getCategoryForEdit(index);
                this.catForm.setValue({
                    categoryname: this.editedCategory.categoryname,
                    categorydescription: this.editedCategory.categorydescription


                })
            }
            ); 
    }

    //getCategory(index: number) {
    //    return this.items[index];
    //}

    //onSubmit() {
    //    console.log(this.categoryForm);
    //}

    //private initForm() {
    //    let categoryName = new FormArray([]);
    //    let categoryDescription = '';

    //    if (this.editMode) {
    //        const category = this.categoryMngService.getCategory(this.id);

    //        //categoryName = category.CATEGORYNAME;
    //       // categoryDescription = category.CATEDESCRIPTION;

    //        if (category['items']) {
    //            for (let item of category.items) {
    //                categoryName.push(new FormGroup({
    //                    'categoryname': new FormControl(item.CATEGORYNAME),
    //                    'categorydescription': new FormControl(item.CATEDESCRIPTION, [

                          
    //                    ])
    //                }));
    //            }
    //        }

    //    }
    //    this.categoryForm = new FormGroup({

    //        'items': categoryName

    //        //'categoryname': new FormControl(categoryName),
    //        //'categorydescription': new FormControl(categoryDescription)
    //    });
    //}



  onCreateCategory(categoryname: string, categorydescription: string) {

      this.categoryMngService.sendData({ CATEGORYNAME: categoryname, CATEDESCRIPTION: categorydescription })
      .subscribe(
          data => console.log(data),

          error => console.log(error)
      );
    }

  onClear() {
      this.catForm.reset();
      this.editMode = false;
  }

  ngOnDestroy() {
      this.subscription.unsubscribe();
  }
}
