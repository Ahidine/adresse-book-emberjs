import Model,{ attr } from '@ember-data/model';

export default class PostModel extends Model {
	@attr userId;
	@attr id;
	@attr title;
	@attr body;

}
