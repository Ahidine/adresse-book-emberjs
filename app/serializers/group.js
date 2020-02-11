import JSONAPISerializer  from '@ember-data/serializer/json-api';

export default class GroupSerializer extends JSONAPISerializer  {
	init()
	{
		console.log('hello form Group');
	}
}
