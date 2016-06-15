// app/pods/projects/index/route.js
import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import PaginatedRouteMixin from  'ember-osf/mixins/paginated-route';

export default Ember.Route.extend(AuthenticatedRouteMixin, PaginatedRouteMixin, {
    store: Ember.inject.service(),
    session: Ember.inject.service(),
    model(routeParams) {
        let user = this.modelFor('application');
        var userParams = {
            filter: {
                contributors: ''
            }
        };

        userParams['filter']['contributors'] = user.id;
        return this.queryForPage('node', routeParams, userParams);

        // if (user) {
        //     return user.get('nodes'); // Fetch from `/users/me/nodes/`
        // } else {
        //     // return this.get('store').findRecord('user', 'me').then(user => user.get('nodes'));
        // }
    }
});
