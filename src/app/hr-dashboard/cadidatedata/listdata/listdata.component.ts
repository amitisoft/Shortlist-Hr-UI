import { Component, OnInit } from '@angular/core';
import { CandidateDataService } from '../candidatedata.service';
import { Response } from '@angular/http';
@Component({
 selector: 'amiti-listdata',
 templateUrl: './listdata.component.html',
 styleUrls: ['./listdata.component.css']
})
export class ListdataComponent implements OnInit {
 useritems: any[] = [];
 constructor(private candidateService : CandidateDataService) { }

 ngOnInit() {
  this.candidateService.getuserlist()
           .subscribe(
           data => {
               const myArray = [];
               for (let key in data) {
                   myArray.push(data[key]);
               }
               this.useritems = myArray;
              console.log(this.useritems);
           }
       );
 }
 deletecandidate(user,index){
  if(confirm("Are you sure to delete?")){
  this.candidateService.deleteCandidate(user.mobile);
  this.useritems.splice(index,1);
 }
 }

}