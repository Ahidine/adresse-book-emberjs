import Component from '@glimmer/component';
import {tracked} from '@glimmer/tracking';
import { action } from '@ember/object';


export default class GroupCardComponent extends Component {
group="undifiend";
variable="cc";
@tracked shouldConfirm=true;
	@action 
	ButtonPressed(){
		this.shouldConfirm=false;
		console.log("button cliquer");

	}
	@action
	SuppPressed(){
		alert('le truc est bien supp')
	}
	@action
	CancelPressed(){
		this.shouldConfirm=true;
	}

}
