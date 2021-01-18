import { Component, OnInit } from '@angular/core';
import { HEROES } from '../mock-heroes';
import { Hero } from '../hero';
import { FormControl } from '@angular/forms';
import { Resource } from '../models/resources';
import { Provider } from '../models/provider';

@Component({
	selector: 'app-heroes',
	templateUrl: './heroes.component.html',
	styleUrls: ['./heroes.component.less'],
})
export class HeroesComponent implements OnInit {
	//mapping data
	name = 'yeetus boleetus ';
	providers: Provider[] = [
		{
			name: 'North Hair Studio',
			id: '608cab54e58e3afce3aeec9a34000b03',
		},
		{
			name: 'South Hair Studio',
			id: 'a2bd77a8ad5d64f6ffed03ee88009b7f',
		},
	];

	resources: Resource[] = [
		{
			name: 'Stylist Jeff',
			id: '51557915d216f60ce56800572900fbe3',
			associated_providers: ['608cab54e58e3afce3aeec9a34000b03'], //North Hair Studio
		},
		{
			name: 'Stylist Monica',
			id: 'b3cd8db88d72a3b633b79a7601003533',
			associated_providers: ['608cab54e58e3afce3aeec9a34000b03'], //North Hair Studio
		},
		{
			name: 'Stylist Lindon',
			id: '314c28f58d0c70123400634f860069f4',
			associated_providers: ['a2bd77a8ad5d64f6ffed03ee88009b7f'], //South Hair Studio
		},
		{
			name: 'Stylist Yui',
			id: '51557915d216f60ce56800572900ec7f',
			associated_providers: ['a2bd77a8ad5d64f6ffed03ee88009b7f'], //South Hair Studio
		},
	];
	resourceName = '';
	chosenprovider: Provider = { id: '1', name: '' };

	selectedResource: Resource;

	constructor() {
		this.selectedResource = {
			id: '1',
			name: 'testing 123',
			associated_providers: ['123'],
		};
		console.log('hello');
	}

	ngOnInit(): void {
		console.log('hello');
	}

	onSelectionChanged(event: any): void {
		console.log(event.value);
		this.chosenprovider = event.value;
		this.filterResourceById(event.value.id);
	}
	getName(): string {
		return this.name;
	}

	/**
	 *
	 * @param id id of what resources needed to be filtered by
	 */
	filterResourceById(id: string): void {
		console.log('ID ' + id);
		this.resources = this.resources.filter(u =>
			u.associated_providers.includes(id)
		);
		console.log('ID ' + JSON.stringify(this.resources));
	}
}
