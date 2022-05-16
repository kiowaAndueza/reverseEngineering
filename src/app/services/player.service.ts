import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Player } from '../models/player.model';
import { API } from 'src/environments/api-route';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private readonly apiUrl: string = API.base
  constructor(private http: HttpClient) { }

  getPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>(this.apiUrl);
  }

  deletePlayer(player: Player):Observable<Player>{
    const url = `${this.apiUrl}/${player.id}`;
    return this.http.delete<Player>(url);
  }

  getPlayer(playerId: number): Observable<Player[]> {
    return this.http.get<Player[]>(`${this.apiUrl}/${playerId}`);
  }

  update(player: Player): Observable<Player[]> {
    return this.http.put<Player[]>(`${this.apiUrl}/${player.id}`, player);
  }

  create(player: Player): Observable<Player[]> {
    return this.http.post<Player[]>(this.apiUrl, player);
  }

}
