// app/models/extra.js
import DS from 'ember-data';
import OsfModel from 'ember-osf/models/node';

export default OsfModel.extend({
    node: DS.belongsTo('node'),
    version: DS.attr('number'),
    downloads: DS.attr('number'),
    //     hashes: DS.attr('hash'),
    //     md5: DS.attr('string'),
    //     sha256: DS.attr('string')
});
