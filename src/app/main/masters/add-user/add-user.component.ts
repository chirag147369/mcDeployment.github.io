import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MastersService } from "../masters.service";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AddUserComponent implements OnInit {
  constructor(private _userServices: MastersService) { }

  public usersData = [];
  public userObj = {
    firstName: null,
    lastName: null,
    email: null,
    confirmPassword: null,
    mobileNumber: '',
    password: "",
    userRole:'',
 };
 
  ngOnInit(): void {
    this.getAdminUsers()
  }
  getAdminUsers = async () => {
    // let data = await this._userServices.getAdminUsers()
    // // let data = await this._userServices.getAdminUsers(this.pageNumber, this.selectedOption)
    // console.log(data, this._userServices.apiData)
    // this.usersData = data['result']
    // console.log(this.usersData)
  }
  addUser = async() => {
    let data = this.userObj;
    if(data.password == data.confirmPassword){
      let payload= {};
      payload = {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        confirmPassword: data.confirmPassword,
        mobileNumber: data.mobileNumber,
        password: data.password,
        isAdmin: data.userRole=='admin' ? true : false,
        isRetailer: data.userRole=='retailer' ? true : false,
        isUser: data.userRole=='user' ? true : false
      }
      this._userServices.postUser(payload);
      this.userObj = {
        firstName: null,
        lastName: null,
        email: null,
        confirmPassword: null,
        mobileNumber: '',
        password: "",
        userRole:'',
      }
    } else {
      alert('Password not matched.')
    }
    
  }
}

