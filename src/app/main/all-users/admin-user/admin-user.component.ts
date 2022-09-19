import { Component, OnInit } from "@angular/core";
import { AllUserService } from "../all-user.service";

@Component({
  selector: "app-admin-user",
  templateUrl: "./admin-user.component.html",
  styleUrls: ["./admin-user.component.scss"],
})
export class AdminUserComponent implements OnInit {
  constructor(private _userServices: AllUserService) { }
  public loading = false;
  public usersData = [];
  public selectedOption = 10;
  public pageNumber = 1;

  ngOnInit(): void {
    this.getAdminUsers()
  }
  getAdminUsers = async () => {
    let data = await this._userServices.getAdminUsers(this.pageNumber, this.selectedOption)
    console.log(data, this._userServices.apiData)
    this.usersData = data['result']
    console.log(this.usersData)
  }
  viewMatchStatus(states) {
    console.log({ states });
  }

  onChangePage(event) {
    console.log("event ", event - 1);
    // this.getAllClubData(event - 1); check that function in manage-club.component
  }
  deleteUser = async (user) => {
    if (window.confirm("Are you sure you want to delete this user?") === true) {
      console.log(user._id)
      let data1 = await this._userServices.deleteUser(user._id);
      let data = await this._userServices.getAdminUsers(this.pageNumber, this.selectedOption)
      console.log(data, this._userServices.apiData)
      this.usersData = data['result']

    }
  }
}
