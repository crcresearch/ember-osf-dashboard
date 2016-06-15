// app/pods/widgets/project-list/route.js -->
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
    },
    setupController: function (controller, model) {
        this._super(controller, model);
        let user = this.modelFor('application');
        var current_user_full_name = '';

        if(user) {
            current_user_full_name = user.get('fullName');
        } else {
            current_user_full_name = this.get('store').queryRecord('user', {
                filter: {
                    id: model.query.contributors
                }
            }).then(user => user.get('fullName'));
            console.log(current_user_full_name);
        }

        var meta = model.get('meta');
        controller.set('currentUser', current_user_full_name);
        controller.set('pagination', meta.pagination);
    }
});
