// app/pods/components/project-list/component.js
import Ember from 'ember';
import layout from './template';
import PaginatedControllerMixin from  'ember-osf/mixins/paginated-controller';

export default Ember.Component.extend(PaginatedControllerMixin, {
    layout,
    tagName: 'project-list',
    classNames: ['project-list']
});
