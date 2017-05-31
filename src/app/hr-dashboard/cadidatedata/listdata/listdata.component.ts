import { Component, OnInit } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { CandidateDataService } from '../candidatedata.service';
import { Response } from '@angular/http';
@Component({
    selector: 'amiti-listdata',
    templateUrl: './listdata.component.html',
    styleUrls: ['./listdata.component.css']
})
export class ListdataComponent implements OnInit {
    useritems: any[] = [];
    constructor(private candidateService: CandidateDataService) { }
    searchdata={
        'firstName' : '',
        'lastName' : '',
        'email' : '',
        'page' :'',
        'phoneNumber':''
    }
    ngOnInit() {
        this.resetValue();
        // this.candidateService.getuserlist()
        //     .subscribe(
        //     data => {
        //         const myArray = [];
        //         for (let key in data.candidates) {
        //             myArray.push(data.candidates[key]);
        //         }
        //         this.useritems = myArray;
        //         console.log(this.useritems);
        //     }
        //     );
       
    }
    deletecandidate(user, index) {
        if (confirm("Are you sure to delete?")) {
            this.candidateService.deleteCandidate(user.mobile);
            this.useritems.splice(index, 1);
        }
    }
    onSearch(searchvalue:any){
        console.log(searchvalue);
         this.candidateService.getuserlistbysearch(searchvalue)
            .subscribe(
            data => {
                const myArray = [];
                for (let key in data.candidates) {
                    myArray.push(data.candidates[key]);
                }
                this.useritems = myArray;
            }
            );
    }
resetValue(){
     this.candidateService.getuserlist()
            .subscribe(
            data => {
                const myArray = [];
                for (let key in data.candidates) {
                    myArray.push(data.candidates[key]);
                }
                this.useritems = myArray;
                console.log(this.useritems);
            }
            );
}

}