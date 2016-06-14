// app/controller/nodes/detail/files/provider/file.js
import Ember from 'ember';
import TaggableMixin from 'ember-osf/mixins/taggable-mixin';

export default Ember.Controller.extend(TaggableMixin, {
    actions: {
        reloadFiles() {
            this.transitionToRoute('nodes.detail.files.provider',
                this.get('node'), this.model.get('provider'));
        }
    }
});
