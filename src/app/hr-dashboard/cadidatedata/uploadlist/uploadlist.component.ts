import { Component, OnInit } from '@angular/core';
import { CandidateDataService } from '../candidatedata.service';


import { NgForm } from '@angular/forms';

@Component({
  selector: 'amiti-uploadlist',
  templateUrl: './uploadlist.component.html',
  styleUrls: ['./uploadlist.component.css']
})
export class UploadlistComponent implements OnInit {
    status: string;
  constructor(private candidateDataService: CandidateDataService) { }

  ngOnInit() {

  }

  onFileUpload(form: NgForm) {

      this.candidateDataService.sendCandidateData({ CADIDATEFILE: form })
         .subscribe(
          data => alert('Successfully Upload'),



        error => console.log(error),

         );
            }
  

//onFileUpload(files: string) {

//      this.candidateDataService.sendCandidateData({ CADIDATEFILE: files })
//          .subscribe(
//          data => alert('Successfully Upload'),
         


//          error => console.log(error),
         
//          );
//  }
}
