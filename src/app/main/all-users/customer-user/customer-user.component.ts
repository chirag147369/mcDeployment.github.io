import { Component, OnInit } from '@angular/core';
import { AllUserService } from '../all-user.service';

@Component({
  selector: 'app-customer-user',
  templateUrl: './customer-user.component.html',
  styleUrls: ['./customer-user.component.scss']
})
export class CustomerUserComponent implements OnInit {
  public loading = false;
  public usersData = [];
  public selectedOption = 10;
  public pageNumber = 1;
  constructor(private _userServices: AllUserService
  ) {

  }

  async ngOnInit(): Promise<void> {
    let data = await this._userServices.getApiData(this.pageNumber,this.selectedOption)
    console.log(data, this._userServices.apiData)
    this.usersData = data['result']
    console.log(this.usersData)
  }

  changePageSize = async (e:any) => {
    this.selectedOption = e.target.value
    console.log(this.selectedOption)
    let data = await this._userServices.getApiData(this.pageNumber,this.selectedOption)
    console.log(data, this._userServices.apiData)
    this.usersData = data['result']
  }
  deleteUser = async (user) => {
    if (window.confirm("Are you sure you want to delete this user?") === true) {
      console.log(user._id)
      let data1 = await this._userServices.deleteUser(user._id);
      let data = await this._userServices.getApiData(this.pageNumber, this.selectedOption)
      console.log(data, this._userServices.apiData)
      this.usersData = data['result']

    }
  }
}
