import DS from 'ember-data';
import OsfModel from 'ember-osf/models/node';

export default OsfModel.extend({
    node: DS.attr('string'),
    name: DS.attr('string'),
    path: DS.attr('string'),
    materializedPath: DS.attr('string'),
    kind: DS.attr('string'),
    etag: DS.attr('string'),
    dateModified: DS.attr('date'),
    dateCreated: DS.attr('date'),
    contentType: DS.attr('string'),
    provider: DS.attr('string'),
    size: DS.attr('number'),
    files: DS.hasMany('files')
    // extra: DS.belongsTo('extra'),
    //     version: DS.attr('number'),
    //     downloads: DS.attr('number'),
    //     hashes: DS.attr('hash'),
    //     md5: DS.attr('string'),
    //     sha256: DS.attr('string')
});
