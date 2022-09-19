import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MastersService } from "../masters.service";

@Component({
  selector: 'app-add-sub-category',
  templateUrl: './add-sub-category.component.html',
  styleUrls: ['./add-sub-category.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AddSubCategoryComponent implements OnInit {
  constructor(private _subCatServices: MastersService) { }

  public usersData = [];
  public CategoryData = [];
  public subCatObj = {
    category: null,
    name: null,
    photo: null,
    description: null,
 };


  async ngOnInit(): Promise<void> {
    // this.getAdminUsers()
    let data = await this._subCatServices.getCategoryList()
    this.CategoryData = data['result']
    console.log(this.CategoryData)
  }

  addSubCategory(){
    var formData:any = new FormData();
    let data = this.subCatObj;
    formData.append('name', data.name)
    formData.append('photo', data.photo)
    formData.append('category', data.category._id)
    formData.append('description', data.description)
    
    console.log(data)
    this._subCatServices.postSubCategory(formData);

    this.subCatObj = {
      category: null,
      name: null,
      photo: null,
      description: null,
    }
  }

  getAdminUsers = async () => {
    // let data = await this._userServices.getAdminUsers()
    // // let data = await this._userServices.getAdminUsers(this.pageNumber, this.selectedOption)
    // console.log(data, this._userServices.apiData)
    // this.usersData = data['result']
    // console.log(this.usersData)
  }
}
