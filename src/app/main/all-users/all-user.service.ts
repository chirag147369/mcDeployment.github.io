import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { BehaviorSubject, Observable } from "rxjs";
import { environment } from 'environments/environment';

@Injectable({
  providedIn: "root",
})
export class AllUserService {
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
      Promise.all([this.getApiData(1, 10)]).then(() => {
        resolve();
      }, reject);
    });
  }

  /**
   * Get Api Data
   */
  getApiData(page, size): Promise<any[]> {
    console.log(this.currentUser)
    return new Promise((resolve, reject) => {
      var reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'access-token': this.currentUser.token
      });

      this._httpClient.get(environment.apiUrl + "/admin/getUsers?page=" + page + "&size=" + size, { headers: reqHeader }).subscribe((response: any) => {
        this.apiData = response;
        this.onApiDataChanged.next(this.apiData);
        resolve(this.apiData);
      }, reject);
    });
  }
  getApiDataRetailers(page, size): Promise<any[]> {
    console.log(this.currentUser)
    return new Promise((resolve, reject) => {
      var reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'access-token': this.currentUser.token
      });

      this._httpClient.get(environment.apiUrl + "/admin/getRetailers?page=" + page + "&size=" + size, { headers: reqHeader }).subscribe((response: any) => {
        this.apiData = response;
        this.onApiDataChanged.next(this.apiData);
        resolve(this.apiData);
      }, reject);
    });
  }
  getAdminUsers(page, size): Promise<any[]> {
    console.log(this.currentUser)
    return new Promise((resolve, reject) => {
      var reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'access-token': this.currentUser.token
      });

      this._httpClient.get(environment.apiUrl + "/admin/getAdmins?page=" + page + "&size=" + size, { headers: reqHeader }).subscribe((response: any) => {
        this.apiData = response;
        this.onApiDataChanged.next(this.apiData);
        resolve(this.apiData);
      }, reject);
    });
  }
  deleteUser(id): Promise<any[]> {
    return new Promise((resolve, reject) => {
      var reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'access-token': this.currentUser.token
      });

      this._httpClient.delete(environment.apiUrl + "/user/" + id, { headers: reqHeader }).subscribe((response: any) => {
        this.apiData = response;
        this.onApiDataChanged.next(this.apiData);
        resolve(this.apiData);
      }, reject);
    });
  }




}
