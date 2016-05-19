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

            // TODO: Fix this
            this.set('responseMessage', `Your project was created successfully!`);
            node.save();
        },
        closeMessage: function() {
            console.log('Close!')
            $('.message.create-project').transition('fade');
        }
    }
});
