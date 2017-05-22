import { Component, OnInit, ViewChild } from '@angular/core';
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
  @ViewChild("files") files;
    status: string;
    public text: string;
  public fileName: string;
  fileToUpload: any[]=[];
  error: any[];
  duplicate: any[];
  constructor(private candidateDataService: CandidateDataService,private _http: Http, private _FileSaverService: FileSaverService) { }

  ngOnInit() {

  }

  onFileUpload() {
    let fi = this.files.nativeElement;
  if (fi.files && fi.files[0]) {
       this.fileToUpload = fi.files[0];
        this.candidateDataService.sendCandidateData(this.fileToUpload)
         .subscribe(
          data => { 
          this.error=data.invalid;
          this.duplicate=data.duplicate;
          alert('Successfully Upload'); 
          }
      );
    }
  }
  onDownload() {
    const fileName = 'candidateformat.xlsx';
      let options = new RequestOptions({
        responseType: ResponseContentType.Blob
      });
      this._http.get('CandidateFormat.xlsx', options).subscribe(res => {
        this._FileSaverService.save((<any>res)._body, fileName);
      });
      return;
  }
    
}
