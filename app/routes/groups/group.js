import Route from '@ember/routing/route';

export default class GroupsGroupRoute extends Route {
	async model(params){
		return this.store.findRecord('group', params.group_id);
	}
}
