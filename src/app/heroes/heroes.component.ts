import { Component, OnInit } from '@angular/core';
import { Resource } from '../models/resources';
import { Provider } from '../models/provider';
import { RESOURCES } from './mock/mock-resources';
import { PROVIDERS } from './mock/mock-providers';
@Component({
	selector: 'app-heroes',
	templateUrl: './heroes.component.html',
	styleUrls: ['./heroes.component.less'],
})
export class HeroesComponent implements OnInit {
	//mapping data
	name: string;
	resourceName: string;

	providers: Provider[];
	resources: Resource[];
	chosenprovider: Provider;
	selectedResource: Resource;

	constructor() {
		this.selectedResource = {
			id: '1',
			name: 'testing 123',
			associated_providers: ['123'],
		};
		this.name = '';
		this.resourceName = '';
		this.chosenprovider = { id: '-1', name: '' };
		this.providers = PROVIDERS;
		this.resources = RESOURCES;
		this.name = 'elrey';
	}

	ngOnInit(): void {
		console.log('starting app...');
	}
	/**
	 * @param event event = provider
	 * we filter by what has happened
	 */
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
		this.resources = RESOURCES.filter(u => u.associated_providers.includes(id));
		console.log('ID ' + JSON.stringify(this.resources));
	}
}
