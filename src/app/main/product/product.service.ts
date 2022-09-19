import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { environment } from "environments/environment";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  // Public
  public apiData: any;
  public onApiDataChanged: BehaviorSubject<any>;
  public currentUser: any
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
      Promise.all([this.getApiData()]).then(() => {
        resolve();
      }, reject);
    });
  }

  /**
   * Get Api Data
   */
  getApiData(): Promise<any[]> {
    console.log(this.currentUser)
    return new Promise((resolve, reject) => {
      var reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'access-token': this.currentUser.token
      });

      this._httpClient.get(environment.apiUrl + "/product", { headers: reqHeader }).subscribe((response: any) => {
        this.apiData = response;
        this.onApiDataChanged.next(this.apiData);
        resolve(this.apiData);
      }, reject);
    });
  }
  DeleteProduct(product): Promise<any[]> {
    return new Promise((resolve, reject) => {
      var reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'access-token': this.currentUser.token
      });

      this._httpClient.delete(environment.apiUrl + "/product/" + product, { headers: reqHeader }).subscribe((response: any) => {
        this.apiData = response;
        this.onApiDataChanged.next(this.apiData);
        resolve(this.apiData);
      }, reject);
    });
  }



}
