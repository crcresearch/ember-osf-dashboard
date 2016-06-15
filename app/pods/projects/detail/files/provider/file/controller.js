// app/pods/projects/detail/files/provider/file/controller.js
import Ember from 'ember';
import TaggableMixin from 'ember-osf/mixins/taggable-mixin';

export default Ember.Controller.extend(TaggableMixin, {
    actions: {
        reloadFiles() {
            this.transitionToRoute('projects.detail.files.provider',
                this.get('node'), this.model.get('provider'));
        }
    }
});
