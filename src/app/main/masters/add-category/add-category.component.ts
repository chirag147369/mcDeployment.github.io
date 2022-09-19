import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MastersService } from "../masters.service";

@Component({
  selector: 'add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AddCategoryComponent implements OnInit {
  constructor(private _categoryServices: MastersService) { }

  public usersData = [];
  public catObj = {
     name: null,
     photo: null,
     subcategory: [],
     description: null,
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

  addCategory = async() => {
    var formData:any = new FormData();
    let data = this.catObj;
    formData.append('name', data.name)
    formData.append('photo', data.photo)
    formData.append('subcategory', data.subcategory)
    formData.append('description', data.subcategory)
    
    await this._categoryServices.postCategory(formData);
    this.catObj = {
      name: null,
      photo: null,
      subcategory: [],
      description: null,
    }
  }
}
