import { Component, Input } from '@angular/core';
import { GamesModel} from '../../services/games-service.service';
import { CardDetailComponent } from './card-detail/card-detail.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	styleUrl: './card.component.css',
})
export class CardComponent {
	@Input() game!: GamesModel;

	constructor(private dialog: MatDialog) {}

	openDialog(
		enterAnimationDuration: string,
		exitAnimationDuration: string,
		id: number
	): void {
		this.dialog.open(CardDetailComponent, {
			width: '650px',
			height: '400px',
			enterAnimationDuration,
			exitAnimationDuration,
			data: {
				id: id,
			},
		});
	}
}
