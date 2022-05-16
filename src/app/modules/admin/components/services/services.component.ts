import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';
import { Player } from 'src/app/models/player.model';
import { Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  players: Player[] = [];
  constructor(private playerService: PlayerService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
      this.playerService.getPlayers().subscribe((players) => (this.players = players));
  }


  deletePlayer(player: Player){
    this.playerService
    .deletePlayer(player)
    .subscribe(() =>(this.players = this.players.filter(t => t.id != player.id)));
  }

  editPlayer(player: Player){
    this.router.navigate(['/admin/edit', player.id]);
  }

}
