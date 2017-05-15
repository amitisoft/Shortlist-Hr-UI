import { Component, OnInit } from '@angular/core';
import { CandidateDataService } from './candidatedata.service';

@Component({
  selector: 'amiti-cadidatedata',
  templateUrl: './cadidatedata.component.html',
  styleUrls: ['./cadidatedata.component.css'],
  providers: [CandidateDataService]
})
export class CadidatedataComponent implements OnInit {

    constructor() { }

  ngOnInit() {
  }

  

}
