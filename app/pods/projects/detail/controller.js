// app/pods/projects/detail/controller.js
import Ember from 'ember';
import CommentableMixin from 'ember-osf/mixins/commentable';
import TaggableMixin from 'ember-osf/mixins/taggable-mixin';
import NodeActionsMixin from 'ember-osf/mixins/node-actions';

export default Ember.Controller.extend(CommentableMixin, TaggableMixin, NodeActionsMixin, {
    toast: Ember.inject.service(),
    isSaving: false,
    responseSuccess: '',
    responseError: '',
    selectedModel: '',
    actions: {
        toggleEditProject() {
            this.toggleProperty('propertiesVisible');
        },
        updateProject() {
            this.set('isSaving', true);
            return this._super(...arguments)
                .then(() => {
                    this.set('isSaving', false);
                    this.get('toast').success('Project updated successfully');
                })
                .catch(() => this.set('isSaving', false));
        },
        requestDelete(project, name) {
            this.set('selectedModel', project);
            this.selectedModel.deleteRecord();
            $('.ui.modal').modal('setting', 'closable', false).modal('show');
        },
        confirmDelete() {
            var self = this;
            this.selectedModel.save().then(function() {
                self.transitionToRoute('projects.index');
            });
        },
        cancelDelete() {
            console.log(this.selectedModel);
            this.selectedModel.rollbackAttributes();
        },
        closeMessage: function() {
            this.set('responseSuccess', '');
            this.set('responseError', '');
        }
    }
    // editedPermissions: {},
    // editedBibliographic: {},

    // actions: {
    //     expandProperties() {
    //         this.toggleProperty('propertiesVisible');
    //     },
    //     permissionChange(permission) {
    //         // Adds updated permissions for a certain contributor
    //         var p = permission.split(' ');
    //         var permissions = p[0];
    //         var contributorId = p[1];
    //         this.editedPermissions[contributorId] = permissions;
    //     },
    //     bibliographicChange(target) {
    //         // Adds updated bibliographic info for a certain contributor
    //         var bibliographic = target.checked;
    //         var contributorId = target.value;
    //         this.editedBibliographic[contributorId] = bibliographic;
    //     }
});
