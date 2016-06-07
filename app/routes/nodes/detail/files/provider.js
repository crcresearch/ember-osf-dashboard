// app/routes/nodes/detail/files/provider.js
import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
    model(params) {
        let fileProviders = this.modelFor('nodes.detail.files');
        return fileProviders.findBy('provider', params.provider);
    },
});
