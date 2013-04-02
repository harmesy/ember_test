EmberTest.PostRoute = Ember.Route.extend({
	model: function(params) {
		return EmberTest.Post.find(params.post_id);
	},

	serialize: function(post) {
		return { post_id: post.get('id') };
	}
});
