var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * GalleryCategory Model
 * ==================
 */

var GalleryCategory = new keystone.List('GalleryCategory', {
	autokey: { from: 'name', path: 'key', unique: true }
});

GalleryCategory.add({
	name: { type: String, required: true }
});

GalleryCategory.relationship({ ref: 'Gallery', path: 'categories' });

GalleryCategory.register();