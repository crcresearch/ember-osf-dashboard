// app/routes/index.js
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

        if (user) {
            userParams['filter']['contributors'] = user.id;
            return this.queryForPage('node', routeParams, userParams);
            // return user.get('nodes'); // Fetch from `/users/me/nodes/`
        } else {
            user = this.get('store').findRecord('user', 'me');
            userParams['filter']['contributors'] = user.id;
            return this.queryForPage('node', routeParams, userParams);
            // return this.get('store').findRecord('user', 'me').then(user => user.get('nodes'));
        }
    },
    setupController: function (controller, model) {
        this._super(controller, model);
        let user = this.modelFor('application');
        var current_user_name = user.get('fullName');
        var meta = model.get('meta');
        console.log(meta.pagination);
        controller.set('currentUser', current_user_name);
        controller.set('model', model);
        controller.set('pagination', meta.pagination);
    },
});
