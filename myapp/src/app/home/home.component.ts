import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
data:any;
isEdit=false;
editProfileForm:any={};
  constructor(private ProjectService: ProjectService) {
   }
  ngOnInit(): void {
  this.ProjectService.getData().subscribe(data=>{
     console.log(data);
    this.data=data;
   })
  }
  filteredString: string='';
  onDelete(_id:any){    
    this.ProjectService.delete(_id).subscribe();
  }
    selectEditData(value:any){
      this.isEdit=true;
      this.editProfileForm = new FormGroup(
        {
        id: new FormControl(value._id),
        name: new FormControl(value.name),
        description: new FormControl(value.description),
        price: new FormControl(value.price),
      }
      );
  }
  saveEditData(){
    this.ProjectService.update(this.editProfileForm.value.id,this.editProfileForm.value).subscribe((data)=>{
      console.log(data)
    })
  }
}
