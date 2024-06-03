import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  products:any
  isLoading:boolean=false
  constructor(private httpClient:HttpClient){}

  getProjectInfo(): Observable<any> {
    return this.httpClient.get('https://fakestoreapi.com/products');
  }

  ngOnInit(){
    this.isLoading=true
    this.getProjectInfo().subscribe(response=>{
     this.products= response
     this.isLoading=false
    })
  }
}
