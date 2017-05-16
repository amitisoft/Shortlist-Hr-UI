import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions, ResponseContentType, Response } from '@angular/http';
import { FileSaverService } from 'ngx-filesaver';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import { CandidateDataService } from '../candidatedata.service';
import 'rxjs/Rx' ;
import { NgForm } from '@angular/forms';
@Component({
  selector: 'amiti-uploadlist',
  templateUrl: './uploadlist.component.html',
  styleUrls: ['./uploadlist.component.css']
})
export class UploadlistComponent implements OnInit {
    status: string;
    public text: string;
  public fileName: string;
  constructor(private candidateDataService: CandidateDataService,private _http: Http, private _FileSaverService: FileSaverService) { }

  ngOnInit() {

  }

  onFileUpload(form: NgForm) {

      this.candidateDataService.sendCandidateData({ CADIDATEFILE: form })
         .subscribe(
          data => alert('Successfully Upload'),



        error => console.log(error),

         );
     }
  onDownload() {
    const fileName = 'candidateformat.xlsx';
      let options = new RequestOptions({
        responseType: ResponseContentType.Blob
      });
      this._http.get('assets/CandidateFormat.xlsx', options).subscribe(res => {
        this._FileSaverService.save((<any>res)._body, fileName);
      });
      return;
  }
    
}
