import { Component, OnInit } from '@angular/core';
import { AllUserService } from 'app/main/all-users/all-user.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  public loading = false;
  public ProductData = [];
  public selectedOption = 10;
  constructor(private _productServices: ProductService
  ) {

  }

  async ngOnInit(): Promise<void> {
    let data = await this._productServices.getApiData()
    console.log(data, this._productServices.apiData)
    this.ProductData = data['result']
    console.log(this.ProductData)
  }

  changePageSize = async (e) => {
    this.selectedOption = e.target.value
    console.log(this.selectedOption)
    let data = await this._productServices.getApiData()
    console.log(data, this._productServices.apiData)
    this.ProductData = data['result']
  }
  DeleteProduct = async (product) => {
    if (window.confirm("Are you sure you want to delete this product?") === true) {
      let data1 = await this._productServices.DeleteProduct(product._id)
      let data = await this._productServices.getApiData()
      this.ProductData = data['result']

    }
  }
}
