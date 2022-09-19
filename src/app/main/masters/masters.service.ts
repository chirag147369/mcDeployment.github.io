import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { BehaviorSubject, Observable } from "rxjs";
import { environment } from 'environments/environment';

@Injectable({
  providedIn: "root",
})
export class MastersService {
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
      Promise.all([this.getApiData()]).then(() => {
        resolve();
      }, reject);
    });
  }

  /**
   * Get Api Data
   */
  getApiData(): Promise<any[]> {
    return new Promise((resolve, reject) => {
      this._httpClient.get("api/dashboard-data").subscribe((response: any) => {
        this.apiData = response;
        this.onApiDataChanged.next(this.apiData);
        resolve(this.apiData);
      }, reject);
    });
  }

  //Category
  postCategory(payload): Promise<any[]> {
    console.log(this.currentUser.token)
    return new Promise((resolve, reject) => {
      var reqHeader = new HttpHeaders({
        'access-token': this.currentUser.token
      });
      this._httpClient.post(environment.apiUrl + '/category/', payload).subscribe((response:any) => {
        alert(response.message)
        this.getCategoryList().then(todos => {
          resolve(todos);
        }, reject);
      });
    });
  }
  getCategoryList(): Promise<any[]> {
    return new Promise((resolve, reject) => {
      var reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'access-token': this.currentUser.token
      });
      this._httpClient.get(environment.apiUrl + "/category", { headers: reqHeader }).subscribe((response: any) => {
        this.apiData = response;
        this.onApiDataChanged.next(this.apiData);
        resolve(this.apiData);
      }, reject);
    });
  }


    //Category
    postSubCategory(payload): Promise<any[]> {
      console.log(this.currentUser.token)
      return new Promise((resolve, reject) => {
        var reqHeader = new HttpHeaders({
          'access-token': this.currentUser.token
        });
        this._httpClient.post(environment.apiUrl + '/subcategory/', payload).subscribe((response: any) => {
          alert(response.message)
          this.getSubCategoryList().then(todos => {
            resolve(todos);
          }, reject);
        });
      });
    }
    getSubCategoryList(): Promise<any[]> {
      return new Promise((resolve, reject) => {
        var reqHeader = new HttpHeaders({
          'Content-Type': 'application/json',
          'access-token': this.currentUser.token
        });
        this._httpClient.get(environment.apiUrl + "/subcategory", { headers: reqHeader }).subscribe((response: any) => {
          this.apiData = response;
          console.log(this.apiData)
          this.onApiDataChanged.next(this.apiData);
          resolve(this.apiData);
        }, reject);
      });
    }

  // User
  postUser(payload): Promise<any[]> {
    console.log(this.currentUser.token)
    return new Promise((resolve, reject) => {
      var reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'access-token': this.currentUser.token
      });
      this._httpClient.post(environment.apiUrl + '/auth/register', payload).subscribe((response: any) => {
        alert(response.message)
        // this.getCategoryList().then(todos => {
        //   resolve(todos);
        // }, reject);
      });
    });
  }
  getUserList(): Promise<any[]> {
    return new Promise((resolve, reject) => {
      var reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'access-token': this.currentUser.token
      });
      this._httpClient.get(environment.apiUrl + "/user", { headers: reqHeader }).subscribe((response: any) => {
        this.apiData = response;
        this.onApiDataChanged.next(this.apiData);
        resolve(this.apiData);
      }, reject);
    });
  }
}