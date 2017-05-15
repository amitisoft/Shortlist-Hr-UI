import { Component, OnInit } from '@angular/core';
import { CandidateDataService } from '../candidatedata.service';

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
onFileUpload(files: string) {

      this.candidateDataService.sendCandidateData({ CADIDATEFILE: files })
          .subscribe(
          data => alert('Successfully Upload'),
         // data => console.log(data.status),


          error => console.log(error),
         // () => {this.status="Fail To Upload"}
          );
  }
}
