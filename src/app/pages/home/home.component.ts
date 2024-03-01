import { Component, OnInit, Input } from '@angular/core';
import { GamesModel, GamesServiceService } from '../../services/games-service.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit{

	@Input() games!: Array<GamesModel>;

	constructor(private gameService: GamesServiceService) {}

	ngOnInit(): void {
		this.gameService.getGames().subscribe({
			next: (games: Array<GamesModel>) => {
				if (games && games.length > 0) {
					this.games = games;
				}
			},
		});
	}
}
