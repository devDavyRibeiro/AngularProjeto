import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
@Injectable({
  providedIn:'root',
})
export class CategoryService{
  constructor(private http : HttpClient){}
  getList = () => {
    const response = this.http.get("https://apimocha.com/diretivasangular/category");
    return response;
  };
}
