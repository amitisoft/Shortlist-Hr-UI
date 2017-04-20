import { Component, OnInit } from '@angular/core';
import { CategorymanagerService } from '../categorymanager.service';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';


import { Response } from '@angular/http';

@Component({
  selector: 'amiti-createcategory',
  templateUrl: './createcategory.component.html',
  styleUrls: ['./createcategory.component.css'],
  providers: [CategorymanagerService]
})
export class CreatecategoryComponent implements OnInit {

    constructor(private categoryMngService: CategorymanagerService) { }

  ngOnInit() {
  }

  onCreateCategory(categoryname: string, categorydescription: string) {

      this.categoryMngService.sendData({ CATEGORYNAME: categoryname, CATEDESCRIPTION: categorydescription })
      .subscribe(
          data => console.log(data),

          error => console.log(error)
      );
  }

}
