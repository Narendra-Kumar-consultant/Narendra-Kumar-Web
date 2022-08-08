import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Data } from '../service/dataInterface';
import {dataService} from "../service/service";

@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html'
})
export class DetailComponent implements OnInit, AfterViewInit, OnDestroy {
    dataList: Data[] = [];
    data:Data;
    id: any;
    constructor(private fb:FormBuilder, private router: Router, private route: ActivatedRoute,private dataSer:dataService) {
    }
    getData():void{
        this.dataList=this.dataSer.getData();
    console.log(this.dataList);
      }
    
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.id = params['id'];
            console.log(this.id);
        this.data={} as Data;
        this.errorMessage="";
            this.getData();
for (let key in this.dataList) {
    let value = this.dataList[key];
    if( value.id==this.id)
this.data=value;
break;
}
if(!this.data.id)
{this.errorMessage="No data found for the given id."}
        });
        
    }
errorMessage:string
    ngAfterViewInit(){
    }

    ngOnDestroy(){
    }
    onSubmit(): void {
            this.router.navigate(['home']);
    }

     onClick()
     {
         debugger;
     this.router.navigate(['home']);
     }
}
