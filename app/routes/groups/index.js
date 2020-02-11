import Route from '@ember/routing/route';

export default class GroupRoute extends Route {
  afterModel(model, transition) {
    if (model.get('length') === 1) {
      this.transitionTo('groups.group', model.get('firstObject'));
    }
  }
}