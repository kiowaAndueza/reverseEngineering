import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';
import { Player } from 'src/app/models/player.model';
import { Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-player',
  templateUrl: './form-player.component.html',
  styleUrls: ['./form-player.component.scss']
})
export class FormPlayerComponent implements OnInit {
  id: any;
  playerOne!: Player;

  
  constructor(private playerService: PlayerService, private router: Router, private route: ActivatedRoute, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.playerOne = this.playerOne as Player
    if(this.id){
      this.getPlayer();
    }
  }


  createOrUpdate(){
    if(this.id){
      this.updatePlayer();
    } else {
      console.log(this.playerOne);
      this.createPlayer();
    }
  }


  getPlayer(){
    this.playerService.getPlayer(this.id).subscribe(data =>{
      this.playerOne = data as unknown as Player;
    })
  }

  updatePlayer(){
    this.playerService.update(this.playerOne)
      .subscribe({
        next: (res) => {
          console.log(res);
      },
      error: (e) => console.error(e)
    });
    this.router.navigate(['admin/services']);
  }

  createPlayer(){
    this.playerService.create(this.playerOne).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (e) => console.error(e)
    });
    this.router.navigate(['admin/services']);
  }

  cancel(){
    this.router.navigate(['admin/services']);
  }


}
