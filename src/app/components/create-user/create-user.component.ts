import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/UserService/thepustakari.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  userForm:FormGroup;

  constructor(private userService:UserService) { }

  ngOnInit(): void {
   
    this.userForm = new FormGroup({
      
      role: new FormControl(),
      firstName: new FormControl(),
      lastName: new FormControl(),
      email: new FormControl(),
      confirmed_Email_Addrsss: new FormControl(),
      //username: new FormControl(),
      password: new FormControl(),
      confirmed_Password:new FormControl(),
      address1: new FormControl(),
      address2: new FormControl(),
      city: new FormControl(),
      state: new FormControl(),
      zipcode: new FormControl()

         
    });

  } 
    saveUser=(user)=>{

    console.log(JSON.stringify(user));
    this.userService.saveUserInfo(user).subscribe(res=>{

      console.log("user information has been saved!!!");

    })



    





    
    

    
  }
}


