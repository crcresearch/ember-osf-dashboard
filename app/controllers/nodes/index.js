import Ember from 'ember';

export default Ember.Controller.extend({
    responseMessage: '',
    actions: {
        createNode: function(title, description) {
            var node = this.store.createRecord('node', {
                title: title,
                category: 'project',
                description: description || null
            });
            var post = this.get('model');
            var self = this;

            // TODO: Fix this
            this.set('responseMessage', `Your project was created successfully!`);
            node.save().then(function() {
                console.log(title + ' ' + description);
                self.set('title', '');
                self.set('description', '');
                post.reload();
            });
            console.log(self);
            console.log(title + ' ' + description);

        },
        closeMessage: function() {
            console.log('Close!');
            this.set('responseMessage', '');
        }
    }
});
