import { Component, OnInit } from '@angular/core';
import { ManagetestService } from './managetest.service';

@Component({
  selector: 'amiti-managetest',
  templateUrl: './managetest.component.html',
  styleUrls: ['./managetest.component.css'],
  providers: [ManagetestService]
})
export class ManagetestComponent implements OnInit {

    manageTest: any[] = [];

    constructor(private mngTestService: ManagetestService) { }

  ngOnInit() {

      this.mngTestService.getManageTestData()
          .subscribe(
          //for loopping // data => this.items = data
          data => {
              const myArray = [];
              for (let key in data) {
                  myArray.push(data[key]);
              }
              this.manageTest = myArray;
          }
          );
  }

}
