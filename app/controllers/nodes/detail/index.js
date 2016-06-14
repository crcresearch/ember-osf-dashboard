// app/controller/nodes/detail/index.js
import Ember from 'ember';
import TaggableMixin from 'ember-osf/mixins/taggable-mixin';

export default Ember.Controller.extend(TaggableMixin, {
    editedPermissions: {},
    editedBibliographic: {},
    responseSuccess: '',
    responseError: '',
    selectedModel: '',
    actions: {
        expandProperties() {
            this.toggleProperty('propertiesVisible');
        },
        permissionChange(permission) {
            // Adds updated permissions for a certain contributor
            var p = permission.split(' ');
            var permissions = p[0];
            var contributorId = p[1];
            this.editedPermissions[contributorId] = permissions;
        },
        bibliographicChange(target) {
            // Adds updated bibliographic info for a certain contributor
            var bibliographic = target.checked;
            var contributorId = target.value;
            this.editedBibliographic[contributorId] = bibliographic;
        },
        requestDelete: function(node, name) {
            console.log(node);
            this.set('selectedModel', node);
            this.selectedModel.deleteRecord();
            $('.ui.modal').modal('setting', 'closable', false).modal('show');
        },
        confirmDelete: function() {
            console.log(this.selectedModel);
            var page = this.get('model');

            this.selectedModel.save().then(function() {
                page.reload();
            });
        },
        cancelDelete: function() {
            console.log(this.selectedModel);
            this.selectedModel.rollbackAttributes();
        },
        destroyNode: function(node) {
            var page = this.get('model');

            node.destroyRecord().then(function() {
                page.reload();
            });
        },
        closeMessage: function() {
            this.set('responseSuccess', '');
            this.set('responseError', '');
        }
    }
});
