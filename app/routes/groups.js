import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';


export default class GroupsRoute extends Route {


	async model(){
		console.log('hello from group route')
		//return this.get('ajax').request('http://localhost:3000/groups')

		//return this.get('ajax').request("http://localhost:3000/groups");
		return this.store.findAll('group');
	}
}
