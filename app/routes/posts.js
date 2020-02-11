import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';


export default class PostsRoute extends Route {


	async model(){
		//return this.get('ajax').request('http://localhost:3000/groups')

		//return this.get('ajax').request("http://localhost:3000/groups");
		return this.store.findAll('post');
		

	}
}
