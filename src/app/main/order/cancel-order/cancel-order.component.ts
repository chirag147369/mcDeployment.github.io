import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-cancel-order',
  templateUrl: './cancel-order.component.html',
  styleUrls: ['./cancel-order.component.scss']
})
export class CancelOrderComponent implements OnInit {


  constructor(private _ordersServices: OrderService) { }

  public loading = false;
  public ordersData = [];
  public selectedOption = 10;
  public pageNumber = 1;


  async ngOnInit(): Promise<void> {
    let data = await this._ordersServices.getCancelledOrders(this.pageNumber, this.selectedOption)
    this.ordersData = data['result']
  }
  changePageSize = async (e:any) => {
    this.selectedOption = e.target.value
    let data = await this._ordersServices.getCancelledOrders(this.pageNumber, this.selectedOption)
    this.ordersData = data['result']
  }
  deleteOrder = async (order) => {
    if (window.confirm("Are you sure you want to delete this order?") === true) {
      console.log(order._id)
      let data1 = await this._ordersServices.deleteOrder(order._id);
      let data = await this._ordersServices.getCancelledOrders(this.pageNumber, this.selectedOption)
      console.log(data, this._ordersServices.apiData)
      this.ordersData = data['result']

    }
  }

}

