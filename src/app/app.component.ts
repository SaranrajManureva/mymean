import { Component } from '@angular/core';
import { Http,Headers,RequestOptions } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	 user: Array<any>;  
constructor( private _http:Http){
	// this._http.get("https://jsonplaceholder.typicode.com/posts")
// .subscribe(result => this.user=result.json()); 
  this._http.get("/api/users")
.subscribe(result => { console.log(result); this.user = result.json().data;});	
  }
}
