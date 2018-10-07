import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class UsuarioProvider {
	private URL_PADRAO: string = "http://localhost:8080/usuarios/1"
	private URL_PRONTUARIO : string = "http://localhost:8080/prontuarios/paciente/2"


  	constructor(private http: Http) {

  	}

  	getPacientes(){
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
  		return Observable.throw(error.json().error || "Server error")
  	}
  	
  	private extractDataUser(res: Response){
  		return res.json().pacientes;
  	}

  	private extractProntuariosUser(res: Response){
  		return res.json().pacientes.prontuarios;
  	}

  	getPacientesUser(){
  		return this.http.get(this.URL_PADRAO)
  		.do(this.logResponse)
  		.map(this.extractDataUser)
  		.catch(this.catchError)
  	}
	
	getProntuarios(){
  		return this.http.get(this.URL_PRONTUARIO)
  		.do(this.logResponse)
  		.map(this.extractData)
  		.catch(this.catchError)
  	}




}

