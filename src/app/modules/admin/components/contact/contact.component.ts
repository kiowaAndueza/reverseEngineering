import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';
import { Player } from 'src/app/models/player.model';
import { Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  id: any;
  playerOne: any;
  players: Player[] = [];
  constructor(private playerService: PlayerService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getPlayer();
    if(!this.id){
      this.playerService.getPlayers().subscribe((players) => (this.players = players));
    }
  }

  getPlayer(){
    this.playerService.getPlayer(this.id).subscribe(data =>{
      this.playerOne = data as unknown as Player;
      console.log(data)

    })
  }

}
