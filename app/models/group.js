import Model,{ attr } from '@ember-data/model';

export default class GroupModel extends Model {
	@attr title;
	@attr owner;
	@attr image;

}
 