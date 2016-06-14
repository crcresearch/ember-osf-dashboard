// app/components/project-list/component.js
import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
    layout,
    store: Ember.inject.service(),
    session: Ember.inject.service(),
    tagName: 'project-create',
    classNames: ['project-create'],
    responseError: '',
    responseSuccess: '',
    actions: {
        requestCreate: function(name) {
            $('.ui.modal.create-project').modal('setting', 'closable', false).modal('show', name);
        },
        confirmCreate: function() {
            var post = this.get('model');
            var self = this;
            var node = this.get('store').createRecord('node', {
                title: this.get('title'),
                category: 'project',
                description: this.get('description') || null
            });

            console.log(post);
            console.log(this);

            node.save().then(function() {
                console.log("Success!");
                self.set('responseError', '');
                self.set('responseSuccess', `Your project was created successfully!`);
                self.set('title', '');
                self.set('description', '');
            }, function(error) {
                console.log("Error Saving Record: " + error.message);
                self.set('responseSuccess', '');
                self.set('responseError', 'There was an error creating your project.');
                self.set('title', '');
                self.set('description', '');
            });
        },
        responseMessage: function(name) {
            $('.ui.modal.response-message').modal().modal('show', name);
        },
        cancelCreate: function(name) {
            this.set('title', '');
            this.set('description', '');
            $('.ui.modal').modal().modal('hide');
        }
    }
});
