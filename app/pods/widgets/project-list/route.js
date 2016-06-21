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
        console.log('STUFF');
        console.log(this.queryForPage('node', routeParams, userParams));
        return this.queryForPage('node', routeParams, userParams);
    },
    setupController: function (controller, model) {
        this._super(controller, model);
        var meta = model.get('meta');

        console.log('STUFF');
        controller.set('model', model);
        controller.set('pagination', meta.pagination);
    }
});
