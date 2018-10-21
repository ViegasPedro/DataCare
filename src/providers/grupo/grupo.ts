import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class GrupoProvider {
	private URL_PADRAO: string = "http://localhost:8080/grupos/"

  constructor(public http: Http) {
    
  }

    getGrupos(){
  		return this.http.get(this.URL_PADRAO)
  		.do(this.logResponse)
  		.map(this.extractData)
  		.catch(this.catchError)
  	}

  	private logResponse(res: Response){
  		console.log(res);
  	}

  	private extractData(res: Response){
  		return res.json();
  	}

  	private catchError(error: Response | any){
  		console.log(error);
  		return Observable.throw(error.json().error || "Server error: get grupos")
  	}

}