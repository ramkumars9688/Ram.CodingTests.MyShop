import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { Product } from "../../models/product";
import { HttpClientService } from "../http-client-service/http-client.service";


@Injectable({
    providedIn: 'root'
  })
  export class ProductService {
    
    constructor(private httpService: HttpClientService) {}
  
    getProducts(): Observable<Product[]> {
      return this.httpService
      .get<Product[]>('api/product');

  }
}

