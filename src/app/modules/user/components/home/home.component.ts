import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';
import { Player } from 'src/app/models/player.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  players: Player[] = [];
  constructor(private playerService: PlayerService, private router: Router) { }
  
  ngOnInit(): void {
    this.playerService.getPlayers().subscribe((players) => (this.players = players));
  }

  redirectToAbout(player: Player){
    this.router.navigate(['/user/about', player.id]);
}

}
