// app/pods/collections/detail/route.js
import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
    model(params) {
        return this.store.findRecord('collection', params.collection_id);
    },
    actions: {
        addProjectToCollection(projectId) {
            this.store.findRecord('node', projectId).then(project => {
                var collection = this.modelFor(this.routeName);
                collection.get('linkedNodes').pushObject(project);
                collection.save();
            });
        },
        removeProjectFromCollection(project) {
            var collection = this.modelFor(this.routeName);
            collection.get('linkedNodes').removeObject(project);
            collection.save();
        },
    }
});
