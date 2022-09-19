import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { environment } from "environments/environment";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class OrderService {
  // Public
  public apiData: any;
  public onApiDataChanged: BehaviorSubject<any>;
  public currentUser: any;

  /**
   * Constructor
   *
   * @param {HttpClient} _httpClient
   */
  constructor(private _httpClient: HttpClient) {
    // Set the defaults
    this.onApiDataChanged = new BehaviorSubject({});
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  /**
   * Resolver
   *
   * @param {ActivatedRouteSnapshot} route
   * @param {RouterStateSnapshot} state
   * @returns {Observable<any> | Promise<any> | any}
   */
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    return new Promise<void>((resolve, reject) => {
      Promise.all([this.getRecentOrders(1, 10)]).then(() => {
        resolve();
      }, reject);
    });
  }

  /**
   * Get Api Data
   */
  getRecentOrders(page, size): Promise<any[]> {
    console.log(page, size, "ii")
    return new Promise((resolve, reject) => {
      var reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'access-token': this.currentUser.token
      });

      this._httpClient.get(environment.apiUrl + "/admin/orders?page=" + page + "&size=" + size, { headers: reqHeader }).subscribe((response: any) => {
        this.apiData = response;
        this.onApiDataChanged.next(this.apiData);
        resolve(this.apiData);
      }, reject);
    });
  }
  getCancelledOrders(page, size): Promise<any[]> {

    return new Promise((resolve, reject) => {
      var reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'access-token': this.currentUser.token
      });

      this._httpClient.get(environment.apiUrl + "/admin/Cancelledorders?page=" + page + "&size=" + size, { headers: reqHeader }).subscribe((response: any) => {
        this.apiData = response;
        this.onApiDataChanged.next(this.apiData);
        resolve(this.apiData);
      }, reject);
    });
  }
  deleteOrder(id): Promise<any[]> {
    return new Promise((resolve, reject) => {
      var reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'access-token': this.currentUser.token
      });

      this._httpClient.delete(environment.apiUrl + "/order/" + id, { headers: reqHeader }).subscribe((response: any) => {
        this.apiData = response;
        this.onApiDataChanged.next(this.apiData);
        resolve(this.apiData);
      }, reject);
    });
  }

  getDeliveredOrders(page, size): Promise<any[]> {
    return new Promise((resolve, reject) => {
      var reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'access-token': this.currentUser.token
      });

      this._httpClient.get(environment.apiUrl + "/admin/Deliveredorders?page=" + page + "&size=" + size, { headers: reqHeader }).subscribe((response: any) => {
        this.apiData = response;
        this.onApiDataChanged.next(this.apiData);
        resolve(this.apiData);
      }, reject);
    });
  }
}
