import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GamesModel, GamesServiceService } from './../../../services/games-service.service';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
	selector: 'app-card-detail',
	templateUrl: './card-detail.component.html',
	styleUrl: './card-detail.component.css',
})
export class CardDetailComponent implements OnInit {
	inputData: {id:number};
	game!:GamesModel

	constructor(
		private gamesServiceService: GamesServiceService,
		@Inject(MAT_DIALOG_DATA) public data: {id:number}
	) {}

	ngOnInit(): void {
		this.inputData = this.data

		this.gamesServiceService.getGameById(this.inputData.id).subscribe({
			next: (game:GamesModel) => {
				if (game) {
					this.game = game
					console.log(game)
				}
			}
		})
	}
}
