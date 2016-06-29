// app/pods/components/project-edit/component.js
import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
    layout,
    tagName: 'project-delete',
    classNames: ['project', 'delete'],
    responseError: '',
    responseSuccess: '',
    selectedModel: '',
    actions: {
        requestDelete(name) {
            console.log(name);
            this.set('selectedModel', this.get('project'));
            this.selectedModel.deleteRecord();
            $('.ui.modal').modal('setting', 'closable', false).modal('show');
        },
        confirmDelete() {
            // TODO: Need to add error handling
            var self = this;
            this.selectedModel.save().then(function() {
                self.sendAction('transitionTo');
            });
        },
        cancelDelete() {
            this.selectedModel.rollbackAttributes();
        }
    }
});
