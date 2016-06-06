// app/routes/index.js
import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
    store: Ember.inject.service(),
    session: Ember.inject.service(),
    model() {
        let user = this.modelFor('application');
        if (user) {
            return user.get('nodes'); // Fetch from `/users/me/nodes/`
        } else {
            return this.get('store').findRecord('user', 'me').then(user => user.get('nodes'));
        }
    },
    renderTemplate: function() {
        var controller = this.controllerFor('nodes.index');
        console.log(controller);
        this.render();
        this.render('widgets/project-list', {
            into: 'index',
            outlet: 'project-list'
        });
    }
});

// export default Ember.Route.extend(AuthenticatedRouteMixin, {
//     store: Ember.inject.service(),
//     session: Ember.inject.service(),
//     model() {
//         let user = this.modelFor('application');
//         if (user) {
//             return user.get('nodes');  // Fetch from `/users/me/nodes/`
//         }
//         else {
//             return this.get('store').findRecord('user', 'me').then(user => user.get('nodes'));
//         }
//     }
// });
