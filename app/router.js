import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('groups', function() {
    this.route('group',{ path:'/:group_id'});
  });
  this.route('posts');
  this.route('interconnections');
});
