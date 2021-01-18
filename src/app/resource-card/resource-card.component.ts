import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-resource-card',
	templateUrl: './resource-card.component.html',
	styleUrls: ['./resource-card.component.less'],
})
export class ResourceCardComponent implements OnInit {
	@Input() name: string = 'e';

	constructor() {}

	ngOnInit(): void {}
}
