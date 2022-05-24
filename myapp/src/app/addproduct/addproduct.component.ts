import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import{ ProjectService} from '../project.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  constructor(private  ProjectService:  ProjectService,  private router:Router) {
   }

  ngOnInit(): void {
  }
  profileForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    price: new FormControl(''),
  });
  
getFormData(){
  // this.router.navigate(['/']);
this.ProjectService
    .postData(this.profileForm.value)
    .subscribe(data => {
      console.log("console data", data)
    }
    );
}


}