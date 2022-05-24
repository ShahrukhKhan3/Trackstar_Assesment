import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'my-auth-token'
  })
};


@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  constructor(private http: HttpClient) { }
  getData() {
    return this.http.get("http://localhost:4000/routes/products");
  }

  postData(data: any): Observable<any> {
    console.log(data)
    return this.http.post("http://localhost:4000/routes/new-product", data);
  }

  delete(_id: string): Observable<any> {
    console.log("here");
    
    return this.http.delete("http://localhost:4000/routes/products/" + _id);
  }
  update(_id:any, data:any) {
    return this.http.put("http://localhost:4000/routes/products/"+_id, data);
  }
getcurrent(_id:any){
  return this.http.get("http://localhost:4000/routes/products/"+_id);
}


}
