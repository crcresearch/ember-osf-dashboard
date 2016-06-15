// app/pods/projects/detail/children/route.js
import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return this.store.query('node', {
            filter: {
                parent: this.modelFor('projects.detail').get('id')
            }
        });
    }
});
