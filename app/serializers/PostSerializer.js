import RESTSerializer  from '@ember-data/serializer/rest';

export default class PostSerializer extends RESTSerializer  {
	init()
	{
		 console.log('hello from Post');
	}
}
