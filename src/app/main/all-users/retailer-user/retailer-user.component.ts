import { Component, OnInit } from '@angular/core';
import { AllUserService } from '../all-user.service';

@Component({
  selector: 'app-retailer-user',
  templateUrl: './retailer-user.component.html',
  styleUrls: ['./retailer-user.component.scss']
})
export class RetailerUserComponent implements OnInit {
  public loading = false;
  public usersData = [];
  public selectedOption = 10;
  public pageNumber = 1;
  constructor(private _userServices: AllUserService
  ) {

  }

  async ngOnInit(): Promise<void> {
    let data = await this._userServices.getApiDataRetailers(this.pageNumber, this.selectedOption)
    this.usersData = data['result']
  }

  changePageSize = async (e:any) => {
    this.selectedOption = e.target.value
    let data = await this._userServices.getApiDataRetailers(this.pageNumber, this.selectedOption)
    this.usersData = data['result']
  }
  deleteUser = async (user) => {
    if (window.confirm("Are you sure you want to delete this user?") === true) {
      let data1 = await this._userServices.deleteUser(user._id);
      let data = await this._userServices.getApiDataRetailers(this.pageNumber, this.selectedOption)
      this.usersData = data['result']

    }
  }
}



