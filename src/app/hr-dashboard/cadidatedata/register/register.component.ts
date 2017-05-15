import { Component,OnInit,ViewChild } from '@angular/core';
import { NgForm,FormsModule } from '@angular/forms';
import { Response } from '@angular/http';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CandidateDataService } from '../candidatedata.service';
@Component({
    selector: 'amiti-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    @ViewChild('f') uForm: NgForm;
    @ViewChild("fileInput") fileInput;

    fileToUpload: any[] = [];
    data: any[] = [];
    id: number;
    editMode=false;
    constructor(private candidateService: CandidateDataService,private route:ActivatedRoute) {}

    ngOnInit() {
       this.route.params
    .subscribe(
        (params: Params) => {
            this.id= +params['id'];
            this.editMode=params['id'] != null;
            this.initForm();
        }
        )
    }
    initForm(){
        console.log(this.id);
    }
    onSubmitData(form: NgForm) {
        let fi = this.fileInput.nativeElement;
        if (fi.files && fi.files[0]) {
            this.fileToUpload = fi.files[0];
        }
        this.candidateService.addUser(form.value, this.fileToUpload)
            .subscribe(
                (response: Response) => {
                 console.log(response);
                }
            );
        this.onClear();
    }
    onClear() {
        this.uForm.reset();
    }

}