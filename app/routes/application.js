import Ember from 'ember';

export default Ember.Route.extend({
    store: Ember.inject.service(),
    session: Ember.inject.service(),
    model() {
        if(this.get('session.isAuthenticated')) {
            return this.get('store').findRecord('user', 'me');
        }
        return null;
    },
    actions: {
        menuTransition() {
            $('.left.mobile-menu.sidebar')
            // .sidebar('setting', 'transition', 'overlay')
            .sidebar('attach events', '.item.menu-toggle');
        }
    }
});
