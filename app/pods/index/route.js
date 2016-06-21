// app/pods/index/route.js
import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
    store: Ember.inject.service(),
    session: Ember.inject.service(),
    model() {
        let user = this.modelFor('application');
        // var userParams = {
        //     filter: {
        //         contributors: ''
        //     }
        // };

        if(user) {
            return user;
            // userParams['filter']['contributors'] = user.id;
            // this.set('currentUser', user.get('fullName'));
            // return this.queryForPage('node', routeParams, userParams);
            // return user.get('nodes'); // Fetch from `/users/me/nodes/`
        } else {
            return this.get('store').findRecord('user', 'me').then(user => user);
            // userParams['filter']['contributors'] = user.id;
            // this.set('currentUser', user.get('fullName'));
            // return this.queryForPage('node', routeParams, userParams);
            // return this.get('store').findRecord('user', 'me').then(user => user.get('nodes'));

        }
    },
    setupController: function (controller, model) {
        this._super(controller, model);
        var fullName = model.get('fullName');
        controller.set('currentUser', fullName);
        controller.set('model', model);
    }
});
