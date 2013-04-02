EmberTest.PostController = Ember.ObjectController.extend({
	editing: function() {
		this.set('isEditing', true);
	},

	save: function() {
		this.set('isEditing', false);
		this.get('store').commit();
	},

	cancel: function() {
		this.set('isEditing', false);
	}
});
