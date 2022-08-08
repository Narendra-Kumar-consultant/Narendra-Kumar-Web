import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-sample',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
   

    sampleForm:FormGroup;
    
    constructor(private fb:FormBuilder, private router: Router) {
    }

    ngOnInit() {
        this.sampleForm = this.fb.group({
            txtSearch:['', [Validators.required, Validators.pattern("^[0-9]*$")]]
        });
    }

    ngAfterViewInit(){
    }

    ngOnDestroy(){
    }

    onSubmit(): void {
        if (this.sampleForm.valid) {
            //this.router.navigate(['/detail']);
            let _id: any = this.sampleForm.value['txtSearch'];
            this.router.navigate(['detail', { id: _id }]);
        }
    }

}
