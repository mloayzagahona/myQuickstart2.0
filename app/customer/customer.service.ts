import { Observable } from 'rxjs/Rx';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

const URL_CUSTOMER = 'app/customers.json';

@Injectable()
export class CustomerService {

  constructor(private _http: Http) { }

  getCustomersByPromises() {
    return this._http.get(URL_CUSTOMER)
      .map((response: Response) => response.json() )
      .toPromise()
      .catch((err: any) => {
        console.log(err);
        return Promise.reject(err)
      });
  }

  getCustomersByObservables(): Observable<any[]> {
    return this._http.get(URL_CUSTOMER)
      .map((response: Response) => response.json() )
      .catch(this.handleErrorObs);
  }

  handleErrorObs(err: any) {
    console.error(err);
    return Observable.throw(err.json().error || 'Server error');
  }

  handleErrorPromise(err: any) {
    console.error(err);
    return Observable.throw(err.json().error || 'Server error');
  }
}
