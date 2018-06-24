import { Component } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs';
import { map } from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _http:Http) {
    //this.c1.live = "ang"
  }
  title = 'Synod-Ang';
  url : string = 'http://localhost:8200/synod-ang/'

  public getSynods(){
    this._http.get(this.url).toPromise().then((res)=>{
      console.log(res.json());
    });
  }
}