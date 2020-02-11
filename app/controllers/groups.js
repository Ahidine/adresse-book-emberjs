import Controller from '@ember/controller';
import {tracked} from '@glimmer/tracking';
import { action } from '@ember/object';
export default class GroupsController extends Controller {


	@action
	addGroup(){
			var nvGroupe = this.store.createRecord('group',{
				title :'titre',
				image :'https://pixabay.com/static/uploads/photo/2015/05/21/00/51/woman-776393_960_720.jpg'
			});
			nvGroupe.save();

	}

}
