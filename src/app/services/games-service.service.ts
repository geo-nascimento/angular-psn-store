import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment.development';

export interface GamesModel {
	id: number;
	type: string;
	price: string;
	gameLabel: string;
	cover: string;
	gameName: string;
	distribution: string;
	tags: string[];
	description:string;
}


@Injectable({
  providedIn: 'root'
})
export class GamesServiceService {

  	constructor(private http:HttpClient) { }

	getGames():Observable<Array<GamesModel>> {
		return this.http.get<Array<GamesModel>>(environment.API_URL);
	}

	getGameById(id:number):Observable<GamesModel> {
		return this.http.get<GamesModel>(`${environment.API_URL}/${id}`);
	}

}
