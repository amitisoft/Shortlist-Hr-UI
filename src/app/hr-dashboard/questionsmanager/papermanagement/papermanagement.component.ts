import { Component, OnInit } from '@angular/core';

import { PapermanagementService } from './papermanagement.service';

@Component({
  selector: 'amiti-papermanagement',
  templateUrl: './papermanagement.component.html',
  styleUrls: ['./papermanagement.component.css'],
  providers: [PapermanagementService]
})
export class PapermanagementComponent implements OnInit {

    questions: any[] = [];

    constructor(private paperService: PapermanagementService ) { }

    ngOnInit() {

        this.paperService.getData()
            .subscribe(
            data => {
                const myArray = [];
                for (let key in data) {
                    myArray.push(data[key]);
                }
                this.questions = myArray;
            }

            );
    }

    onGetCategoryQuestion(selectedCategory: string) {
        this.paperService.sendCategory({ CATEGORYNAME: selectedCategory })
            .subscribe(
            data => console.log(data),

            error => console.log(error)
            );
    }

  
      
 

}
