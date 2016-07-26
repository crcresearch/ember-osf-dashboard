// app/pods/components/file-widget/component.js
import FileWidget from 'ember-osf/components/oauth-popup/component';
import layout from './template';

export default FileWidget.extend({
    layout,
    tagName: ['file-widget'],
    classNames: ['file', 'widget']
});
